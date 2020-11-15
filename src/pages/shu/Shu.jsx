import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal, Select, Badge, Switch, List, Tag, Collapse, Avatar, Descriptions } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderBadgeMiaoShu, renderMiaoShu} from "../../utils/utils";
import {shuHisMetaModel} from "../../json/shuHis";
import HeBing from "../../components/HeBing";
import {shuMetaModel} from "../../json/shu";
import CongShuCangKu from "../../components/CongShuCangKu";

const { Paragraph } = Typography;
const { Option } = Select;
const { Panel } = Collapse;

@connect(({ shu, shuHis, cangKuHis, zhangJie, loading }) => ({
  shu,
  shuHis,
  cangKuHis,
  zhangJie,
  loading,
}))
export default class Shu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      shuInfo: {},
      optVisible: false,
      ckVisible: false,
      heBingVisible: false,
      guiJiVisible: false,
      juSan: null,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      shuInfo: { shuId: record.id },
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
      juSan: '散',
      guiJiVisible: true,
      currentInfo: record,
    });
    this.handleEmptyCongShuGuiJiList();
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/getGuiJiList',
      payload: { congShuId: record.id, type: '属' },
    });
  };

  handleOptGuiJi = (record) => {
    this.setState({
      juSan: '散',
      guiJiVisible: true,
      currentInfo: record,
    });
    this.handleEmptyCongShuGuiJiList();
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/getGuiJiList',
      payload: { congShuHisId: record.id, congShuId: record.shuId, type: '属' },
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
      shuInfo: {},
      currentInfo: {},
      optVisible: false,
    });
    this.reloadShu();
  };

  handleCkOnCancel = () => {
    this.setState({
      currentModel: '',
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

  handleZhangJieGuiJiDataSource = () => {
    const {zhangJie: { congShuGuiJiList }} = this.props;
    return congShuGuiJiList;
  };

  handleGuiJiOnCancel = () => {
    this.setState({
      guiJiVisible: false,
      juSan: null,
      currentInfo: {},
    });
  };

  // 聚散
  handleCongShuGuiJiJuSan = (juSan) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/juSanGuiJiSwitch',
      payload: juSan,
    });
    this.setState({ juSan });
  };

  handleEmptyCongShuGuiJiList = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/emptyCongShuGuiJiList',
    });
  };

  handleCongShuTitle = () => {
    const { zhangJie: { congShuGuiJiList } } = this.props;
    const { juSan, currentInfo } = this.state;
    return (
      <div>
        <Badge
          // size="small"
          // offset={[16, 8]}
          style={{marginBottom: '3px', marginRight: '3px'}}
          count={congShuGuiJiList && congShuGuiJiList.length > 0 ? congShuGuiJiList.length : 0}
        />
        <span>{`${currentInfo.shuStateName ? `[${currentInfo.shuStateName}]`: ''}${currentInfo.shuJingJieName || ''}${currentInfo.shuPinJiName || ''}${currentInfo.shuFenLeiName || ''}${currentInfo.shuName}`}</span>
        <Switch
          style={{ marginLeft: '3px', marginBottom: '3px' }}
          checkedChildren="聚"
          unCheckedChildren="散"
          onClick={() => this.handleCongShuGuiJiJuSan(juSan === '聚' ? '散' : '聚')}
        />
      </div>
    );
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

  renderCengYongMingList = text => {
    const title = renderBadgeMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderCengYongMingInfo = text => {
    return renderBadgeMiaoShu(text);
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

  renderCongShuTab = (item) => {
    const tabList = [];
    const tabs = [];
    const options = [];
    if (item.congShuStateName) {
      tabList.push({
        len: item.congShuStateName.length,
        key: item.congShuStateName,
        value: item.congShuStateName,
        label: <Tag color="#91d5ff">{item.congShuStateName}</Tag>,
      });
    }

    if (item.congShuFenLeiName) {
      tabList.push({
        len: item.congShuFenLeiName.length,
        key: item.congShuFenLeiName,
        value: item.congShuFenLeiName,
        label: <Tag color="#87d068">{item.congShuFenLeiName}</Tag>,
      });
    }

    if (item.congShuShuXing) {
      item.congShuShuXing.split(' ').forEach(shuXing => {
        tabList.push({
          len: shuXing.length,
          key: shuXing,
          value: shuXing,
          label: <Tag color="#87d068">{shuXing}</Tag>,
        });
      });
    }

    if (item.congShuType) {
      tabList.push({
        len: item.congShuType.length,
        key: item.congShuType,
        value: item.congShuType,
        label: <Tag color="warning">{item.congShuType}</Tag>,
      });
    }

    // if (item.congShuLiang && item.danWei) {
    //   tabList.push({
    //     len: `${item.congShuLiang}${item.danWei}`.length,
    //     key: `${item.congShuLiang}${item.danWei}`,
    //     value: `${item.congShuLiang}${item.danWei}`,
    //     label: <Tag color={item.congShuLiang === '0' ? 'red' : '#87d068'}>{`${item.congShuLiang} ${item.danWei}`}</Tag>,
    //   });
    // }

    if (item.congShuJingJieName && item.congShuJingJieName !== '无') {
      tabList.push({
        len: item.congShuJingJieName.length,
        key: item.congShuJingJieName,
        value: item.congShuJingJieName,
        label: <Tag color="#87d068">{item.congShuJingJieName}</Tag>,
      });
    }

    if (item.congShuPinJiName && item.congShuPinJiName !== '无') {
      tabList.push({
        len: item.congShuPinJiName.length,
        key: item.congShuPinJiName,
        value: item.congShuPinJiName,
        label: <Tag color="#87d068">{item.congShuPinJiName}</Tag>,
      });
    }
    if (tabList && tabList.length > 0) {
      tabList.sort((tab1, tab2) => tab1.len - tab2.len);
      // let length = 0;
      if (tabList.length === 1) {
        tabs.push(tabList[0].label);
      } else {
        tabList.forEach(tabInfo => {
          // const { len, label, key, value } = tabInfo;
          // if (length + len > 12) {
          //   options.push(<Option disabled key={key} value={value}>{label}</Option>);
          // } else {
          //   tabs.push(label);
          // }
          // length += len;
          const {label} = tabInfo;
          tabs.push(label);
        });
      }
    }
    return (
      <span>
        {tabs.map(tab => tab)}
        {options.length > 0 ? (
          <Select
            style={{width: 24}}
            // defaultOpen
            defaultActiveFirstOption
            dropdownMatchSelectWidth={150}
            bordered={false}>
            {options.map(option => option)}
          </Select>
        ) : ''}
      </span>
    );
  };

  renderZhangJieSanGuiJi = (item, seq) => {
    return (
      <List.Item key={`item${seq}${item.seq}`}>
        <List.Item.Meta
          key={`meta${seq}${item.seq}`}
          avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
          title={
            <span>
              <Badge
                size="small"
                count={item.seq}
                style={{marginBottom: '3px', marginRight: '3px', backgroundColor: '#108ee9'}}
              />
              <span style={{marginRight: '8px'}}>{item.congShuName}</span>
              <span>{this.renderCongShuTab(item)}</span>
            </span>
          }
          description={renderMiaoShu(item.congShuMiaoShu)}
        />
      </List.Item>
    );
  };

  renderAddrFullName = (fullNames) => {
    const title = renderBadgeMiaoShu(fullNames.join('\r\n'));
    const fullName = fullNames[0];
    return (<Tooltip placement="topLeft" title={title}>{fullName}</Tooltip>);
  };

  renderZhangJieTitle = (zhangJieTitles) => {
    const title = renderBadgeMiaoShu(zhangJieTitles.join('\r\n'));
    const zhangJieTitle = zhangJieTitles[0];
    return (<Tooltip placement="topLeft" title={title}>{zhangJieTitle}</Tooltip>);
  };

  renderZhangJieJuGuiJi = (item) => {
    return (
      <List.Item key={`item${item.seq}`}>
        <List.Item.Meta
          key={`meta${item.seq}`}
          avatar={<Avatar/* src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */ />}
          title={
            <Descriptions
              size="small"
              // title={item.congShuName}
              column={1}
              colon={false}
              bordered
              // extra={<a onClick={() => (this.handleCongInfoSheZhi(item, this))}>设置</a>}
            >
              <Descriptions.Item>
                <Badge
                  size="small"
                  count={item.seq}
                  style={{marginBottom: '3px', marginRight: '3px'}}
                />
                <span>{item.congShuName}</span>
              </Descriptions.Item>
              <Descriptions.Item>{this.renderCongShuTab(item)}</Descriptions.Item>
              {item.fullNames && item.fullNames.length > 0 ?
                (<Descriptions.Item>
                  {this.renderAddrFullName(item.fullNames)}
                </Descriptions.Item>) : ''}
              {item.zhangJieTitles && item.zhangJieTitles.length > 0 ?
                (<Descriptions.Item>
                  {this.renderZhangJieTitle(item.zhangJieTitles)}
                </Descriptions.Item>) : ''}
            </Descriptions>
          }
          description={renderMiaoShu(item.congShuMiaoShu)}
        />
      </List.Item>
    );
  };

  render() {
    const { props } = this;
    const { currentModel, shuInfo, optVisible, ckVisible, heBingVisible, guiJiVisible, juSan } = this.state;
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
          renderCengYongMingList={this.renderCengYongMingList}
          renderCengYongMingInfo={this.renderCengYongMingInfo}
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
            columnWidth="125px"
            showTotal={this.showShuOptTotal}
            customFormItem={{
              addrId: this.renderAddrId,
              zhangJieId: this.renderZhangJieId,
            }}
            autoApi={{ modal: { width: '700px' } }}
            renderMiaoShu={this.renderOptMiaoShu}
            rowInfo={shuInfo}
            guiJi={this.handleOptGuiJi}
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
        {guiJiVisible ? (
          <Modal
            // bodyStyle={{ padding: 0 }}
            okButtonProps={{disabled: true}}
            title={this.handleCongShuTitle()}
            maskClosable={false}
            visible={guiJiVisible}
            // onOk={this.handleShuInfoOnOk}
            onCancel={this.handleGuiJiOnCancel}
            width={1150}
            cancelText="取消"
            okText="确定"
          >
            {juSan === '散' ? (this.handleZhangJieGuiJiDataSource().map((zhangJieInfo, zhangJieIndex) => (
                <Collapse defaultActiveKey={zhangJieIndex + 1} key={`${zhangJieIndex + 1}`}>
                  <Panel header={
                    <span>
                      <Badge
                        size="small"
                        count={zhangJieIndex + 1}
                        style={{marginBottom: '3px', marginRight: '3px'}}
                      />
                      <span>{zhangJieInfo.zhangJieTitle}</span>
                    </span>
                  } key={`${zhangJieIndex + 1}`}>
                    {zhangJieInfo.addrFullNames.map((addr, addrIndex) => (
                      <Collapse
                        defaultActiveKey={`panel${zhangJieIndex + 1}${addrIndex + 1}`}
                        key={`collapse${zhangJieIndex + 1}${addrIndex + 1}`}
                      >
                        <Panel header={
                          <span>
                            <Badge
                              size="small"
                              count={addrIndex + 1}
                              style={{marginBottom: '3px', marginRight: '3px', backgroundColor: '#87d068' }}
                            />
                            <span>{addr.addrFullName}</span>
                          </span>
                        } key={`panel${zhangJieIndex + 1}${addrIndex + 1}`}>
                          <List
                            // bordered
                            itemLayout="horizontal"
                            dataSource={addr.congShuList && addr.congShuList.length > 0 ? addr.congShuList : []}
                            renderItem={item => this.renderZhangJieSanGuiJi(item, `${zhangJieIndex + 1}${addrIndex + 1}`)}
                          />
                        </Panel>
                      </Collapse>
                    ))}
                  </Panel>
                </Collapse>
              ))
            ) : (
              <List
                bordered
                itemLayout="horizontal"
                dataSource={this.handleZhangJieGuiJiDataSource()}
                renderItem={item => this.renderZhangJieJuGuiJi(item)}
              />
            )}
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

