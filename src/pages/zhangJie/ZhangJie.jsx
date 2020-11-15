/* eslint-disable no-nested-ternary */
import React, {PureComponent, Fragment} from 'react';
import {connect} from 'dva';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {SearchOutlined} from '@ant-design/icons';

import {Tooltip, Select, Button, List, Avatar, Modal, Tag, notification, Descriptions, Badge, Divider, Switch /* , Typography */} from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu, renderBadgeMiaoShu} from "../../utils/utils";
import {zhangJieMetaModel} from "../../json/zhangJie";
import {cangKuShuHisMetaModel} from "../../json/cangKuShuHis";
import {congInfoHisMetaModel} from "../../json/congInfoHis";

// const { Paragraph } = Typography;
const {Option} = Select;

@connect(({zhangJie, cangKuShuHis, congInfoHis, loading}) => ({
  zhangJie,
  cangKuShuHis,
  congInfoHis,
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
    addrInfos: [],
    congInfos: [],
    shuInfos: [],
    congIds: null,
    shuIds: null,
    selectedRows: [],
    juSan: null,
    currentRowInfo: {},

  };
  // renderMiaoShu = text => {
  //   const title = renderMiaoShu(text);
  //   return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {zhangJie: {data: beforeData}} = this.props;
    const {zhangJie: {data: afterData}} = nextProps;
    if (afterData !== beforeData && !!afterData) {
      const {congInfo, shuInfo} = afterData;
      if (congInfo && congInfo.length > 0) {
        this.setState({congSelectedRows: [...congInfo]});
      }

      if (shuInfo && shuInfo.length > 0) {
        this.setState({shuSelectedRows: [...shuInfo]});
      }
    }
  }

  handleCongInfoSearch = form => {
    if (form) {
      const { setFieldsValue } = form;
      setFieldsValue({ addrId: [] });
    }
    const {congInfos} = this.state;
    this.setState({
      addrInfos: [],
      congShuModal: 'cong',
      congInfoVisible: true,
      congIds: congInfos && congInfos.length > 0 ? congInfos.join(',') : null,
    });
  };

  handleShuInfoSearch = form => {
    if (form) {
      const { setFieldsValue } = form;
      setFieldsValue({ addrId: [] });
    }
    const {shuInfos} = this.state;
    this.setState({
      addrInfos: [],
      congShuModal: 'shu',
      shuInfoVisible: true,
      shuIds: shuInfos && shuInfos.length > 0 ? shuInfos.join(',') : null,
    });
  };

  handleCongInfoMulSelectChange = (value) => {
    this.setState({congInfos: value});
  };

  handleShuInfoMulSelectChange = (value) => {
    this.setState({shuInfos: value});
  };

  handleCongInfoOnOk = () => {
    // 判断在搜索列表是否有选择记录数据
    // 1.如果有，继续判断，选中的搜索列表数据，是否已经展示在从信息中
    // 1.1 如果有，给出信息提示，并且不关闭搜索列表页面
    // 1.2 如果没有，添加到从信息中，并且关闭搜索列表页面
    // 2.如果没有，直接关闭搜索列表页面
    const {selectedRows, congSelectedRows, addrInfos} = this.state;
    if (selectedRows && selectedRows.length > 0) {
      const rows = selectedRows.map(row => {
        return {
          cangKuHisId: row.cangKuHisId,
          congShuType: row.cangKuHisId ? '仓从' : '从',
          congShuHisId: row.congHisId,
          congShuId: row.congId,
          congShuName: row.congName,
          congShuState: row.congState,
          congShuStateName: row.congStateName,
          congShuShuXing: row.congShuXing,
          congShuXiuXing: row.congXiuXing,
          congShuJingJie: row.congJingJieId,
          congShuJingJieName: row.congJingJieName,
          congShuPinJi: row.congPinJiId,
          congShuPinJiName: row.congPinJiName,
          congShuFenLei: row.congFenLei,
          congShuFenLeiName: row.congFenLeiName,
          congShuMiaoShu: row.congMiaoShu,
          xiaoShuoId: row.xiaoShuoId,
          xiaoShuoName: row.xiaoShuoName,
        };
      });
      if (congSelectedRows && congSelectedRows.length > 0) {
        const repeatRows = [];
        const newRows = [];
        rows.forEach(row => {
          if (congSelectedRows.findIndex(selected => {
              const selectedInfo = this.getCongShuSelectedInfo(selected);
              const rowInfo = this.getCongShuSelectedInfo(row);
              return JSON.stringify(selectedInfo) === JSON.stringify(rowInfo);
            }) !== -1) {
            repeatRows.push(row);
          } else {
            newRows.push(row);
          }
        });
        if (repeatRows && repeatRows.length > 0) {
          repeatRows.forEach(row => {
            notification.open({
              message: <span style={{fontSize: '14px'}}><strong>从名称</strong>：{row.congShuName} <Tag
                color="warning">已存在</Tag></span>,
              description:
                <Descriptions column={1}>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从状态</strong>}>{row.congShuStateName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从属性</strong>}>{row.congShuShuXing}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从修行</strong>}>{row.congShuXiuXing}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从境界</strong>}>{row.congShuJingJieName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从品级</strong>}>{row.congShuPinJiName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从分类</strong>}>{row.congShuFenLeiName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>从小说</strong>}>{row.xiaoShuoName}</Descriptions.Item>
                  <Descriptions.Item label={<strong>从描述</strong>}>{row.congShuMiaoShu}</Descriptions.Item>
                </Descriptions>,
            });
          });
          return;
        }
        this.setState({
          congSelectedRows: [...congSelectedRows, ...newRows.map(row => {
            return {
              ...row,
              addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
              fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
            };
          })]
        });
      } else {
        this.setState({
          congSelectedRows: [...rows.map(row => {
            return {
              ...row,
              addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
              fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
            };
          })]
        });
      }
    }
    this.handleCongInfoOnCancel();
  };

  getCongShuSelectedInfo = (selected) => {
    const selectedInfo = {};
    selectedInfo.congShuHisId = selected.congShuHisId;
    selectedInfo.congShuId = selected.congShuId;
    selectedInfo.congShuStateName = selected.congShuStateName;
    selectedInfo.congShuShuXing = selected.congShuShuXing;
    selectedInfo.congShuXiuXing = selected.congShuXiuXing;
    selectedInfo.congShuJingJieName = selected.congShuJingJieName;
    selectedInfo.congShuPinJiName = selected.congShuPinJiName;
    selectedInfo.congShuFenLeiName = selected.congShuFenLeiName;
    selectedInfo.congShuName = selected.congShuName;
    selectedInfo.congShuMiaoShu = selected.congShuMiaoShu;
    selectedInfo.xiaoShuoName = selected.xiaoShuoName;
    return selectedInfo;
  };

  handleShuInfoOnOk = () => {
    // 判断在搜索列表是否有选择记录数据
    // 1.如果有，继续判断，选中的搜索列表数据，是否已经展示在属信息中
    // 1.1 如果有，给出信息提示，并且不关闭搜索列表页面
    // 1.2 如果没有，添加到属信息中，并且关闭搜索列表页面
    // 2.如果没有，直接关闭搜索列表页面
    const {selectedRows, shuSelectedRows, addrInfos} = this.state;
    if (selectedRows && selectedRows.length > 0) {
      const rows = selectedRows.map(row => {
        return {
          congShuType: '属',
          congShuHisId: row.shuHisId,
          congShuId: row.shuId,
          congShuName: row.shuName,
          congShuState: row.shuState,
          congShuStateName: row.shuStateName,
          congShuShuXing: row.shuShuXing,
          congShuJingJie: row.shuJingJieId,
          congShuJingJieName: row.shuJingJieName,
          congShuPinJi: row.shuPinJiId,
          congShuPinJiName: row.shuPinJiName,
          congShuFenLei: row.shuFenLei,
          congShuFenLeiName: row.shuFenLeiName,
          congShuMiaoShu: row.shuMiaoShu,
          xiaoShuoId: row.xiaoShuoId,
          xiaoShuoName: row.xiaoShuoName,
        };
      });
      if (shuSelectedRows && shuSelectedRows.length > 0) {
        const repeatRows = [];
        const newRows = [];
        rows.forEach(row => {
          if (shuSelectedRows.findIndex(selected => {
              const selectedInfo = this.getCongShuSelectedInfo(selected);
              const rowInfo = this.getCongShuSelectedInfo(row);
              return JSON.stringify(selectedInfo) === JSON.stringify(rowInfo);
            }) !== -1) {
            repeatRows.push(row);
          } else {
            newRows.push(row);
          }
        });
        if (repeatRows && repeatRows.length > 0) {
          repeatRows.forEach(row => {
            notification.open({
              message:
                <span style={{fontSize: '14px'}}>
                  <strong>属名称</strong>：{row.congShuName} <Tag color="warning">已存在</Tag>
                </span>,
              description:
                <Descriptions column={1}>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属状态</strong>}>{row.congShuStateName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属属性</strong>}>{row.congShuShuXing}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属修行</strong>}>{row.congShuXiuXing}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属境界</strong>}>{row.congShuJingJieName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属品级</strong>}>{row.congShuPinJiName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属分类</strong>}>{row.congShuFenLeiName}</Descriptions.Item>
                  <Descriptions.Item style={{paddingBottom: '8px'}} label={<strong>属小说</strong>}>{row.xiaoShuoName}</Descriptions.Item>
                  <Descriptions.Item label={<strong>属描述</strong>}>{row.congShuMiaoShu}</Descriptions.Item>
                </Descriptions>,
            });
          });
          return;
        }
        this.setState({
          shuSelectedRows: [...shuSelectedRows, ...newRows.map(row => {
            return {
              ...row,
              addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
              fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
            };
          })]
        });
      } else {
        this.setState({
          shuSelectedRows: [...rows.map(row => {
            return {
              ...row,
              addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
              fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
            };
          })]
        });
      }
    }
    this.handleShuInfoOnCancel();
  };

  handleCongInfoOnCancel = () => {
    this.setState({congShuModal: null, congInfoVisible: false, selectedRows: []});
  };

  handleShuInfoOnCancel = () => {
    this.setState({congShuModal: null, shuInfoVisible: false, selectedRows: []});
  };

  handleInfoOnCancel = () => {
    this.setState({
      congShuModal: null,
      infoVisible: false,
      selectedRows: [],
      congSelectedRows: [],
      shuSelectedRows: [],
      juSan: null,
      currentRowInfo: {},
    });
  };

  handleCongTableOnSelectRow = selectedRows => {
    this.setState({selectedRows: selectedRows && selectedRows.length > 0 ? selectedRows : []});
  };

  handleShuTableOnSelectRow = selectedRows => {
    this.setState({selectedRows: selectedRows && selectedRows.length > 0 ? selectedRows : []});
  };

  handleCongInfoSheZhi = (item) => {
    const {congSelectedRows, addrInfos} = this.state;
    this.setState({
      congSelectedRows: congSelectedRows.map(row => {
        if (row.cangKuHisId === item.cangKuHisId && row.congShuHisId === item.congShuHisId) {
          return {
            ...row,
            addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
            fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
          };
        }
        if (!row.cangKuHisId && !item.cangKuHisId && row.congShuHisId === item.congShuHisId) {
          return {
            ...row,
            addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
            fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
          };
        }
        return row;
      })
    });
  };

  handleShuInfoSheZhi = (item) => {
    const {shuSelectedRows, addrInfos} = this.state;
    this.setState({
      shuSelectedRows: shuSelectedRows.map(row => {
        if (row.congShuHisId === item.congShuHisId) {
          return {
            ...row,
            addrIds: addrInfos.map(addrInfo => addrInfo.addrId),
            fullNames: addrInfos.map(addrInfo => addrInfo.fullName),
          };
        }
        return row;
      })
    });
  };

  handleCongInfoDel = (item) => {
    const {congSelectedRows} = this.state;
    this.setState({
      congSelectedRows: congSelectedRows.filter(row => {
        if (item.cangKuHisId) {
          return row.cangKuHisId !== item.cangKuHisId;
        }
        return !(!item.cangkuHisId && item.congShuHisId === row.congShuHisId);
      }),
    });
  };

  handleShuInfoDel = (item) => {
    const {shuSelectedRows} = this.state;
    this.setState({
      shuSelectedRows: shuSelectedRows.filter(row => row.congShuHisId !== item.congShuHisId),
    });
  };

  handleSubmit = async (values, currentModel) => {
    const params = {...values};
    const {congSelectedRows, shuSelectedRows} = this.state;
    if (congSelectedRows && congSelectedRows.length > 0) {
      params.congInfos = congSelectedRows;
    }

    if (shuSelectedRows && shuSelectedRows.length > 0) {
      params.shuInfos = shuSelectedRows;
    }
    const {dispatch} = this.props;
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
    const { zhangJie: { congShuInfoList } } = this.props;
    const { juSan, currentRowInfo } = this.state;
    return (
      <div>
        <Badge
          // size="small"
          // offset={[16, 8]}
          style={{marginBottom: '3px', marginRight: '3px'}}
          count={congShuInfoList && congShuInfoList.length > 0 ? congShuInfoList.length : 0}
        />
        <span>{currentRowInfo.zhangJieTitle}</span>
        <Switch
          style={{ marginLeft: '3px', marginBottom: '3px' }}
          checkedChildren="聚"
          unCheckedChildren="散"
          onClick={() => this.handleCongShuInfoJuSan(juSan === '聚' ? '散' : '聚')}
        />
      </div>
    );
  };

  handleZhangJieInfoDataSource = () => {
    const {zhangJie: { congShuInfoList }} = this.props;
    return congShuInfoList;
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
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/changeNeedLoad',
      payload: true,
    });
  };

  handleAddrFullNameOnClick = (record) => {
    this.handleEmptyCongShuInfoList();
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/getInfoList',
      payload: {zhangJieId: record.id},
    });
    this.setState({
      congShuModal: 'congShuList',
      infoVisible: true,
      juSan: '散',
      currentRowInfo: record,
    });
  };

  handleEmptyCongShuInfoList = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/emptyCongShuInfoList',
    });
  };

  handleCongInfoNameOnClick = (record) => {
    this.handleEmptyCongShuInfoList();
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/getInfoList',
      payload: {zhangJieId: record.id, type: '从'},
    });
    this.setState({
      congShuModal: 'congShuList',
      infoVisible: true,
      juSan: '散',
      currentRowInfo: record,
    });
  };

  handleShuInfoNameOnClick = (record) => {
    this.handleEmptyCongShuInfoList();
    const {dispatch} = this.props;
    dispatch({
      type: 'zhangJie/getInfoList',
      payload: {zhangJieId: record.id, type: '属'},
    });
    this.setState({
      congShuModal: 'congShuList',
      infoVisible: true,
      juSan: '散',
      currentRowInfo: record,
    });
  };

  handleAddrIdMulSelectOnChange = (value, option) => {
    this.setState({
      addrInfos: option.map(opt => {
        return {addrId: opt.value, fullName: opt.title}
      }),
    });
  };

  // 聚散
  handleCongShuInfoJuSan = (juSan) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'zhangJie/juSanSwitch',
      payload: juSan,
    });
    this.setState({ juSan });
  };

  renderCongInfoName = (text, record) => {
    const title = renderBadgeMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}><a
      onClick={() => this.handleCongInfoNameOnClick(record)}>{text}</a></Tooltip>);
  };

  renderCongInfoNameInfo = (text) => {
    return renderBadgeMiaoShu(text);
  };

  renderShuInfoName = (text, record) => {
    const title = renderBadgeMiaoShu(text);
    return (
      <Tooltip placement="topLeft" title={title}>
        <a onClick={() => this.handleShuInfoNameOnClick(record)}>{text}</a>
      </Tooltip>
    );
  };

  renderShuInfoNameInfo = (text) => {
    return renderBadgeMiaoShu(text);
  };

  renderAddrFullNameList = (text, record) => {
    const title = renderBadgeMiaoShu(text);
    return (
      <Tooltip placement="topLeft" title={title}>
        <a onClick={() => this.handleAddrFullNameOnClick(record)}>{text}</a>
      </Tooltip>
    );
  };

  renderAddrFullNameInfo = (text) => {
    return renderBadgeMiaoShu(text);
  };

  renderAddrFullName = (fullNames) => {
    const title = renderBadgeMiaoShu(fullNames.join('\r\n'));
    const fullName = fullNames[0];
    // return (<Tooltip placement="topLeft" title={title}>{fullName && fullName.length > 30 ? `${fullName.substring(0, 30)}...` : fullName}</Tooltip>);
    return (<Tooltip placement="topLeft" title={title}>{fullName}</Tooltip>);
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
      const {[metaModel.funcModelCode]: {datas: {pagination}}} = this.props;
      if (pagination && pagination.total) {
        return {showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页`};
      }
    }
    return {showTotal: () => ''};
  };

  // 从操作记录分页信息
  showCongTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const {[metaModel.funcModelCode]: {datas: {pagination}}} = this.props;
      if (pagination && pagination.total) {
        return {showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页`};
      }
    }
    return {showTotal: () => ''};
  };

  // 属操作记录分页信息
  showShuTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const {[metaModel.funcModelCode]: {datas: {pagination}}} = this.props;
      if (pagination && pagination.total) {
        return {showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页`};
      }
    }
    return {showTotal: () => ''};
  };

  renderCongInfo = (FormItem, rowProps, rowState) => {
    const {formItemLayout, column, form /* , searchArea */} = rowProps;
    const {valueListData} = rowState;
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
            style={{width: '90%'}}
            onChange={this.handleCongInfoMulSelectChange}
          >
            {this.renderSelectOption(valueListData)}
          </Select>
          <Button
            style={{marginLeft: '4px'}}
            type="primary"
            icon={<SearchOutlined/>}
            onClick={() => this.handleCongInfoSearch(form)}
          >
            查询
          </Button>
        </FormItem>
        <FormItem {...formItemLayout} wrapperCol={{offset: 2, span: 24}} name="congList">
          <List
            bordered
            itemLayout="horizontal"
            dataSource={this.state.congSelectedRows}
            renderItem={item => (
              <List.Item
                actions={[<a onClick={() => (this.handleCongInfoDel(item, this))}>刪除</a>]}
                // extra={<a onClick={() => (this.handleCongInfoDel(item, this))}>刪除</a>}
              >
                <List.Item.Meta
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
                        <span>{item.congShuName}</span>
                        <a style={{ float: 'right' }} onClick={() => (this.handleCongInfoSheZhi(item, this))}>设置</a>
                      </Descriptions.Item>
                      <Descriptions.Item>{this.renderCongShuTab(item)}</Descriptions.Item>
                      {item.fullNames && item.fullNames.length > 0 ?
                        (<Descriptions.Item>
                          {this.renderAddrFullName(item.fullNames)}
                        </Descriptions.Item>) : ''}
                    </Descriptions>
                  }
                  description={renderMiaoShu(item.congShuMiaoShu)}
                />
              </List.Item>
            )}
          />
        </FormItem>
      </Fragment>
    );
  };

  renderShuInfo = (FormItem, rowProps, rowState) => {
    const {formItemLayout, column, form /* , searchArea */} = rowProps;
    const {valueListData} = rowState;
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
            style={{width: '90%'}}
            onChange={this.handleShuInfoMulSelectChange}
          >
            {this.renderSelectOption(valueListData)}
          </Select>
          <Button
            style={{marginLeft: '4px'}}
            type="primary"
            icon={<SearchOutlined/>}
            onClick={() => this.handleShuInfoSearch(form)}
          >
            查询
          </Button>
        </FormItem>
        <FormItem {...formItemLayout} wrapperCol={{offset: 2, span: 24}} name="shuList">
          <List
            bordered
            // itemLayout="vertical"
            itemLayout="horizontal"
            dataSource={this.state.shuSelectedRows}
            renderItem={item => (
              <List.Item
                actions={[<a onClick={() => (this.handleShuInfoDel(item, this))}>刪除</a>]}
                // extra={<a onClick={() => (this.handleShuInfoDel(item, this))}>刪除</a>}
              >
                <List.Item.Meta
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
                        <span>{item.congShuName}</span>
                        <a style={{ float: 'right' }} onClick={() => (this.handleShuInfoSheZhi(item, this))}>设置</a>
                      </Descriptions.Item>
                      <Descriptions.Item>{this.renderCongShuTab(item)}</Descriptions.Item>
                      {item.fullNames && item.fullNames.length > 0 ?
                        (<Descriptions.Item>
                          {this.renderAddrFullName(item.fullNames)}
                        </Descriptions.Item>) : ''}
                    </Descriptions>
                  }
                  description={renderMiaoShu(item.congShuMiaoShu)}
                />
              </List.Item>
            )}
          />
        </FormItem>
      </Fragment>
    );
  };

  renderSelectOption = (valueListData) => {
    if (valueListData && valueListData.length > 0) {
      return valueListData.map(data => {
        return(<Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>);
      });
    }
    return '';
  };

  renderAddrId = (FormItem, rowProps, rowState) => {
    const {formItemLayout, column/* , searchArea */} = rowProps;
    const {valueListData} = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          // labelInValue
          mode="multiple"
          optionFilterProp="title"
          // dropdownMatchSelectWidth={/* searchArea || */700}
          placeholder={`请选择${column.columnName}`}
          onChange={this.handleAddrIdMulSelectOnChange}
        >
          {this.renderSelectOption(valueListData)}
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

  renderZhangJieSanInfo = (item) => {
    return (
      <List.Item>
        <List.Item.Meta
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

  renderZhangJieJuInfo = (item) => {
    return (
      <List.Item>
        <List.Item.Meta
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
            </Descriptions>
          }
          description={renderMiaoShu(item.congShuMiaoShu)}
        />
      </List.Item>
    );
  };

  render() {
    const {props} = this;
    const {congShuModal, congInfoVisible, congIds, selectedRows, shuInfoVisible, shuIds, infoVisible, juSan} = this.state;
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
            addrId: this.renderAddrId,
          }}
          autoApi={{
            modal: {width: '1000px'},
            form: {labelCol: {span: 2}, wrapperCol: {span: 22}},
          }}
          renderCongInfoNameList={this.renderCongInfoName}
          renderCongInfoNameInfo={this.renderCongInfoNameInfo}
          renderShuInfoNameList={this.renderShuInfoName}
          renderShuInfoNameInfo={this.renderShuInfoNameInfo}
          renderAddrFullNameList={this.renderAddrFullNameList}
          renderAddrFullNameInfo={this.renderAddrFullNameInfo}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...zhangJieMetaModel()}
          {...props}
        />
        {congShuModal === 'cong' ? (
          <Modal
            bodyStyle={{padding: 0}}
            okButtonProps={{disabled: selectedRows.length === 0}}
            title="从信息"
            maskClosable={false}
            visible={congInfoVisible}
            onOk={this.handleCongInfoOnOk}
            onCancel={this.handleCongInfoOnCancel}
            width={1300}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              extraInfo={{congIds}} // 列表搜索用
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showCongTotal}
              renderCongShuXing={this.renderCongShuXing}
              renderMiaoShu={this.renderCongMiaoShu}
              // scroll={{ x: '60vw' }}
              {...congInfoHisMetaModel()}
              // tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleCongTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
        {congShuModal === 'shu' ? (
          <Modal
            bodyStyle={{padding: 0}}
            okButtonProps={{disabled: Object.keys(selectedRows).length === 0}}
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
              extraInfo={{shuIds}} // 列表搜索用
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
            // bodyStyle={{ padding: 0 }}
            okButtonProps={{disabled: true}}
            title={this.handleCongShuTitle()}
            maskClosable={false}
            visible={infoVisible}
            // onOk={this.handleShuInfoOnOk}
            onCancel={this.handleInfoOnCancel}
            width={1150}
            cancelText="取消"
            okText="确定"
          >
            {juSan === '散' ? (this.handleZhangJieInfoDataSource().map((zhangJieInfo, index) => (
                <div>
                  <Divider style={{border: '2px solid blue'}} type="vertical"/>
                  <Badge
                    style={{marginBottom: '3px', marginRight: '3px'}}
                    size="small"
                    count={index + 1}
                  />
                  <strong>{zhangJieInfo.addrFullName}</strong><br/>
                  <List
                    // bordered
                    itemLayout="horizontal"
                    dataSource={zhangJieInfo.congShuList && zhangJieInfo.congShuList.length > 0 ? zhangJieInfo.congShuList : []}
                    renderItem={item => this.renderZhangJieSanInfo(item)}
                  />
                </div>
              ))
            ) : (
              <List
                bordered
                itemLayout="horizontal"
                dataSource={this.handleZhangJieInfoDataSource()}
                renderItem={item => this.renderZhangJieJuInfo(item)}
              />
            )}
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

