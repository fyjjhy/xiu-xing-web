/* eslint-disable react/jsx-no-bind */
import {
  DownOutlined,
  PlusOutlined,
  // LockOutlined,
  // UnlockOutlined,
  EditOutlined,
  DeleteOutlined,
  UpOutlined,
} from '@ant-design/icons';
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import { Row, Col, Card, Form, Button, Divider, Popconfirm, message, Typography, Tooltip } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardTable from '../../components/StandardTable';
import StandardProfile from '../../components/StandardProfile';
import StandardForm from '../../components/StandardForm';
import AutoFormRow from '../../components/Auto/AutoFormRow';
import AddXiuXingRiZhiModal from "../../components/AddXiuXingRiZhiModal";
import XiuXingRiZhiModal from "../../components/XiuXingRiZhiModal";

import styles from './RenWu.less';
import {renderMiaoShu} from "../../utils/utils";
import HisModal from "../../components/HisModal";
import {getCangKuColumns, getRenWuColumns, getXiuXingRiZhiColumns, renWuHisColumns} from "../../utils/columns";

const { Group: ButtonGroup } = Button;
const { Paragraph } = Typography;

const renWuColumns = getRenWuColumns();

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 5 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 19 } },
};

@connect(({ cangKu, renWu, xiaoShuo, xiuXingRiZhi, loading }) => ({
  cangKu,
  renWu,
  xiaoShuo,
  xiuXingRiZhi,
  loading: loading.models.renWu,
}))
export default class RenWu extends PureComponent {
  formRef = React.createRef();

  listColumns = [];

  searchColumns = [];

  addColumns = [];

  editColumns = [];

  profileColumns = [];

  state = {
    expandForm: false,
    formValues: {},
    selectedRows: [],
    currentModel: 'display',
    loadingModel: 'list',
    currentRowInfo: {},
    currentTab: 'cangKu',
  };

  UNSAFE_componentWillMount() {
    this.listColumns = renWuColumns.filter(column => {
      if (column.searchFlag === 'Y') {
        this.searchColumns.push(column);
      }

      if (column.addField === 'Y') {
        this.addColumns.push(column);
      }

      if (column.editField === 'Y') {
        this.editColumns.push(column);
      }

      if (column.profileField === 'Y') {
        this.profileColumns.push(column);
      }
      return column.listField === 'Y';
    }).map(column => {
      const listColumn = {
        title: column.columnName,
        dataIndex: column.columnCode,
        key: column.columnCode,
        width: column.columnWidth || 'auto',
      };

      if (column.sortField === 'Y') {
        listColumn.sorter = true;
      }
      return listColumn;
    });
    this.listColumns = this.listColumns.map(col => {
      const colum = {};
      if (col.dataIndex === 'renWuCode') {
        colum.render = ((text, record) => <a onClick={() => { this.handleProfileClick(record); }}>{text}</a>);
      } else if (col.dataIndex === 'id') {
        colum.fixed = 'right';
        colum.render = ((text, record) => this.renderLinkGroup(record));
      } else if (col.dataIndex === 'xiaoShuoId') {
        colum.render = (text => this.renderXiaoShuo(text));
      } else if (col.dataIndex === 'renWuMiaoShu') {
        colum.render = (text => {
          const title = renderMiaoShu(text);
          return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
        });
      } else if (col.dataIndex === 'renWuShuXing') {
        colum.render = (text => {
          const title = renderMiaoShu(text);
          return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
        });
      }
      return { ...col, ...colum };
    });

    // 查询小说列表
    this.queryXiaoShuoList();
  }

  componentDidMount() {
    this.loadPlatServiceData();
  }

  async loadPlatServiceData(params = {}) {
    const { dispatch, renWu: { datas: { pagination } } } = this.props;
    this.setState({ loadingModel: 'list' });
    await dispatch({
      type: 'renWu/query',
      payload: { ...pagination, ...params },
    });
    const { renWu: { datas } } = this.props;
    // 先执行清空详情操作
    await dispatch({
      type: 'renWu/emptyProfile',
    });
    if (datas && datas.list && datas.list.length > 0) {
      this.setState({ currentRowInfo: { ...datas.list[0] } });
      this.handleProfileClick(datas.list[0]);
    } else if (pagination.current !== 1) {
      this.loadPlatServiceData({ ...params, current: 1 });
    }
  }

