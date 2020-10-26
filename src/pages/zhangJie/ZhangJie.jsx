/* eslint-disable no-nested-ternary */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { SearchOutlined } from '@ant-design/icons';

import { Tooltip, Select, Button, List, Avatar, Modal, Tag, notification, Descriptions, Badge /* , Typography */ } from 'antd';

import StandardPager from "../../template/StandardPager";
import { renderMiaoShu, renderBadgeMiaoShu } from "../../utils/utils";
import {zhangJieMetaModel} from "../../json/zhangJie";
import {cangKuShuHisMetaModel} from "../../json/cangKuShuHis";
import {cangKuCongHisMetaModel} from "../../json/cangKuCongHis";

// const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ zhangJie, cangKuCongHis, cangKuShuHis, loading }) => ({
  zhangJie,
  cangKuCongHis,
  cangKuShuHis,
  loading,
}))
export default class ZhangJie extends PureComponent {
  state = {
    congShuModal: null,
    congInfoVisible: false,
    shuInfoVisible: false,
    infoVisible: false,
    congSelectedRows: [],
    shuSelectedRows: [],
    congInfos: [],
    shuInfos: [],
    congIds: null,
    shuIds: null,
    selectedRows: [],
    info: null,

  };
  // renderMiaoShu = text => {
  //   const title = renderMiaoShu(text);
  //   return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { zhangJie: { data: beforeData } } = this.props;
    const { zhangJie: { data: afterData } } = nextProps;
    if (afterData !== beforeData && !!afterData) {
      const { congInfo, shuInfo } = afterData;
      if (congInfo && congInfo.length > 0) {
        this.setState({ congSelectedRows: [...congInfo] });
      }

      if (shuInfo && shuInfo.length > 0) {
        this.setState({ shuSelectedRows: [...shuInfo] });
      }
    }
  }

  handleCongInfoSearch = e => {
    e.preventDefault();
    const { congInfos } = this.state;
    this.setState({ congShuModal: 'cong', congInfoVisible: true, congIds: congInfos && congInfos.length > 0 ? congInfos.join(',') : null });
  };

  handleShuInfoSearch = e => {
    e.preventDefault();
    const { shuInfos } = this.state;
    this.setState({ congShuModal: 'shu', shuInfoVisible: true, shuIds: shuInfos && shuInfos.length > 0 ? shuInfos.join(',') : null });
  };

  handleCongInfoMulSelectChange = (value) => {
    this.setState({ congInfos: value });
  };

  handleShuInfoMulSelectChange = (value) => {
    this.setState({ shuInfos: value });
  };

  handleCongInfoOnOk = () => {
    // 判断在搜索列表是否有选择记录数据
    // 1.如果有，继续判断，选中的搜索列表数据，是否已经展示在从信息中
    // 1.1 如果有，给出信息提示，并且不关闭搜索列表页面
    // 1.2 如果没有，添加到从信息中，并且关闭搜索列表页面
    // 2.如果没有，直接关闭搜索列表页面
    const { selectedRows, congSelectedRows } = this.state;
    if (selectedRows && selectedRows.length > 0) {
      if (congSelectedRows && congSelectedRows.length > 0) {
        const repeatRows = [];
        const newRows = [];
        selectedRows.forEach(row => {
          if (congSelectedRows.findIndex(selected => selected.id === row.id) !== -1) {
            repeatRows.push(row);
          } else {
            newRows.push(row);
          }
        });
        if (repeatRows && repeatRows.length > 0) {
          repeatRows.forEach(row => {
            notification.open({
              message: <span style={{ fontSize: '14px' }}><strong>从名称</strong>：{row.congName} <Tag color="warning">已存在</Tag></span>,
              description:
                <Descriptions column={1}>
                  <Descriptions.Item style={{ paddingBottom: '8px' }} label={<strong>从分类</strong>}>{row.congFenLeiName}</Descriptions.Item>
                  <Descriptions.Item label={<strong>从描述</strong>}>{row.congMiaoShu}</Descriptions.Item>
                </Descriptions>,
            });
          });
          return;
        }
        this.setState({ congSelectedRows: [...congSelectedRows, ...newRows] });
      } else {
        this.setState({ congSelectedRows: [...selectedRows] });
      }
    }
    this.handleCongInfoOnCancel();
  };

  handleShuInfoOnOk = () => {
    // 判断在搜索列表是否有选择记录数据
    // 1.如果有，继续判断，选中的搜索列表数据，是否已经展示在属信息中
    // 1.1 如果有，给出信息提示，并且不关闭搜索列表页面
    // 1.2 如果没有，添加到属信息中，并且关闭搜索列表页面
    // 2.如果没有，直接关闭搜索列表页面
    const { selectedRows, shuSelectedRows } = this.state;
    if (selectedRows && selectedRows.length > 0) {
      if (shuSelectedRows && shuSelectedRows.length > 0) {
        const repeatRows = [];
        const newRows = [];
        selectedRows.forEach(row => {
          if (shuSelectedRows.findIndex(selected => selected.id === row.id) !== -1) {
            repeatRows.push(row);
          } else {
            newRows.push(row);
          }
        });
        if (repeatRows && repeatRows.length > 0) {
          repeatRows.forEach(row => {
            notification.open({
              message:
                <span style={{ fontSize: '14px' }}>
                  <strong>属名称</strong>：{row.shuName} <Tag color="warning">已存在</Tag>
                </span>,
              description:
                <Descriptions column={1}>
                  <Descriptions.Item style={{ paddingBottom: '8px' }} label={<strong>属分类</strong>}>{row.shuFenLeiName}</Descriptions.Item>
                  <Descriptions.Item style={{ paddingBottom: '8px' }} label={<strong>属境界</strong>}>{row.shuJingJieName}</Descriptions.Item>
                  <Descriptions.Item style={{ paddingBottom: '8px' }} label={<strong>属品级</strong>}>{row.shuPinJiName}</Descriptions.Item>
                  <Descriptions.Item style={{ paddingBottom: '8px' }} label={<strong>属地址</strong>}>{row.addrFullName}</Descriptions.Item>
                  <Descriptions.Item label={<strong>属描述</strong>}>{row.shuMiaoShu}</Descriptions.Item>
                </Descriptions>,
            });
          });
          return;
        }
        this.setState({ shuSelectedRows: [...shuSelectedRows, ...newRows] });
      } else {
        this.setState({ shuSelectedRows: [...selectedRows] });
      }
    }
    this.handleShuInfoOnCancel();
  };

  handleCongInfoOnCancel = () => {
    this.setState({ congShuModal: null, congInfoVisible: false, selectedRows: [] });
  };

  handleShuInfoOnCancel = () => {
    this.setState({ congShuModal: null, shuInfoVisible: false, selectedRows: [] });
  };

  handleInfoOnCancel = () => {
    this.setState({ congShuModal: null, infoVisible: false, selectedRows: [], congSelectedRows: [], shuSelectedRows: [] });
  };

  handleCongTableOnSelectRow = selectedRows => {
    this.setState({ selectedRows: selectedRows && selectedRows.length > 0 ? selectedRows : [] });
  };

  handleShuTableOnSelectRow = selectedRows => {
    this.setState({ selectedRows: selectedRows && selectedRows.length > 0 ? selectedRows : [] });
  };

  handleCongInfoDel = (item) => {
    const { congSelectedRows } = this.state;
    this.setState({
      congSelectedRows: congSelectedRows.filter(row => row.id !== item.id),
    });
  };

  handleShuInfoDel = (item) => {
    const { shuSelectedRows } = this.state;
    this.setState({
      shuSelectedRows: shuSelectedRows.filter(row => row.id !== item.id),
    });
  };

  handleSubmit = async (values, currentModel) => {
    const params = { ...values };
    const { congSelectedRows, shuSelectedRows } = this.state;
    if (congSelectedRows && congSelectedRows.length > 0) {
      params.congInfos = congSelectedRows;
    }

    if (shuSelectedRows && shuSelectedRows.length > 0) {
      params.shuInfos = shuSelectedRows;
    }
    const { dispatch } = this.props;
    if (currentModel === 'add') {
      await dispatch({
        type: 'zhangJie/add',
        payload: params,
      });
    }
    if (currentModel === 'edit') {
      await dispatch({
        type: 'zhangJie/update',
        payload: params,
      });
    }
    // 清楚从信息，属信息
    this.handleClear();
    // 重新加载章节列表
    this.handleReloadList();
  };

  handleCongShuTitle = () => {
    const { info, congSelectedRows, shuSelectedRows } = this.state;
    return (
      <Badge
        size="small"
        offset={[16, 8]}
        count={info === 'congInfo' ? congSelectedRows.length : info === 'shuInfo' ? shuSelectedRows.length : 0}
      >
        <h4>从属信息</h4>
      </Badge>
    );
  };

  handleInfoDataSource = () => {
    const { info, congSelectedRows, shuSelectedRows } = this.state;
    if (info === 'congInfo') {
      return congSelectedRows.map((congRow, index) => {
        const key = index + 1;
        return { ...congRow, index: key };
      });
    }
    if (info === 'shuInfo') {
      return shuSelectedRows.map((shuRow, index) => {
        const key = index + 1;
        return { ...shuRow, index: key };
      });
    }
    return [];
  };

  handleClear = () => {
    this.setState({
      congSelectedRows: [],
      shuSelectedRows: [],
      selectedRows: [],
      congInfos: [],
      shuInfos: [],
      congIds: null,
      shuIds: null,
    });
  };

  handleReloadList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/changeNeedLoad',
      payload: true,
    });
  };

  handleCongInfoNameOnClick = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/get',
      payload: record,
    });
    this.setState({
      congShuModal: 'congShuList',
      info: 'congInfo',
      infoVisible: true,
    });
  };

  handleShuInfoNameOnClick = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/get',
      payload: record,
    });
    this.setState({
      congShuModal: 'congShuList',
      info: 'shuInfo',
      infoVisible: true,
    });
  };

  renderCongInfoName = (text, record) => {
    const title = renderBadgeMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}><a onClick={() => this.handleCongInfoNameOnClick(record)}>{text}</a></Tooltip>);
  };

  renderShuInfoName = (text, record) => {
    const title = renderBadgeMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}><a onClick={() => this.handleShuInfoNameOnClick(record)}>{text}</a></Tooltip>);
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderCongMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderShuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 章节管理分页信息
  showTotal = metaModel => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 从操作记录分页信息
  showCongTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 属操作记录分页信息
  showShuTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  renderCongInfo = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode}  rules={[]}>
          <Select
            // labelInValue
            mode="multiple"
            allowClear
            showSearch
            optionFilterProp="title"
            // dropdownMatchSelectWidth={/* searchArea || */700}
            placeholder={`请选择${column.columnName}`}
            style={{ width: '90%' }}
            onChange={this.handleCongInfoMulSelectChange}
          >
            {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
          </Select>
          <Button
            style={{ marginLeft: '4px' }}
            type="primary"
            icon={<SearchOutlined/>}
            onClick={this.handleCongInfoSearch}
          >
            查询
          </Button>
        </FormItem>
        <FormItem {...formItemLayout} wrapperCol={{ offset: 2, span: 24 }} name="congList">
          <List
            bordered
            itemLayout="horizontal"
            dataSource={this.state.congSelectedRows}
            renderItem={item => (
              <List.Item extra={<a onClick={() => (this.handleCongInfoDel(item, this))}>刪除</a>}>
                <List.Item.Meta
                  avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
                  title={
                    <span>
                      {item.congName}
                      {item.congFenLeiName ? (<Tag style={{marginLeft: '8px'}} color="#87d068">{item.congFenLeiName}</Tag>) : ''}
                    </span>
                  }
                  description={renderMiaoShu(item.congMiaoShu)}
                />
              </List.Item>
            )}
          />
        </FormItem>
      </Fragment>
    );
  };

  renderShuInfo = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
          <Select
            // labelInValue
            mode="multiple"
            allowClear
            showSearch
            optionFilterProp="title"
            // dropdownMatchSelectWidth={/* searchArea || */700}
            placeholder={`请选择${column.columnName}`}
            style={{ width: '90%' }}
            onChange={this.handleShuInfoMulSelectChange}
          >
            {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
          </Select>
          <Button
            style={{ marginLeft: '4px' }}
            type="primary"
            icon={<SearchOutlined/>}
            onClick={this.handleShuInfoSearch}
          >
            查询
          </Button>
        </FormItem>
        <FormItem {...formItemLayout} wrapperCol={{ offset: 2, span: 24 }} name="shuList">
          <List
            bordered
            // itemLayout="vertical"
            itemLayout="horizontal"
            dataSource={this.state.shuSelectedRows}
            renderItem={item => (
              <List.Item extra={<a onClick={() => (this.handleShuInfoDel(item, this))}>刪除</a>}>
                <List.Item.Meta
                  avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
                  title={
                    <span>
                      {item.shuName}
                      {item.shuFenLeiName ? (<Tag style={{marginLeft: '8px'}} color="#87d068">{item.shuFenLeiName}</Tag>) : ''}
                      {item.shuJingJieName ? (<Tag color="#87d068">{item.shuJingJieName}</Tag>) : ''}
                      {item.shuPinJiName ? (<Tag color="#87d068">{item.shuPinJiName}</Tag>) : ''}
                      {item.addrFullName}
                    </span>
                  }
                  description={renderMiaoShu(item.shuMiaoShu)}
                />
              </List.Item>
            )}
          />
        </FormItem>
      </Fragment>
    );
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

  renderInfo = (item) => {
    const {info} = this.state;
    if (info === 'congInfo') {
      return (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
            title={
              <span>
                <Badge style={{ marginBottom: '3px', marginRight: '3px' }} size="small" count={item.index} />{item.congName}
                {item.congFenLeiName ? (
                  <Tag style={{marginLeft: '8px'}} color="#87d068">{item.congFenLeiName}</Tag>) : ''}
                    </span>
            }
            description={renderMiaoShu(item.congMiaoShu)}
          />
        </List.Item>
      );
    }
    if (info === 'shuInfo') {
      return (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
            title={
              <span>
                <Badge style={{ marginBottom: '3px', marginRight: '3px' }} size="small" count={item.index} />{item.shuName}
                {item.shuFenLeiName ? (
                  <Tag style={{marginLeft: '8px'}} color="#87d068">{item.shuFenLeiName}</Tag>) : ''}
                {item.shuJingJieName ? (<Tag color="#87d068">{item.shuJingJieName}</Tag>) : ''}
                {item.shuPinJiName ? (<Tag color="#87d068">{item.shuPinJiName}</Tag>) : ''}
                {item.addrFullName}
                    </span>
            }
            description={renderMiaoShu(item.shuMiaoShu)}
          />
        </List.Item>
      );
    }
    return '';
  };

  render() {
    const { props } = this;
    const { congShuModal, congInfoVisible, congIds, selectedRows, shuInfoVisible, shuIds, infoVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          expandOnCancel={this.handleClear}
          addOnSubmit={this.handleSubmit}
          editOnSubmit={this.handleSubmit}
          columnWidth="110px"
          customFormItem={{
            congInfo: this.renderCongInfo,
            shuInfo: this.renderShuInfo,
          }}
          autoApi={{
            modal: { width: '1000px' },
            form: { labelCol: { span: 2 }, wrapperCol: { span: 22 }},
          }}
          renderCongInfoName={this.renderCongInfoName}
          renderShuInfoName={this.renderShuInfoName}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...zhangJieMetaModel()}
          {...props}
        />
        {congShuModal === 'cong' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: selectedRows.length === 0 }}
            title="从信息"
            maskClosable={false}
            visible={congInfoVisible}
            onOk={this.handleCongInfoOnOk}
            onCancel={this.handleCongInfoOnCancel}
            width={1000}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              extraInfo={{ congIds }} // 列表搜索用
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showCongTotal}
              renderCongShuXing={this.renderCongShuXing}
              renderMiaoShu={this.renderCongMiaoShu}
              // scroll={{ x: '60vw' }}
              {...cangKuCongHisMetaModel()}
              // tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleCongTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
         {congShuModal === 'shu' ? (
           <Modal
             bodyStyle={{ padding: 0 }}
             okButtonProps={{ disabled: Object.keys(selectedRows).length === 0 }}
             title="属信息"
             maskClosable={false}
             visible={shuInfoVisible}
             onOk={this.handleShuInfoOnOk}
             onCancel={this.handleShuInfoOnCancel}
             width={1300}
             cancelText="取消"
             okText="确定"
           >
             <StandardPager
               extraInfo={{ shuIds }} // 列表搜索用
               columnWidth="110px"
               fixed="right"
               searchBtn="search"
               profile={false}
               showTotal={this.showShuTotal}
               renderMiaoShu={this.renderShuMiaoShu}
               // scroll={{ x: '90vw' }}
               {...cangKuShuHisMetaModel()}
               // tableSelectType="radio"
               customFormItem={{
                 addrId: this.renderAddrId,
               }}
               rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
               onSelectRow={this.handleShuTableOnSelectRow}
               {...props}
             />
           </Modal>
         ) : ''}
        {congShuModal === 'congShuList' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: true }}
            title={this.handleCongShuTitle()}
            maskClosable={false}
            visible={infoVisible}
            // onOk={this.handleShuInfoOnOk}
            onCancel={this.handleInfoOnCancel}
            width={1150}
            cancelText="取消"
            okText="确定"
          >
            <List
              bordered
              itemLayout="horizontal"
              dataSource={this.handleInfoDataSource()}
              renderItem={item => this.renderInfo(item)}
            />
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

