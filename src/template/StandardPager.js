/* eslint-disable radix */
import React, { Fragment, PureComponent } from 'react';
import { Card, message } from 'antd';

import AutoTable from '../components/Auto/AutoTable';
import AutoProfile from '../components/Auto/AutoProfile';
import AutoForm from '../components/Auto/AutoForm';

import { getMetaModel } from '../utils/metaModel';
import { getUrlParameters } from '../utils/getUrlParameter';

export default class StandardPager extends PureComponent {
  // 构造函数用来处理属性
  constructor(props) {
    super(props);
    let listParam = '1';
    const param = this.props.pref;
    if (param) {
      listParam = `${param}1`;
    }
    this.listMetaModel = getMetaModel(props.metaModelList, listParam);
    this.queryActions = this.listMetaModel.actionList.filter(action => (
      action.defaultFlag === 'Y' && action.servAction === 'query')
    );
    this.treeTableFlag = this.listMetaModel.treeTableFlag;
    this.parentColumnCode = this.listMetaModel.parentColumnCode;
    this.modelCode = this.listMetaModel.modelCode;
    // 初始是否加载数据
    this.searchFlag = this.listMetaModel.searchFlag;
    if (this.listMetaModel.relationship) {
      this.listMetaModel.relationship.split('|').forEach(data => {
        const keys = data.split('=');
        const [leftKey, rightKey] = keys;
        if (rightKey === 'titleOfRight') {
          this.titleCode = leftKey;
        }
        this.relateParamCodes.push(keys);
      });
    }
    this.listMetaModel.actionList.filter(action => (action.defaultFlag === 'Y' && !action.extStr05)).forEach(action => {
        if (action.servAction === 'get') {
          this.getAction = action;
        } else if (action.servAction === 'update') {
          this.updateAction = action;
        } else if (action.servAction === 'delete') {
          this.delAction = action;
        } else if (action.servAction === 'add') {
          this.addAction = action;
        } else if (action.servAction === 'export') {
          this.exportActoion = action;
          this.localtionData = action.extStr01;
        }
      }
    );
  }

  state = {
    currentModel: null,
    selectedTableRow: {},
    tableSearchFlag: false,
  };