  queryXiaoShuoList() {
    const { dispatch } = this.props;
    dispatch({
      type: `xiaoShuo/queryXiaoShuoList`,
      payload: {},
    });
  }

  async operatePlatServiceData(action, params) {
    if (params) {
      const { dispatch } = this.props;
      await dispatch({
        type: 'renWu/emptyProfile',
      });
      await dispatch({
        type: `renWu/${action}`,
        payload: params,
      });
    }
  }

  // 点击可查看记录详情
  async handleProfileClick(params) {
    this.setState({ loadingModel: 'profile' });
    await this.operatePlatServiceData('get', params);
    this.handleDisplay();
  }

  async handleAddPlatService(params) {
    const values = { ...params, renWuFenLei: params.renWuFenLei ? params.renWuFenLei.join(',') : null };
    await this.operatePlatServiceData('add', values);
    message.success('新增人物信息成功');
    this.handleFormReset();
  }

  async handleEditPlatService(params) {
    this.setState({ loadingModel: 'profile' });
    await this.operatePlatServiceData('update', params);
    message.success('修改人物信息成功');
    // 触发查询点击事件
    document.getElementById('chaXun').click();
    this.handleDisplay();
  }

  // async handleLockPlatService(params, loadingModel = 'list') {
  //   this.setState({ loadingModel });
  //   await this.operatePlatServiceData('modify', { ...params, state: 'L' });
  //   message.success('激活平台服务信息成功');
  //   this.handleDisplay();
  // }

  // async handleUnLockPlatService(params, loadingModel = 'list') {
  //   this.setState({ loadingModel });
  //   await this.operatePlatServiceData('modify', { ...params, state: 'A' });
  //   message.success('解锁平台服务信息成功');
  //   this.handleDisplay();
  // }

  async handleDeletePlatService(params, loadingModel = 'list') {
    this.setState({ loadingModel });
    await this.operatePlatServiceData('del', { ...params, state: 'X' });
    message.success('删除人物信息成功');
    this.handleFormReset();
  }

  handleStandardTableChange(pagination) {
    const { formValues } = this.state;
    this.loadPlatServiceData({ ...formValues, ...pagination });
  }

  // 列表查询
  handleSearch(e) {
    e.preventDefault();
    const { current: { validateFields } } = this.formRef;
    validateFields()
      .then(values => {
        const params = {};
        Object.keys(values).forEach(key => {
          if (values[key]) {
            params[key] = values[key];
          }
        });
        this.setState({
          formValues: { ...params },
        });
        this.handleDisplay();
        this.loadPlatServiceData(params);
      })
      .catch(errorInfo => {
        console.log(errorInfo);
        /*
        errorInfo:
          {
            values: {
              username: 'username',
              password: 'password',
            },
            errorFields: [
              { password: ['username'], errors: ['Please input your Password!'] },
            ],
            outOfDate: false,
          }
        */
      });
    // validateFields((err, fieldsValue) => {
    //   if (err) return;
    //   this.setState({
    //     formValues: fieldsValue,
    //   });
    //   this.loadPlatServiceData(fieldsValue);
    // });
  }

  // 列表重置
  handleFormReset() {
    const { current: { resetFields } } = this.formRef;
    resetFields();
    this.setState({ formValues: null });
    this.loadPlatServiceData();
  }

  toggleForm() {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  }

  handleSelectRows(rows) {
    this.setState({
      selectedRows: rows,
    });
  }

  // 点击新增按钮
  handleAddBtnClick() {
    this.setState({ currentModel: 'add' });
  }

  // 点击编辑按钮
  async handleEditBtnClick(params) {
    this.setState({ loadingModel: 'profile' });
    if (params) {
      await this.operatePlatServiceData('get', params);
    }
    this.setState({ currentModel: 'edit', currentRowInfo: params });
  }

  // 点击操作记录
  handleCaoZuoJiLu = async detail => {
    this.setState({
      currentModel: 'his',
    });
    const { dispatch } = this.props;
    await dispatch({
      type: 'renWu/emptyRenWuHis',
    });
    dispatch({
      type: 'renWu/getRenWuHis',
      payload: { renWuId: detail.id }
    });
  }

