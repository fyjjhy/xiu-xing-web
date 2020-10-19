import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal, Select } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import HeBing from "../../components/HeBing";
import {congShuMetaModel} from "../../json/congShu";
import {congShuHisMetaModel} from "../../json/congShuHis";
import CongShuCangKu from "../../components/CongShuCangKu";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ congShu, congShuHis, cangKuHis, loading }) => ({
  congShu,
  congShuHis,
  cangKuHis,
  loading,
}))
export default class CongShu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      optVisible: false,
      ckVisible: false,
      heBingVisible: false,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { congShuId: record.id },
      optVisible: true,
    });
  };

  handleCk = async (record) => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'cangKuHis/emptyHisList',
    });
    dispatch({
      type: 'cangKuHis/cangKuCongShuList',
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
      type: 'congShu/query',
      payload: {},
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
    this.reloadCongShu();
  };

  handleCkOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckVisible: false,
    });
    this.reloadCongShu();
  };

  handleHeBingOnCancel = () => {
    this.setState({
      currentModel: '',
      heBingVisible: false,
    });
    this.reloadCongShu();
  };

  // 合并
  handleHeBingOnOk = (params) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'congShu/heBing',
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
  reloadCongShu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'congShu/changeNeedLoad',
      payload: true,
    });
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderCongShuMiaoShu = text => {
    const title = renderMiaoShu(text);
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

  render() {
    const { props } = this;
    const { currentModel, currentInfo, optVisible, ckVisible, heBingVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          customFormItem={{
            addrId: this.renderAddrId,
          }}
          columnWidth="150px"
          // scroll={{ x: '100vw' }}
          fixed="right"
          renderMiaoShu={this.renderCongShuMiaoShu}
          showTotal={this.showTotal}
          opt={this.handleOpt}
          ck={this.handleCk}
          heBing={this.handleHeBing}
          {...congShuMetaModel()}
          {...props}
        />
        {currentModel === 'opt' ? (
        <Modal
          okButtonProps={{ disabled: true }}
          bodyStyle={{ padding: '0px' }}
          maskClosable={false}
          title="操作记录"
          visible={optVisible}
          // onOk={this.handleOk}
          onCancel={this.handleOptOnCancel}
          width={1000}
        >
          <StandardPager
            // scroll={{ x: '100vw' }} // 固定前后列，横向滚动查看其它数据
            fixed="right"
            searchBtn='search'
            // columnWidth="60px"
            showTotal={this.showTotal}
            customFormItem={{
              addrId: this.renderAddrId,
            }}
            renderMiaoShu={this.renderOptMiaoShu}
            rowInfo={currentInfo}
            profile={false}
            {...congShuHisMetaModel()}
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
            ns="congShu" // ns:namespace
            visible={heBingVisible}
            heBingOnCancel={this.handleHeBingOnCancel}
            heBingOnOk={this.handleHeBingOnOk}
            {...props}
          />
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

