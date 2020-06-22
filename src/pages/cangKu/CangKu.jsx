/* eslint-disable no-nested-ternary */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Select, Button, Modal } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {cangKuMetaModel} from "../../json/cangKu";
import {Input} from "../../components/InputArea";
import {renWuMetaModel} from "../../json/renWu";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ cangKu, jingJie, pinJi, renWu, loading }) => ({
  cangKu,
  jingJie,
  pinJi,
  renWu,
  loading,
}))
export default class CangKu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      ...cangKuMetaModel(),
      jingJieList: [],
      pinJiList: [],
      currentModel: null,
      lingWuInfoVisible: false,
      lingWuSelectedRow: {},
      suoShuZheSelectedRow: {},
    };
  }

  rowProps= {};

  componentWillReceiveProps(nextProps) {
    const { jingJie: { datas: { list: afterJingJieList } } } = nextProps;
    const { jingJie: { datas: { list: beforeJingJieList } } } = this.props;
    if (afterJingJieList !== beforeJingJieList) {
      this.setState({
        jingJieList: [...afterJingJieList],
      });
    }

    const { pinJi: { datas: { list: afterPinJiList } } } = nextProps;
    const { pinJi: { datas: { list: beforePinJiList } } } = this.props;
    if (afterPinJiList !== beforePinJiList) {
      this.setState({
        pinJiList: [...afterPinJiList],
      });
    }
  }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 其他灵物管理分页信息
  showTotal = () => {
    const { cangKu: { datas: { pagination } } } = this.props;
    if (pagination && pagination.total) {
      return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
    }
      return { showTotal: () => '' };

  }

  handleLingWuFenLei = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'jingJie/query',
      payload: { jingJieFenLei: value },
    });

    dispatch({
      type: 'pinJi/query',
      payload: { pinJiFenLei: value },
    });
  }

  handleRenWuButton = () => {
    this.setState({ currentModel: 'renWu', lingWuInfoVisible: true });
  }

  handleSuoShuZheButton = () => {
    this.setState({ currentModel: 'renWu', lingWuInfoVisible: true });
  }

  handleLingWuInfoOnCancel = () => {
    this.setState({ currentModel: null, lingWuInfoVisible: false });
  }

  handleLingWuInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { lingWuSelectedRow } = this.state;
      setFieldsValue({
        lingWuName: lingWuSelectedRow.renWuName,
        lingWuFenLei: lingWuSelectedRow.renWuFenLei,
        lingWuShuXing: lingWuSelectedRow.renWuShuXing,
        lingWuState: lingWuSelectedRow.renWuState,
        lingWuMiaoShu: lingWuSelectedRow.renWuMiaoShu,
        xiaoShuoId: lingWuSelectedRow.xiaoShuoId,
      });
      if (lingWuSelectedRow.renWuFenLei) {
        this.handleLingWuFenLei(lingWuSelectedRow.renWuFenLei);
      }
    }
    this.handleLingWuInfoOnCancel();
  }


  handleTableOnSelectRow = (selectedRows) => {
    this.setState({ lingWuSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  }

  renderRenWuShuXing = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  renderRenWuMiaoShu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  renderLingWuName = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    const rules = [{ required: column.requiredFlag === 'Y', message: column.errorText || '请填写正确的信息' }];
    return (
      <Fragment>
        <FormItem {...formItemLayout} label="灵物">
          <Button onClick={this.handleRenWuButton} type="primary">灵物信息选择</Button>
        </FormItem>
        <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={rules}>
          <Input placeholder={`请输入${column.columnName}`} />
        </FormItem>
      </Fragment>
    );
  }

  renderSuoShuZhe = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    const rules = [{ required: column.requiredFlag === 'Y', message: column.errorText || '请填写正确的信息' }];
    return (
      <Fragment>
        <FormItem {...formItemLayout} label="所属者">
          <Button onClick={this.handleSuoShuZheButton} type="primary">所属者信息选择</Button>
        </FormItem>
        <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={rules}>
          <Input placeholder={`请输入${column.columnName}`} />
        </FormItem>
      </Fragment>
    );
  }

  renderJingJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, form } = rowProps;
    const { valueListData } = rowState;
    const { jingJieList } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {form && form.getFieldValue('xiaoShuoId') ? (
            jingJieList && jingJieList.length > 0
              ? (jingJieList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderPinJi = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, form } = rowProps;
    const { valueListData } = rowState;
    const { pinJiList } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={`请选择${column.columnName}`}>
          {form && form.getFieldValue('xiaoShuoId') ? (
            pinJiList && pinJiList.length > 0
              ? (pinJiList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderLingWuFenLei = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleLingWuFenLei}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  }

  render() {
    const { props, state } = this;
    const { currentModel, lingWuInfoVisible, lingWuSelectedRow } = state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          scroll={{ x: '180%' }}
          fixed="right"
          customFormItem={{
            jingJieId: this.renderJingJie,
            pinJiId: this.renderPinJi,
            lingWuFenLei: this.renderLingWuFenLei,
            lingWuName: this.renderLingWuName,
            suoShuZhe: this.renderSuoShuZhe,
          }}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...state}
          {...props}
        />
        {currentModel === 'renWu' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(lingWuSelectedRow).length === 0 }}
            title="灵物信息"
            maskClosable={false}
            visible={lingWuInfoVisible}
            onOk={this.handleLingWuInfoOnOk}
            onCancel={this.handleLingWuInfoOnCancel}
            width={1000}
          >
            <StandardPager
              columnWidth="160px"
              fixed="right"
              renderRenWuShuXing={this.renderRenWuShuXing}
              renderRenWuMiaoShu={this.renderRenWuMiaoShu}
              scroll={{ x: 'max-content' }}
              {...renWuMetaModel()}
              tableSelectType="radio"
              onSelectRow={this.handleTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

