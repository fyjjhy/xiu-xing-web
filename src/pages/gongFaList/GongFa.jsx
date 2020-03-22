/* eslint-disable react/jsx-no-bind */
import {
  // DownOutlined,
  PlusOutlined,
  // LockOutlined,
  // UnlockOutlined,
  EditOutlined,
  DeleteOutlined,
  // UpOutlined,
} from '@ant-design/icons';
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import { Row, Col, Card, Form, Select, Button, Divider, Popconfirm, message, Input } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardTable from '../../components/StandardTable';
import StandardProfile from '../../components/StandardProfile';
import StandardForm from '../../components/StandardForm';

import styles from './GongFa.less';

const { Item: FormItem } = Form;
const { Group: ButtonGroup } = Button;
const { Option } = Select;

let columns = [{
  title: '功法代码',
  dataIndex: 'gongFaCode',
  width: '90px',
}, {
  title: '功法名称',
  dataIndex: 'gongFaName',
  width: '175px',
}, {
  title: '小说',
  dataIndex: 'xiaoShuoId',
  width: '175px',
}, {
  title: '功法描述',
  dataIndex: 'gongFaMiaoShu',
  width: 'auto',
}, {
  title: '更新时间',
  dataIndex: 'updateTime',
  width: '160px',
}, {
  title: '操作',
  dataIndex: 'id',
  width: '110px',
}];

const profileColumns = [{
  columnName: 'id',
  columnCode: 'id',
  hiddenField: 'Y',
  displayType: 'I',
}, {
  columnName: '功法代码',
  columnCode: 'gongFaCode',
  profileField: 'Y',
  addField: 'N',
  displayType: 'I',
}, {
  columnName: '功法名称',
  columnCode: 'gongFaName',
  profileField: 'Y',
  addField: 'Y',
  editField: 'Y',
  displayType: 'I',
}, {
  columnName: '小说',
  columnCode: 'xiaoShuoId',
  profileField: 'Y',
  addField: 'Y',
  editField: 'Y',
  valueList: 'service|/chenXian/chen/xian/xiaoShuo',
  displayType: 'S',
}, {
  columnName: '更新时间',
  columnCode: 'updateTime',
  profileField: 'Y',
  displayType: 'I',
}, {
  columnName: '功法描述',
  columnCode: 'gongFaMiaoShu',
  profileField: 'Y',
  addField: 'Y',
  editField: 'Y',
  displayType: 'T',
}];



@connect(({ gongFa, xiaoShuo, loading }) => ({
  gongFa,
  xiaoShuo,
  loading: loading.models.faShu,
}))
export default class GongFa extends PureComponent {
  formRef = React.createRef();

  state = {
    // expandForm: false,
    formValues: {},
    selectedRows: [],
    currentModel: 'display',
    loadingModel: 'list',
    currentRowInfo: {},
  };

