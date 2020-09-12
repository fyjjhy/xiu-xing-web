import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal, Select } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {suoShuMetaModel} from "../../json/suoShu";
import {suoShuHisMetaModel} from "../../json/suoShuHis";
import LingWuCangKu from "../../components/LingWuCangKu";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ suoShu, suoShuHis, cangKuHis, loading }) => ({
  suoShu,
  suoShuHis,
  cangKuHis,
  loading,
}))
export default class SuoShu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      optVisible: false,
      ckVisible: false,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { suoShuId: record.id },
      optVisible: true,
    });
  }

  handleCk = async (record) => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'cangKuHis/emptyHisList',
    });
    dispatch({
      type: 'cangKuHis/queryHisList',
      payload: { suoShuId: record.id },
    });
    this.setState({
      currentModel: 'ck',
      ckVisible: true,
    });
  }

  handleCangKuLingWuClick = async (record) => {
    const { dispatch } = this.props;
    const params = {};
    params.suoShuId = record.suoShuId;
    params.lingWuId = record.lingWuId;
    if (record.lingWuShuXing) {
      params.lingWuShuXing = record.lingWuShuXing;
    }
    await dispatch({
      type: 'cangKuHis/emptyList',
    });
    dispatch({
      type: 'cangKuHis/query',
      payload: { ...params },
    });
  }

  handleOptOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    });
    this.reloadSuoShu();
  }

  handleCkOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckVisible: false,
    });
    this.reloadSuoShu();
  }

  // 重新加载coupons
  reloadSuoShu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'suoShu/changeNeedLoad',
      payload: true,
    });
  }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

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
    const { formItemLayout, column, searchArea } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={searchArea || 700}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  }

  render() {
    const { props } = this;
    const { currentModel, currentInfo, optVisible, ckVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          customFormItem={{
            addrId: this.renderAddrId,
          }}
          columnWidth="150px"
          // scroll={{ x: '100vw' }}
          fixed="right"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          opt={this.handleOpt}
          ck={this.handleCk}
          {...suoShuMetaModel()}
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
            scroll={{ x: '100vw' }} // 固定前后列，横向滚动查看其它数据
            fixed="right"
            searchBtn='search'
            showTotal={this.showTotal}
            renderMiaoShu={this.renderMiaoShu}
            rowInfo={currentInfo}
            profile={false}
            {...suoShuHisMetaModel()}
            {...props}
          />
        </Modal>
        ) : ''}
        {currentModel === 'ck' ? (
          <LingWuCangKu
            visible={ckVisible}
            ckOnCancel={this.handleCkOnCancel}
            ckLwRecordClick={this.handleCangKuLingWuClick}
            {...props}
          />
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