  // 新增修行日志
  handleAddXiuXingRiZhi = async detail => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKu/emptyCangKuList',
    });
    await dispatch({
      type: 'cangKu/getCangKuList',
      payload: { lingWuId: detail.id, lingWuFenLei: '人神妖魔鬼怪', xiaoShuoId: detail.xiaoShuoId },
    });
    const { cangKu: { cangKuList } } = this.props;
    this.setState({
      currentModel: 'addXiuXingRiZhi',
      currentRowInfo: detail,
      currentTab: cangKuList && cangKuList.length > 0 ? 'xiuXingRiZhi' : 'cangKu',
    });
  }

  // 查看修行日志
  handleDetailXiuXingRiZhi = async detail => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKu/emptyCangKuList',
    });
    await dispatch({
      type: 'cangKu/getCangKuList',
      payload: { lingWuId: detail.id, lingWuFenLei: '人神妖魔鬼怪', xiaoShuoId: detail.xiaoShuoId },
    });
    const { cangKu: { cangKuList } } = this.props;
    dispatch({
      type: 'xiuXingRiZhi/emptyXiuXingRiZhiList',
    });
    await dispatch({
      type: 'xiuXingRiZhi/getXiuXingRiZhiList',
      payload: { cangKuId: cangKuList && cangKuList.length > 0 ? cangKuList[0].id : null, xiaoShuoId: detail.xiaoShuoId }
    });
    this.setState({
      currentModel: 'xiuXingRiZhi',
      currentRowInfo: detail,
    });
  }

  // 点击列表编辑按钮
  async handleEditLinkClick(params) {
    if (params) {
      await this.operatePlatServiceData('get', params);
    }
    this.setState({ currentModel: 'listEdit', currentRowInfo: params });
  }

  handleDisplay() {
    this.setState({ currentModel: 'display' });
  }

  // 表格行的类名
  handleRowClassName = record => {
    const { currentRowInfo } = this.state;
    if (currentRowInfo && currentRowInfo.id === record.id) {
      return 'selected';
    }
    return '';
  }

  // 设置行属性
  handleOnTableClick = record => {
    this.setState({ currentRowInfo: { ...record } });
  }

  handleData = () => {
    const { renWu: { data }, xiaoShuo: { xiaoShuoList } } = this.props;
    if (xiaoShuoList && xiaoShuoList.length > 0) {
      const [xiaoShuoInfo] = xiaoShuoList.filter(xiaoShuo => xiaoShuo.dataCode === data.xiaoShuoId);
      if (xiaoShuoInfo) {
        const { dataName } = xiaoShuoInfo;
        data.xiaoShuoId = dataName;
      }
    }
    return data;
  }

  // 处理历史记录字段
  handleRenWuHis = () => renWuHisColumns().map(col => {
    const column = {};
    if (col.dataIndex === 'renWuHisCode') {
      // column.render = (text, record) => <a onClick={() => this.handleRenWuHisCode(record)}>{text}</a>;
    } else if (col.dataIndex === 'renWuMiaoShu') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '300px', marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'renWuShuXing') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text ? <Tooltip title={title}><Paragraph style={{ width: '150px', marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'xiaoShuoId') {
      column.render = text => this.renderXiaoShuo(text);
    }
    return {...col, ...column};
  })

  // 人物操作记录取消
  handleHisOnCancel = () => {
    this.setState({
      currentModel: 'list',
      currentRowInfo: {},
      currentTab: '',
    });
  }

  handleXiuXingRiZhi = async () => {
    const { dispatch } = this.props;
    const { currentRowInfo } = this.state;
    await dispatch({
      type: 'xiuXingRiZhi/getXiuXingRiZhiList',
      payload: { riZhiRenWu: currentRowInfo.renWuName, xiaoShuoId: currentRowInfo.xiaoShuoId },
    });
  }

  // 处理仓库字段
  handleCangKuColumns = () => getCangKuColumns().filter(column => column.addField === 'Y').map(col => {
    const column = {};
    if (col.columnCode === 'lingWu') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'lingWuFenLei') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'lingWuShuXing') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'lingWuState') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'suoShuZhe') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'xiaoShuoId') {
      column.addDisplayField = 'Y';
    } else if (col.columnCode === 'miaoShu') {
      column.addDisplayField = 'Y';
    }
    return { ...col, ...column };
  });

  // 处理修行日志字段
  handleXiuXingRiZhiColumns = () => getXiuXingRiZhiColumns().filter(column => column.addField === 'Y').map(col => {
    const column = {};
    if (col.columnCode === 'cangKuId') {
      column.addDisplayField = 'Y'
    } else if (col.columnCode === 'xiaoShuoId') {
      column.addDisplayField = 'Y'
    }
    return { ...col, ...column };
  });

  // 处理修行日志字段
  handleXiuXingRiZhiCols = () => getXiuXingRiZhiColumns().filter(column => column.profileField === 'Y').map(column => {
    const listColumn = {
      title: column.columnName,
      dataIndex: column.columnCode,
      key: column.columnCode,
      width: column.profileWidth || 'auto',
    };

    if (column.sortField === 'Y') {
      listColumn.sorter = true;
    }
    return listColumn;
  }).map(col => {
    const column = {};
    if (col.dataIndex === 'lingWuMiaoShu') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'riZhi') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'riZhiEvent') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'riZhiRenWu') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'riZhiDiDian') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'riZhiTime') {
      column.render = (text => {
        const title = renderMiaoShu(text);
        return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
      });
    } else if (col.dataIndex === 'xiaoShuoId') {
      column.render = (text => this.renderXiaoShuo(text));
    }
    return {...col, ...column};
  });

  // 仓库信息取消
  handleCangKuOnCancel = () => {
    this.setState({
      currentModel: 'list',
      currentTab: '',
      currentRowInfo: {},
    });
  }

  // 日志信息取消
  handleXiuXingRiZhiOnCancel = () => {
    this.setState({
      currentModel: 'list',
      currentTab: '',
      currentRowInfo: {},
    });
  }

  // 仓库信息提交
  handleCangKuOnOk = async params => {
    const { currentTab } = this.state;
    if (currentTab === 'cangKu') {
      const { dispatch } = this.props;
      dispatch({
        type: 'cangKu/emptyProfile',
      });
      await dispatch({
        type: 'cangKu/add',
        payload: params,
      });
      const { cangKu: { data } } = this.props;
      console.log('仓库信息:', data, currentTab, params);
      if (data && Object.keys(data).length > 0) {
        this.setState({
          currentTab: 'xiuXingRiZhi',
        });
      }
    } else if (currentTab === 'xiuXingRiZhi') {
      const { dispatch } = this.props;
      dispatch({
        type: 'xiuXingRiZhi/emptyProfile',
      });
      await dispatch({
        type: 'xiuXingRiZhi/add',
        payload: params,
      });
      const { xiuXingRiZhi: { data } } = this.props;
      if (data && Object.keys(data).length > 0) {
        this.setState({
          currentTab: '',
          currentRowInfo: {},
          currentModel: 'list',
        });
      }
      this.handleFormReset();
    }
  }

  renderXiaoShuo(text) {
    if (text) {
      const { xiaoShuo: { xiaoShuoList } } = this.props;
      if (xiaoShuoList && xiaoShuoList.length > 0) {
        const [xiaoShuoInfo] = xiaoShuoList.filter(xiaoShuo => xiaoShuo.dataCode === text);
        if (xiaoShuoInfo) {
          return xiaoShuoInfo.dataName;
        }
      }
    }
    return text;
  }

  // renderSimpleForm() {
  //   const { xiaoShuo: { xiaoShuoList } } = this.props;
  //   return (
  //     <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
  //       <Col md={8} sm={24}>
  //         <FormItem label="仓库名称" name="cangKuName">
  //           <Input placeholder="请输入仓库名称" />
  //         </FormItem>
  //       </Col>
  //       <Col md={8} sm={24}>
  //         <FormItem label="仓库描述" name="cangKuMiaoShu">
  //           <Input placeholder="请输入仓库描述" />
  //         </FormItem>
  //       </Col>
  //       <Col md={8} sm={24}>
  //         <FormItem label="小说" name="xiaoShuoId">
  //           <Select placeholder="请选择小说" allowClear>
  //             {xiaoShuoList && xiaoShuoList.length > 0 ? xiaoShuoList.map(xiaoShuo => {
  //               const { dataCode, dataName } = xiaoShuo;
  //               return <Option key={dataCode} value={dataCode}>{dataName}</Option>
  //             }) : ''}
  //           </Select>
  //         </FormItem>
  //       </Col>
  //     </Row>
  //   );
  // }

  // renderAdvancedForm() {
  //   return (
  //     <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
  //       <Col md={8} sm={24}>
  //         <FormItem label="所属应用" name="appName">
  //           <Input placeholder="请输入所属应用" />
  //         </FormItem>
  //       </Col>
  //       <Col md={8} sm={24}>
  //         <FormItem label="状态" name="state">
  //           <Select placeholder="请选择服务状态">
  //             <Option value="">全部</Option>
  //             <Option value="A">激活</Option>
  //             <Option value="L">锁定</Option>
  //           </Select>
  //         </FormItem>
  //       </Col>
  //     </Row>
  //   );
  // }

  renderForm() {
    const { expandForm } = this.state;
    const rowSearchColumns = [];
    let rowColumns;
    this.searchColumns.forEach((column, index) => {
      if (index % 3 === 0) {
        rowColumns = [];
        rowSearchColumns.push(rowColumns);
      }
      if (index < 3 || expandForm) {
        rowColumns.push(column);
      }
    });

    return (
      <Form layout="inline" ref={this.formRef}>
        { rowSearchColumns.map((rows, index) => {
          const key = index + 1;
          let mdVal = 6;
          if (rows && rows.length >= 3) {
            mdVal = 6;
          } else {
            mdVal = 8;
          }
          return (
            <Row
              key={key}
              gutter={{md: mdVal, lg: 24, xl: 20,}}
              style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
            >
              {rows.map(col => (
                <Col style={{ paddingLeft: '0px', paddingRight: '0px' }} key={col.columnCode} md={8} sm={24}>
                  <AutoFormRow formItemLayout={formItemLayout} column={col} searchArea />
                </Col>
              ))}
            </Row>
          );
        })}
      </Form>
    );
    // return (
    //   <Form layout="inline" ref={this.formRef}>
    //     {this.renderSimpleForm()}
    //     {/* { this.state.expandForm ? this.renderAdvancedForm() : ''} */}
    //   </Form>
    // );
  }

  renderToolbar() {
    const { selectedRows } = this.state;
    const up = (<Fragment>收起<UpOutlined /></Fragment>);
    const down = (<Fragment>展开<DownOutlined /></Fragment>);
    return (
      <Fragment>
        <Button type="primary" onClick={this.handleAddBtnClick.bind(this)}><PlusOutlined /> 新增</Button>
        {/* <Popconfirm placement="top" title="确定要锁定这些平台服务吗？" onConfirm={() => { console.log(selectedRows); }} okText="确定" cancelText="取消"> */}
        {/* <Button disabled={selectedRows.length > 0 ? '' : 'disabled'}><LockOutlined /> 批量锁定</Button> */}
        {/* </Popconfirm> */}
        {/* <Popconfirm placement="top" title="确定要激活这些平台服务吗？" onConfirm={() => { console.log(selectedRows); }} okText="确定" cancelText="取消"> */}
        {/* <Button disabled={selectedRows.length > 0 ? '' : 'disabled'}><UnlockOutlined /> 批量激活</Button> */}
        {/* </Popconfirm> */}
        <Popconfirm placement="top" title="确定要删除这些平台服务吗？" onConfirm={() => { console.log(selectedRows); }} okText="确定" cancelText="取消">
          <Button disabled={selectedRows.length > 0 ? '' : 'disabled'}><DeleteOutlined /> 批量删除</Button>
        </Popconfirm>
        <span style={{ float: 'right', marginBottom: 24 }}>
          <Button id="chaXun" type="primary" htmlType="submit" onClick={this.handleSearch.bind(this)}>查询</Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset.bind(this)}>重置</Button>
           <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}>
           {this.state.expandForm ? up : down}
           </a>
        </span>
      </Fragment>
    );
  }

  renderButtonGroup() {
    const { currentModel } = this.state;
    if (currentModel === 'display') {
      const { renWu: { data: detailData, datas } } = this.props;
      if (detailData) {
        const profileBtn = datas && datas.list && datas.list.length <= 0;
        return (
          <Fragment>
            <ButtonGroup>
              <Button disabled={profileBtn} onClick={() => { this.handleEditBtnClick(detailData); }}><EditOutlined /> 修改</Button>
              {/* <Popconfirm placement="top" title="确定要锁定吗？" onConfirm={() => { this.handleLockPlatService(detailData, 'profile'); }} okText="确定" cancelText="取消"> */}
              {/* <Button disabled={detailData.state === 'A' ? '' : 'disabled'}><LockOutlined />锁定</Button> */}
              {/* </Popconfirm> */}
              {/* <Popconfirm placement="top" title="确定要激活吗？" onConfirm={() => { this.handleUnLockPlatService(detailData, 'profile'); }} okText="确定" cancelText="取消"> */}
              {/* <Button disabled={detailData.state === 'L' ? '' : 'disabled'}><UnlockOutlined /> 激活</Button> */}
              {/* </Popconfirm> */}
              <Popconfirm placement="top" title="确定要删除吗？" onConfirm={() => { this.handleDeletePlatService(detailData, 'profile'); }} okText="确定" cancelText="取消">
                <Button disabled={profileBtn}><DeleteOutlined /> 删除</Button>
              </Popconfirm>
            </ButtonGroup>
          </Fragment>
        );
      }
    }
    return '';
  }

  renderLinkGroup(detailData) {
    if (detailData) {
      return (
        <Fragment>
          <a onClick={() => { this.handleCaoZuoJiLu(detailData); }}>操作记录</a>
          <Divider type="vertical" />
          <Popconfirm
            placement="top"
            title="选择新增或查看日志"
            onConfirm={() => { this.handleAddXiuXingRiZhi(detailData); }}
            onCancel={() => { this.handleDetailXiuXingRiZhi(detailData); }}
            okText="新增日志"
            cancelText="查看日志"
          >
            <a>修行日志</a>
          </Popconfirm>
          <Divider type="vertical" />
          <a onClick={() => { this.handleEditLinkClick(detailData); }}>修改</a>
          <Divider type="vertical" />
          {/* <Popconfirm placement="top" title="确定要锁定吗？" onConfirm={() => { this.handleLockPlatService(detailData); }} okText="确定" cancelText="取消"> */}
          {/* <a disabled={detailData.state === 'A' ? '' : 'disabled'}>锁定</a> */}
          {/* </Popconfirm> */}
          {/* <Divider type="vertical" /> */}
          {/* <Popconfirm placement="top" title="确定要激活吗？" onConfirm={() => { this.handleUnLockPlatService(detailData); }} okText="确定" cancelText="取消"> */}
          {/* <a disabled={detailData.state === 'L' ? '' : 'disabled'}>激活</a> */}
          {/* </Popconfirm> */}
          {/* <Divider type="vertical" /> */}
          <Popconfirm placement="top" title="确定要删除吗？" onConfirm={() => { this.handleDeletePlatService(detailData); }} okText="确定" cancelText="取消">
            <a>删除</a>
          </Popconfirm>
        </Fragment>
      );
    }
    return '';
  }

  renderEditForm() {
    const { currentModel, currentRowInfo } = this.state;
    if (currentModel === 'edit') {
      const { renWu: { data: selectRecord  } } = this.props;
      return (
        <StandardForm
          title="编辑人物"
          currentModel={currentModel}
          formColumnList={this.editColumns}
          // xiaoShuoList={xiaoShuoList}
          initialValues={selectRecord ? {...selectRecord, xiaoShuoId: currentRowInfo.xiaoShuoId} : {}}
          // showDialog
          // visible
          data={selectRecord}
          onSubmit={this.handleEditPlatService.bind(this)}
          onCancel={this.handleDisplay.bind(this)}
        />
      );
    }
    return '';
  }

  // 点击打开新增模态框
  renderEditDialog() {
    const { currentModel, currentRowInfo } = this.state;
    if (currentModel === 'listEdit') {
      const { renWu: { data  } } = this.props;
      return (
        <StandardForm
          formColumnList={this.editColumns}
          currentModel={currentModel}
          title="编辑人物"
          initialValues={data ? {...data, xiaoShuoId: currentRowInfo.xiaoShuoId, renWuFenLei: currentRowInfo.renWuFenLei ? currentRowInfo.renWuFenLei.split(',') : []} : {}}
          showDialog
          visible
          onSubmit={this.handleAddPlatService.bind(this)}
          onCancel={this.handleDisplay.bind(this)}
        />
      );
    }
    return '';
  }

  // 点击打开新增模态框
  renderAddDialog() {
    const { currentModel } = this.state;
    if (currentModel === 'add') {
      return (
        <StandardForm
          formColumnList={this.addColumns}
          currentModel={currentModel}
          title="新增人物"
          initialValues={{}}
          showDialog
          visible
          onSubmit={this.handleAddPlatService.bind(this)}
          onCancel={this.handleDisplay.bind(this)}
        />
      );
    }
    return '';
  }

  renderXiuXingRiZhi() {
    const { currentModel } = this.state;
    if (currentModel === 'xiuXingRiZhi') {
      const { xiuXingRiZhi: { xiuXingRiZhiList } } = this.props;
      return (
        <XiuXingRiZhiModal
          scroll={{ x: '200%' }}
          width={1000}
          title="日志"
          columns={this.handleXiuXingRiZhiCols()}
          dataSource={xiuXingRiZhiList}
          loading={false}
          onCancel={this.handleXiuXingRiZhiOnCancel}
        />
      );
    }
    return '';
  }

  renderAddXiuXingRiZhi() {
    const { currentModel, currentRowInfo, currentTab } = this.state;
    if (currentModel === 'addXiuXingRiZhi') {
      const { loading, cangKu: { cangKuList }, xiuXingRiZhi: { xiuXingRiZhiList } } = this.props;
      return (
        <AddXiuXingRiZhiModal
          currentTab={currentTab}
          width={700}
          title="人物修行日志"
          loading={loading}
          cangKuColumns={this.handleCangKuColumns()}
          xiuXingRiZhiColumns={this.handleXiuXingRiZhiColumns()}
          onOk={this.handleCangKuOnOk}
          onCancel={this.handleCangKuOnCancel}
          xiuXingRiZhi={this.handleXiuXingRiZhi}
          xiuXingRiZhiList={xiuXingRiZhiList}
          cangKuInitialValues={currentRowInfo && Object.keys(currentRowInfo).length > 0 ? {
            lingWu: currentRowInfo.renWuName,
            lingWuFenLei: '人神妖魔鬼怪',
            lingWuShuXing: currentRowInfo.renWuShuXing,
            lingWuState: currentRowInfo.renWuState,
            miaoShu: currentRowInfo.renWuMiaoShu,
            xiaoShuoId: currentRowInfo.xiaoShuoId,
            suoShuZhe: currentRowInfo.renWuName,
          } : {}}
          xiuXingRiZhiInitialValues={currentRowInfo && Object.keys(currentRowInfo).length > 0 ? {
            cangKuId: cangKuList && cangKuList.length > 0 ? cangKuList[0].id : null,
            xiaoShuoId: currentRowInfo.xiaoShuoId,
          } : {}}
        />
      );
    }
    return '';
  }

  renderHis() {
    const { currentModel } = this.state;
    if (currentModel === 'his') {
      const { renWu: { his }, loading } = this.props;
      return (
        <HisModal
          loading={loading}
          width={1000}
          title="人物操作记录"
          dataSource={his && his.list && his.list.length > 0 ? his.list : []}
          columns={this.handleRenWuHis()}
          onCancel={this.handleHisOnCancel}
        />
      );
    }
    return '';
  }

  renderProfile() {
    const { currentModel } = this.state;
    if (currentModel === 'display') {
      const { renWu: { data: detailData } } = this.props;
      if (detailData) {
        return (
          <StandardProfile
            profileColumns={this.profileColumns}
            data={this.handleData()}
          />
        );
      }
    }
    return '';
  }

  render() {
    const { renWu: { datas }, loading } = this.props;
    const { selectedRows, currentModel, loadingModel } = this.state;
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              {this.renderForm()}
            </div>
            <div className={styles.tableListOperator}>
              {this.renderToolbar()}
            </div>
            <StandardTable
              scroll={{ x: '150%' }}
              loading={currentModel !== 'add' && loadingModel === 'list' ? loading : false}
              selectedRows={selectedRows}
              data={datas}
              columns={this.listColumns}
              onChange={this.handleStandardTableChange.bind(this)}
              onSelectRow={this.handleSelectRows.bind(this)}
              rowClassName={this.handleRowClassName}// 表格行的类名
              onRow={record => ({
                onClick: () => {
                  this.handleOnTableClick(record);
                },
              })}
            />
          </div>
        </Card>
        <Card title="人物信息" bordered={false} extra={this.renderButtonGroup()} loading={currentModel !== 'add' && loadingModel === 'profile' ? loading : false}>
          {this.renderProfile()}
          {this.renderEditForm()}
        </Card>
        {this.renderAddDialog()}
        {this.renderEditDialog()}
        {this.renderHis()}
        {this.renderAddXiuXingRiZhi()}
        {this.renderXiuXingRiZhi()}
      </PageHeaderWrapper>
    );
  }
}