  UNSAFE_componentWillMount() {
    columns = columns.map(col => {
      const colum = {};
      if (col.dataIndex === 'faShuName') {
        colum.render = ((text, record) => <a onClick={() => { this.handleProfileClick(record); }}>{text}</a>);
      } else if (col.dataIndex === 'id') {
        colum.render = ((text, record) => this.renderLinkGroup(record));
      } else if (col.dataIndex === 'xiaoShuoId') {
        colum.render = (text => this.renderXiaoShuo(text));
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
    const { dispatch, gongFa: { datas: { pagination } } } = this.props;
    this.setState({ loadingModel: 'list' });
    await dispatch({
      type: 'gongFa/query',
      payload: { ...pagination, ...params },
    });
    const { gongFa: { datas } } = this.props;
    // 先执行清空详情操作
    await dispatch({
      type: 'gongFa/emptyProfile',
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
        type: `gongFa/${action}`,
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
    await this.operatePlatServiceData('add', params);
    message.success('新增法术信息成功');
    this.handleFormReset();
  }

  async handleEditPlatService(params) {
    this.setState({ loadingModel: 'profile' });
    await this.operatePlatServiceData('update', params);
    message.success('修改平台服务信息成功');
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
    message.success('删除平台服务信息成功');
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
        this.setState({
          formValues: { ...values },
        });
        const params = {};
        Object.keys(values).forEach(key => {
          if (values[key]) {
            params[key] = values[key];
          }
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

  // toggleForm() {
  //   this.setState({
  //     expandForm: !this.state.expandForm,
  //   });
  // }

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
    this.setState({ currentModel: 'edit' });
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
    const { gongFa: { data }, xiaoShuo: { xiaoShuoList } } = this.props;
    if (xiaoShuoList && xiaoShuoList.length > 0) {
      const [xiaoShuoInfo] = xiaoShuoList.filter(xiaoShuo => xiaoShuo.dataCode === data.xiaoShuoId);
      if (xiaoShuoInfo) {
        const { dataName } = xiaoShuoInfo;
        data.xiaoShuoId = dataName;
      }
    }
    return data;
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

  renderSimpleForm() {
    const { xiaoShuo: { xiaoShuoList } } = this.props;
    return (
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={8} sm={24}>
          <FormItem label="功法名称" name="gongFaName">
            <Input placeholder="请输入功法名称" />
          </FormItem>
        </Col>
        <Col md={8} sm={24}>
          <FormItem label="功法描述" name="gongFaMiaoShu">
            <Input placeholder="请输入功法描述" />
          </FormItem>
        </Col>
        <Col md={8} sm={24}>
          <FormItem label="小说" name="xiaoShuoId">
            <Select placeholder="请选择小说" allowClear>
              {xiaoShuoList && xiaoShuoList.length > 0 ? xiaoShuoList.map(xiaoShuo => {
                const { dataCode, dataName } = xiaoShuo;
                return <Option key={dataCode} value={dataCode}>{dataName}</Option>
              }) : ''}
            </Select>
          </FormItem>
        </Col>
      </Row>
    );
  }

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
    return (
      <Form layout="inline" ref={this.formRef}>
        {this.renderSimpleForm()}
        {/* { this.state.expandForm ? this.renderAdvancedForm() : ''} */}
      </Form>
    );
  }

  renderToolbar() {
    const { selectedRows } = this.state;
    // const up = (<Fragment>收起<UpOutlined /></Fragment>);
    // const down = (<Fragment>展开<DownOutlined /></Fragment>);
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
          {/* <a style={{ marginLeft: 8 }} onClick={this.toggleForm.bind(this)}> */}
          {/* {this.state.expandForm ? up : down} */}
          {/* </a> */}
        </span>
      </Fragment>
    );
  }

  renderButtonGroup() {
    const { currentModel } = this.state;
    if (currentModel === 'display') {
      const { gongFa: { data: detailData, datas } } = this.props;
      if (detailData) {
        const profileBtn = datas && datas.list && datas.list.length <= 0;
        return (
          <Fragment>
            <ButtonGroup>
              <Button disabled={profileBtn} onClick={() => { this.handleEditBtnClick(); }}><EditOutlined /> 修改</Button>
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
          <a onClick={() => { this.handleEditBtnClick(detailData); }}>修改</a>
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
    const { currentModel } = this.state;
    const { gongFa: { data: selectRecord  } } = this.props;
    if (currentModel === 'edit') {
      const profile = selectRecord || {};
      return (
        <StandardForm
          title="编辑法术"
          currentModel={currentModel}
          formColumnList={profileColumns}
          // xiaoShuoList={xiaoShuoList}
          initialValues={{
            gongFaName: profile.gongFaName,
            gongFaCode: profile.gongFaCode,
            xiaoShuoId: profile.xiaoShuoId,
            gongFaMiaoShu: profile.gongFaMiaoShu,
            id: profile.id
          }}
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
  renderAddDialog() {
    const { currentModel } = this.state;
    if (currentModel === 'add') {
      // const { xiaoShuo: { xiaoShuoList }, gongFa: { data  } } = this.props;
      // const profile = data || {};
      return (
        <StandardForm
          formColumnList={profileColumns}
          currentModel={currentModel}
          title="新增法术"
          // initialValues={{
          //   fuShuName: profile.fuShuName,
          //   fuShuCode: profile.fuShuCode,
          //   xiaoShuoId: profile.xiaoShuoId,
          //   fuShuMiaoShu: profile.fuShuMiaoShu,
          //   id: profile.id
          // }}
          // xiaoShuoList={xiaoShuoList}
          showDialog
          visible
          onSubmit={this.handleAddPlatService.bind(this)}
          onCancel={this.handleDisplay.bind(this)}
        />
      );
    }
    return '';
  }

  renderProfile() {
    const { currentModel } = this.state;
    if (currentModel === 'display') {
      const { gongFa: { data: detailData } } = this.props;
      if (detailData) {
        return (
          <StandardProfile
            profileColumns={profileColumns}
            data={this.handleData()}
          />
        );
      }
    }
    return '';
  }

  render() {
    const { gongFa: { datas }, loading } = this.props;
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
              loading={currentModel !== 'add' && loadingModel === 'list' ? loading : false}
              selectedRows={selectedRows}
              data={datas}
              columns={columns}
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
        <Card title="功法信息" bordered={false} extra={this.renderButtonGroup()} loading={currentModel !== 'add' && loadingModel === 'profile' ? loading : false}>
          {this.renderProfile()}
          {this.renderEditForm()}
        </Card>
        {this.renderAddDialog()}
      </PageHeaderWrapper>
    );
  }
}