  // 初始加载数据  初始加载数据移动到AutoTable组件中
  // 因为有的初始查询需要带上查询searchForm中的条件
  // searchForm在AutoTable中
  // componentDidMount() {
  //   if (this.searchFlag === 'Y' && this.relateParamCodes.length === 0) {
  //     this.loadData();
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (this.relateParamCodes.length > 0) {
      const beforeRowInfo = this.props.rowInfo;
      const afterRowInfo = nextProps.rowInfo;
      const { id: beforeId } = beforeRowInfo;
      const { id: afterId } = afterRowInfo;
      if (Object.keys(afterRowInfo).length === 0) {
        // 左边选中的行为空，则需要清除右边的数据
        const { datas: { list: beforeData } } = this.props[this.listMetaModel.funcModelCode];
        if (beforeData && beforeData.length > 0) {
          const { listMetaModel } = this;
          this.clearTable(listMetaModel);
          this.clearProfile();
        }
      } else if (beforeId !== afterId) {
        const params = this.addDefaultParam({}, afterRowInfo);
        const { listMetaModel } = this;
        this.clearTable(listMetaModel);
        this.clearProfile();
        this.loadData(params);
      }
    }
  }


  setCurrentRowInfo = record => {
    if (!record) {
      return;
    }
    // selectedTableRow can be undefined
    this.setState({
      selectedTableRow: record,
    });
    const { getCurrentRowInfo } = this.props;
    if (getCurrentRowInfo) {
      // 左右模板，左边会有getCurrentRowInfo 用来控制右边
      getCurrentRowInfo(record);
      // 左右模板可以将当前选中的记录暴露给调用者
      if (this.relateParamCodes.length === 0) {
        // 左边
        const { getLeftTemplateSelectedRowInfo } = this.props;
        if (getLeftTemplateSelectedRowInfo) {
          getLeftTemplateSelectedRowInfo(record);
        }
      } else {
        // 右边
        const { getRightTemplateSelectedRowInfo } = this.props;
        if (getRightTemplateSelectedRowInfo) {
          getRightTemplateSelectedRowInfo(record);
        }
      }
    } else {
      // 单独使用StardardPager页面
      const { getTemplateSelectedRowInfo } = this.props;
      if (getTemplateSelectedRowInfo) {
        getTemplateSelectedRowInfo(record);
      }
    }
  }

  changeTableSearchFlag = flag => {
    this.setState({
      tableSearchFlag: flag,
    });
  }

  listMetaModel = null;

  // left right template
  relateParamCodes = [];

  titleCode = null;

  treeTableFlag = null;

  parentColumnCode = null;

  modelCode = null;

  localtionData = null;

  searchFlag = null;

  // 加载数据的方法
  loadData = async (params = {}, expanded = false) => {
    // 先关闭编辑或新增的模态框
    this.handleResetDisplay();
    this.setState({ currentModel: null });
    if (!this.queryActions || this.queryActions.length === 0) {
      return;
    }
    const queryAction = this.queryActions[0];
    const { dispatch, location: { search }, rowInfo, extraInfo={} } = this.props;
    const { listMetaModel } = this;
    let finalParam = { ...params, ...extraInfo };
    // left right template need, right
    if (this.relateParamCodes.length > 0) {
      finalParam = this.addDefaultParam(finalParam, rowInfo);
    } else if (rowInfo && Object.keys(rowInfo).length > 0) {
      finalParam = { ...rowInfo, ...finalParam };
    }
    const { tableSearchFlag } = { ...this.state, ...finalParam };
    if (this.treeTableFlag === 'Y' && this.parentColumnCode && !tableSearchFlag) {
      finalParam = this.addTreeTableDefaultParam(finalParam);
    }
    // no pagination if expanded, expanded default false
    if (!expanded) {
      const urlParameters = getUrlParameters(search);
      const { datas: { pagination } } = this.props[listMetaModel.funcModelCode];
      finalParam = { ...urlParameters, ...pagination, ...finalParam };
    }
    await dispatch({
      type: `${listMetaModel.funcModelCode}/${queryAction.code}`,
      payload: {
        ...finalParam,
      },
    });
    /** 扩展方法 */
    const { upProfile } = this.props;
    if (upProfile) {
      upProfile(params);
    }
    const { datas: { list } } = this.props[listMetaModel.funcModelCode];
    if (list.length === 0 && finalParam.current !== 1) {
      finalParam.current -= 1;
      await dispatch({
        type: `${listMetaModel.funcModelCode}/${queryAction.code}`,
        payload: {
          ...finalParam,
        },
      });
    }
  }

  autoCompleteSearch = param => {
    const { listMetaModel } = this;
    const { dispatch } = this.props;
    dispatch({
      type: `${listMetaModel.funcModelCode}/queryAutoCompleteSource`,
      payload: param,
    });
  }

  addDefaultParam = (params, rowInfo = {}) => {
    const defaultParam = {};
    if (this.relateParamCodes.length > 0) {
      this.relateParamCodes.forEach(data => {
        const [leftKey, rightKey] = data;
        defaultParam[rightKey] = rowInfo[leftKey];
      });
    }
    return { ...defaultParam, ...params };
  }

  addTreeTableDefaultParam = (param = {}) => {
    const defaultParam = {};
    defaultParam[this.parentColumnCode] = '0';
    return { ...defaultParam, ...param };
  }

  exportFileParam = params => {
    const values = params;
    values.modelCode = this.modelCode;
    values.localtionData = this.localtionData;
    return values;
  }

  clearTable = listMetaModel => {
    const { dispatch } = this.props;
    dispatch({
      type: `${listMetaModel.funcModelCode}/emptyList`,
    });
  }

  clearProfile = () => {
    const { dispatch } = this.props;
    const { listMetaModel } = this;
    dispatch({
      type: `${listMetaModel.funcModelCode}/emptyProfile`,
    });
  }

  resetNeedLoad = () => {
    const { dispatch } = this.props;
    const { listMetaModel } = this;
    dispatch({
      type: `${listMetaModel.funcModelCode}/resetNeedLoad`,
    });
  };

  // 点击显示
  handleDisplay = () => {
    this.setState({
      currentModel: 'display',
    });
  }

  // 将display置为初始值 null
  handleResetDisplay = () => {
    this.setState({
      currentModel: null,
      selectedTableRow: {},
    }, () => {
      const { expandOnCancel } = this.props;
      if (expandOnCancel) {
        expandOnCancel();
      }
    });
  };

  // 点击事件
  handleProfileClick = async params => {
    this.handleDisplay();
    await this.handleGetProfileData(params);
  };

  handleGetProfileData = async params => {
    if (this.getAction) {
      const { dispatch } = this.props;
      await dispatch({
        type: `${this.listMetaModel.funcModelCode}/${this.getAction.code}`,
        payload: params,
      });
    }
  }

  // 编辑
  handleEdit = async params => {
    if (this.updateAction) {
      const { dispatch, location: { search } } = this.props;
      const urlParameters = getUrlParameters(search);
      await dispatch({
        type: `${this.listMetaModel.funcModelCode}/${this.updateAction.code}`,
        payload: {
          ...params, ...urlParameters,
        },
      });
      this.handleResetDisplay();
    }
  };

  // 编辑按钮点击
  handleEditClick = async params => {
    this.clearProfile();
    await this.handleGetProfileData(params);
    const { extraEditClick } = this.props;
    if (extraEditClick) {
      await extraEditClick(params);
    }
    this.setState({
      currentModel: 'edit',
    });
  }

  // 删除
  handleDel = async params => {
    if (!params) {
      return '无可删除记录数据';
    }
    if (this.delAction) {
      const { dispatch } = this.props;
      await dispatch({
        type: `${this.listMetaModel.funcModelCode}/${this.delAction.code}`,
        payload: params,
      });
    }
    return '';
  }

  handleAddClick = (selectedRows) => {
    if (selectedRows && selectedRows.length > 1) {
      message.info('请选择单一新增模板');
      return;
    }
    if (this.relateParamCodes.length > 0) {
      const { rowInfo } = this.props;
      if (!rowInfo || Object.keys(rowInfo).length === 0) {
        message.info('请等待数据加载完成');
        return;
      }
    }
    this.setState({
      currentModel: 'add',
      selectedTableRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {},
    });
  };

  handleAdd = async params => {
    let finalParam = { ...params };
    // eslint-disable-next-line no-restricted-syntax
    for (const key in finalParam) {
      if (!finalParam[key]) {
        delete finalParam[key];
      }
    }
    if (this.relateParamCodes.length > 0) {
      const { rowInfo } = this.props;
      finalParam = this.addDefaultParam(params, rowInfo);
    }
    if (this.addAction) {
      const { dispatch, location: { search } } = this.props;
      const urlParameters = getUrlParameters(search);
      await dispatch({
        type: `${this.listMetaModel.funcModelCode}/${this.addAction.code}`,
        payload: {
          ...finalParam, ...urlParameters,
        },
      });
      this.handleResetDisplay();
    }
  };

  // 导出
  handleExportClick = async params => {
    if (this.exportActoion) {
      message.info('数据正在导出....请在消息中的文件列表查看进度和下载！');
      const exportDataParam = this.exportFileParam(params);
      const { dispatch, rowInfo } = this.props;
      await dispatch({
        type: `${this.listMetaModel.funcModelCode}/${this.exportActoion.code}`,
        payload: { ...exportDataParam, ...(rowInfo || {}) },
      });
    }
  }

  render() {
    const { props } = this;
    const { rowInfo } = this.props;
    const { currentModel, selectedTableRow, tableSearchFlag } = this.state;
    const { data, needLoad: listNeedLoad } = this.props[this.listMetaModel.funcModelCode];
    const needLoad = listNeedLoad;
    const addLoading = this.props.loading.models[this.listMetaModel.funcModelCode];
    const editLoading = this.props.loading.models[this.listMetaModel.funcModelCode];
    const subsLoading = this.props.loading.models[this.listMetaModel.funcModelCode];
    const title = rowInfo ? rowInfo[this.titleCode] : '';
    return (
      <Fragment>
        <Card title={title} bordered={false}>
          <AutoTable
            clearList={this.clearTable}
            profile
            isDisplay
            isRefundTable
            needLoad={needLoad}
            relateParamCodes={this.relateParamCodes} // 第一次搜索使用
            searchFlag={this.searchFlag} // 第一次搜索使用
            subsLoading={subsLoading}
            tableSearchFlag={tableSearchFlag}
            changeTableSearchFlag={this.changeTableSearchFlag}
            loadData={this.loadData}
            handleDel={this.handleDel}
            handleAddClick={this.handleAddClick}
            handleEditClick={this.handleEditClick}
            handleProfileClick={this.handleProfileClick}
            handleExportClick={this.handleExportClick}
            setCurrentRowInfo={this.setCurrentRowInfo}
            resetNeedLoad={this.resetNeedLoad}
            selectedTableRow={selectedTableRow}
            autoCompleteSearch={this.autoCompleteSearch}
            {...props}
            metaModel={this.listMetaModel}
          />
        </Card>
        {currentModel === 'edit' ? (
          <AutoForm
            showDialog
            visible
            currentModel={this.state.currentModel}
            metaModel={this.listMetaModel}
            data={data}
            addLoading={editLoading}
            editOnSubmit={this.handleEdit}
            autoCompleteSearch={this.autoCompleteSearch}
            onCancel={this.handleResetDisplay}
            {...props}
          />
        ) : ''}
        {currentModel === 'display' ? (
          <AutoProfile
            visible
            handleCancel={this.handleResetDisplay}
            handleEditClick={this.handleEditClick}
            metaModel={this.listMetaModel}
            {...props}
          />
        ) : ''}
        {currentModel === 'add' ? (
          <AutoForm
            showDialog
            visible
            title={title}
            data={{}}
            addLoading={addLoading}
            autoCompleteSearch={this.autoCompleteSearch}
            currentModel={this.state.currentModel}
            metaModel={this.listMetaModel}
            addOnSubmit={this.handleAdd}
            onCancel={this.handleResetDisplay}
            // 传递给PopupEdit使用
            addDefaultParam={this.addDefaultParam}
            // 当前选中的行信息
            selectedTableRow={selectedTableRow}
            {...props}
          />
        ) : ''}
      </Fragment>
    );
  }
}
