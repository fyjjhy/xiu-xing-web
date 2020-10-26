import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal, Select } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderBadgeMiaoShu, renderMiaoShu} from "../../utils/utils";
import {shuHisMetaModel} from "../../json/shuHis";
import HeBing from "../../components/HeBing";
import {shuMetaModel} from "../../json/shu";
import CongShuCangKu from "../../components/CongShuCangKu";
import GuiJi from "../../components/GuiJi";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ shu, shuHis, cangKuHis, loading }) => ({
  shu,
  shuHis,
  cangKuHis,
  loading,
}))
export default class Shu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      optVisible: false,
      ckVisible: false,
      heBingVisible: false,
      guiJiVisible: false,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { shuId: record.id },
      optVisible: true,
    });
  };

  handleCk = async (record) => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'cangKuHis/emptyHisList',
    });
    dispatch({
      type: 'cangKuHis/queryHisList',
      payload: { congShuId: record.id },
    });
    this.setState({
      currentModel: 'ck',
      ckVisible: true,
    });
  };

  // 打开合并对话框
  handleHeBing = () => {
    this.setState({
      currentModel: 'heBing',
      heBingVisible: true,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'shu/query',
      payload: {},
    });
  };

  // 打开轨迹对话框
  handleGuiJi = (record) => {
    this.setState({
      currentModel: 'guiJi',
      guiJiVisible: true,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'shuHis/query',
      payload: { shuId: record.id },
    });
  };

  handleCangKuCongClick = async (record) => {
    const { dispatch } = this.props;
    const params = {};
    // 查询同一仓库，同一所属的灵物信息（灵物相同，也可以不相同）
    params.shuId = record.shuId;
    // params.lingWuId = record.lingWuId;
    params.cangKuId = record.cangKuId;
    // if (record.lingWuShuXing) {
    //   params.lingWuShuXing = record.lingWuShuXing;
    // }
    await dispatch({
      type: 'cangKuHis/emptyList',
    });
    dispatch({
      type: 'cangKuHis/query',
      payload: { ...params },
    });
  };

  handleOptOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    });
    this.reloadShu();
  };

  handleCkOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckVisible: false,
    });
    this.reloadShu();
  };

  handleHeBingOnCancel = () => {
    this.setState({
      currentModel: '',
      heBingVisible: false,
    });
    this.reloadShu();
  };

  handleGuiJiOnCancel = () => {
    this.setState({
      currentModel: '',
      guiJiVisible: false,
    });
  };

  // 合并
  handleHeBingOnOk = (params) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'shu/heBing',
      payload: params,
    });
  };

  handleCkSearch = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKuHis/searchHisList',
      payload: values,
    });
  };

  // 重新加载coupons
  reloadShu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'shu/changeNeedLoad',
      payload: true,
    });
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderShuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderCengYongMing = text => {
    const title = renderBadgeMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderOptMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 分页信息
  showTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 属操作记录分页信息
  showShuOptTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  renderAddrId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={/* searchArea || */700}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  renderShuType = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, currentModel } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {
            valueListData && valueListData.length > 0
              ? (valueListData.filter(data => {
                if (currentModel === 'add') {
                  return data.dataName !== '从';
                }
                if (currentModel === 'edit') {
                  return data.dataName !== '从属';
                }
                return true;
              }).map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          }
        </Select>
      </FormItem>
    );
  };

  renderZhangJieId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={/* searchArea || */700}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  render() {
    const { props } = this;
    const { currentModel, currentInfo, optVisible, ckVisible, heBingVisible, guiJiVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          customFormItem={{
            addrId: this.renderAddrId,
            shuType: this.renderShuType,
            zhangJieId: this.renderZhangJieId,
          }}
          columnWidth="150px"
          // scroll={{ x: '100vw' }}
          fixed="right"
          autoApi={{ modal: { width: '700px' } }}
          renderMiaoShu={this.renderShuMiaoShu}
          renderCengYongMing={this.renderCengYongMing}
          showTotal={this.showTotal}
          opt={this.handleOpt}
          ck={this.handleCk}
          guiJi={this.handleGuiJi}
          heBing={this.handleHeBing}
          {...shuMetaModel()}
          {...props}
        />
        {currentModel === 'opt' ? (
        <Modal
          okButtonProps={{ disabled: true }}
          bodyStyle={{ padding: '0px' }}
          maskClosable={false}
          title="属操作记录"
          visible={optVisible}
          // onOk={this.handleOk}
          onCancel={this.handleOptOnCancel}
          width={1300}
        >
          <StandardPager
            // scroll={{ x: '100vw' }} // 固定前后列，横向滚动查看其它数据
            fixed="right"
            searchBtn='search'
            // columnWidth="60px"
            showTotal={this.showShuOptTotal}
            customFormItem={{
              addrId: this.renderAddrId,
              zhangJieId: this.renderZhangJieId,
            }}
            autoApi={{ modal: { width: '700px' } }}
            renderMiaoShu={this.renderOptMiaoShu}
            rowInfo={currentInfo}
            profile={false}
            {...shuHisMetaModel()}
            {...props}
          />
        </Modal>
        ) : ''}
        {currentModel === 'ck' ? (
          <CongShuCangKu
            visible={ckVisible}
            ckOnCancel={this.handleCkOnCancel}
            ckLwRecordClick={this.handleCangKuCongClick}
            ckSearch={this.handleCkSearch}
            {...props}
          />
        ) : ''}
        {currentModel === 'heBing' ? (
          <HeBing
            ns="shu" // ns:namespace
            visible={heBingVisible}
            heBingOnCancel={this.handleHeBingOnCancel}
            heBingOnOk={this.handleHeBingOnOk}
            {...props}
          />
        ) : ''}
        {currentModel === 'guiJi' ? (
          <GuiJi
            visible={guiJiVisible}
            guiJiOnCancel={this.handleGuiJiOnCancel}
            {...props}
          />
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

