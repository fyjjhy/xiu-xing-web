import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal, Select } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {congMetaModel} from "../../json/cong";
import {congHisMetaModel} from "../../json/congHis";
import CongGuiJi from "../../components/CongGuiJi";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ cong, congHis, loading }) => ({
  cong,
  congHis,
  loading,
}))
export default class Cong extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      optVisible: false,
      guiJiVisible: false,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { congId: record.id },
      optVisible: true,
    });
  };

  handleChuangXin = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'congHis/chuangXin',
      payload: record,
    });
  };

  handleOptOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    });
    this.reloadCong();
  };

  // 打开轨迹对话框
  handleGuiJi = (record) => {
    this.setState({
      currentModel: 'guiJi',
      guiJiVisible: true,
    });
    const { dispatch } = this.props;
    dispatch({
      type: 'congHis/query',
      payload: { congId: record.id },
    });
  };

  handleGuiJiOnCancel = () => {
    this.setState({
      currentModel: '',
      guiJiVisible: false,
    });
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderCongMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderOptMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 重新加载coupons
  reloadCong = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cong/changeNeedLoad',
      payload: true,
    });
  };

  // 其他灵物管理分页信息
  showTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  renderCongType = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, currentModel } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {
            valueListData && valueListData.length > 0
              ? (valueListData.filter(data => {
                if (currentModel === 'add') {
                  return data.dataName !== '属';
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
    const { currentModel, currentInfo, optVisible, guiJiVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="230px"
          renderMiaoShu={this.renderCongMiaoShu}
          showTotal={this.showTotal}
          customFormItem={{ congType: this.renderCongType, zhangJieId: this.renderZhangJieId }}
          opt={this.handleOpt}
          guiJi={this.handleGuiJi}
          {...congMetaModel()}
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
              chuangXin={this.handleChuangXin}
              // columnWidth="120px"
              customFormItem={{ zhangJieId: this.renderZhangJieId }}
              searchBtn='search'
              showTotal={this.showTotal}
              renderMiaoShu={this.renderOptMiaoShu}
              rowInfo={currentInfo}
              profile={false}
              {...congHisMetaModel()}
              {...props}
            />
          </Modal>
        ) : ''}
        {currentModel === 'guiJi' ? (
          <CongGuiJi
            visible={guiJiVisible}
            guiJiOnCancel={this.handleGuiJiOnCancel}
            {...props}
          />
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

