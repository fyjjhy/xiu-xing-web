/* eslint-disable no-nested-ternary */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Select } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {cangKuMetaModel} from "../../json/cangKu";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ cangKu, jingJie, pinJi, loading }) => ({
  cangKu,
  jingJie,
  pinJi,
  loading,
}))
export default class CangKu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      ...cangKuMetaModel(),
      jingJieList: [],
      pinJiList: [],
    };
  }

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

  handleXiaoShuo = value => {
    const { dispatch } = this.props;
    dispatch({
      type: 'jingJie/query',
      payload: { xiaoShuoId: value },
    });

    dispatch({
      type: 'pinJi/query',
      payload: { xiaoShuoId: value },
    });
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

  renderXiaoShuo = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleXiaoShuo}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  }

  render() {
    const { props, state } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          scroll={{ x: '180%' }}
          fixed="right"
          customFormItem={{ jingJieId: this.renderJingJie, pinJiId: this.renderPinJi, xiaoShuoId: this.renderXiaoShuo }}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...state}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

