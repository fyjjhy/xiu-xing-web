/* eslint-disable no-prototype-builtins,react/no-access-state-in-setstate,no-nested-ternary */
import React, { PureComponent, Fragment } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import { Row, Col, Form, Divider, message, Upload, Button, Popconfirm, Table, Pagination } from 'antd';

import { getUrlParameters } from '../../../utils/getUrlParameter';
import { getValueList, getDictData } from '../../../services/loadData';
import { linkButtonGroup } from '../../../utils/linkButtonGroup';
import { formatValues } from '../../../utils/formatValues';

// import { getAccessToken } from '../../../utils/authority';

import StandardTable from '../../StandardTable';

import AutoFormRow from '../AutoFormRow';

import styles from './index.less';
import {getSearchAreas} from "../../../utils/searchArea";

const dateFormat = 'YYYY-MM-DD';
const monthFormat = 'YYYY-MM';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 7 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 17 } },
};

export default class AutoTable extends PureComponent {
  formRef = React.createRef();

  // 构造函数用来处理属性
  constructor(props) {
    super(props);
    // 处理从顶层传递下来的额外配置
    const { expandForm, unExpandTable, searchBtn, customPagination, fixedColumn, customAvatar } = this.props;
    const { columnList, actionList } = props.metaModel;
    this.treeTableFlag = props.metaModel.treeTableFlag;
    this.childColumnCode = props.metaModel.childColumnCode;
    this.parentColumnCode = props.metaModel.parentColumnCode;
    this.columns = columnList.filter(column => {
      if (column.primaryFlag === 'Y') {
        this.key = column.columnCode;
      }

      if (column.searchFlag === 'Y') {
        this.searchColumns.push(column);
      }

      return column.listDisplayFlag === 'Y';
    }).map((column, index) => {
      const columnObj = {
        title: column.columnName,
        dataIndex: column.columnCode,
        width: column.columnWidth || 'auto',
        fixed: (fixedColumn && fixedColumn === column.columnCode) || false,
        ellipsis: column.extStr01 === 'Y' ? (column.renderList && props[column.renderList] ? { showTitle: false } : true) : false,
      };
      // 处理默认值
      if (column.defaultValue) {
        columnObj.render = text => (
          <span>{text || column.defaultValue}</span>
        );
      }
      if (column.sortable === 'Y') {
        columnObj.sorter = true;
      }
      const [valueType, ...rest] = getValueList(column);
      if (!!column.renderList && !!props[column.renderList]) {
        columnObj.render = props[column.renderList];
      } else if (index === 0 && !!props.handleProfileClick && props.profile) {
        // 是列表第一个字段且第一个字段需要查询服务或者字典等才能展示出需要的信息
        if (valueType === 'service' && props.serviceTransferData && props.serviceTransferData.length > 0) {
          const { serviceTransferData } = this.props;
          columnObj.render = (text, record) => {
            const service = this.parseServiceTransferData(text, serviceTransferData);
            if (service) {
              return (
                <a onClick={() => {
                  props.handleProfileClick(record);
                }}
                >{service.label}
                </a>
              );
            }
              return (
                <Fragment>
                  <a onClick={() => {
                    props.handleProfileClick(record);
                  }}
                  >{text}
                  </a>
                </Fragment>
              );

          };
          // 第一列是字典的可以显示详情
        } else if (valueType === 'dict' && rest && rest.length > 0) {
          const { dictList } = this.props;
          const [dictCode] = rest;
          const dictDatas = getDictData(dictCode, dictList);
          if (column.displayType === 'C') {
            columnObj.render = (text, record) => {
              const currentDictData = dictDatas.filter(dictData => {
                const { dataCode } = dictData;
                return text ? text.indexOf(dataCode) > -1 : text;
              });
              if (currentDictData.length > 0) {
                const dataName = [];
                currentDictData.forEach(data => {
                  dataName.push(data.dataName);
                });

                return (
                  <Fragment>
                    <a onClick={() => {
                      props.handleProfileClick(record);
                    }}
                    >{dataName.join(',')}
                    </a>
                  </Fragment>
                );
              }
                return (
                  <Fragment>
                    <a onClick={() => {
                      props.handleProfileClick(record);
                    }}
                    >{text}
                    </a>
                  </Fragment>
                );

            };
          } else {
            columnObj.render = (text, record) => {
              const [currentDictData] = dictDatas.filter(dictData => {
                const { dataCode } = dictData;
                return dataCode === text;
              });
              if (currentDictData) {
                const { dataName } = currentDictData;
                return (
                  <Fragment>
                    <a onClick={() => {
                      props.handleProfileClick(record);
                    }}
                    >{dataName}
                    </a>
                  </Fragment>
                );
              }
                return (
                  <Fragment>
                    <a onClick={() => {
                      props.handleProfileClick(record);
                    }}
                    >{text}
                    </a>
                  </Fragment>
                );

            };
          }
        } else {
          // 是列表第一个字段
          columnObj.render = (text, record) => (
            <a onClick={() => {
              if (props.overWriteDisplayModal) { // 针对TeskOrder而写的一个覆盖方法（覆盖原来的点击显示modal弹窗）
                props.overWriteDisplayModal(record);
              } else {
                props.handleProfileClick(record);
              }
            }}
            >{text}{customAvatar ? customAvatar(record) : ''}
            </a>
          );
        }
      } else if (valueType === 'dict' && rest && rest.length > 0) {
        const { dictList } = this.props;
        const [dictCode] = rest;
        const dictDatas = getDictData(dictCode, dictList);
        if (column.displayType === 'C') {
          columnObj.render = text => {
            const currentDictData = dictDatas.filter(dictData => {
              const { dataCode } = dictData;
              return text ? text.indexOf(dataCode) > -1 : text;
            });
            if (currentDictData.length > 0) {
              const dataName = [];
              currentDictData.forEach(data => {
                dataName.push(data.dataName);
              });

              return <span>{dataName.join(',')}</span>;
            }
              return <span>{text}</span>;

          };
        } else {
          columnObj.render = text => {
            const [currentDictData] = dictDatas.filter(dictData => {
              const { dataCode } = dictData;
              return dataCode === text;
            });
            if (currentDictData) {
              const { dataName } = currentDictData;
              return <span>{dataName}</span>;
            }
              return <span>{text}</span>;

          };
        }
      } else if (valueType === 'service' && props.serviceTransferData && props.serviceTransferData.length > 0) {
        const { serviceTransferData } = this.props;
        columnObj.render = text => {
          const service = this.parseServiceTransferData(text, serviceTransferData);
          if (service) {
            return <span>{service.label}</span>;
          }
            return <span>{text}</span>;

        };
      }
      return columnObj;
    });

    const linkBtns = [];

    actionList.filter(action => !action.extStr05).forEach(action => {
      switch (action.type) {
        case 'L':
          linkBtns.push(action);
          break;
        case 'T':
        case 'G':
          this.toolbars.push(action);
          break;
        default:
          break;
      }
    });

    if (linkBtns.length > 0) {
      const optColumn = {
        title: '操作',
        fixed: this.props.fixed || false,
        width: this.props.columnWidth || 'auto',
      };
      optColumn.dataIndex = this.key;
      optColumn.render = (text, record) => (<span>{this.renderLinkBtn(record, linkBtns)}</span>);
      this.columns.push(optColumn);
    }

    // 默认状态
    this.state = {
      sorter: {}, // 字段排序信息
      currentRowInfo: {},
      expandForm: expandForm || false,
      expandTable: !!unExpandTable !== true,
      selectedRows: [],
      father: null,
      reset: false,
      searchBtnPosition: searchBtn || 'toolbar',
      pager: !customPagination,
    };
  }

  // 第一次加载数据可以加上搜索数据
  // 从StandarPager移动到此，因为有些初始加载需要form中的初始值
  componentDidMount() {
    const { current: { setFieldsValue } } = this.formRef;
    const { searchFlag, relateParamCodes, location } = this.props;
    const urlParamSearch = [];
    if (location) {
      const { search } = location;
      if (search) {
        // url上带的请求参数，设置到form中， 15596
        const urlParam = getUrlParameters(decodeURI(search));
        if (urlParam && Object.keys(urlParam).length > 0) {
          if (this.searchColumns && this.searchColumns.length > 0) {
            // 如果url参数的code在搜索列表中，则把值设置到form中
            Object.keys(urlParam).forEach(key => {
              const inSearch = this.searchColumns.some(column => column.columnCode === key);
              if (inSearch) {
                urlParamSearch.push({ [key]: urlParam[key] });
                setFieldsValue({ [key]: urlParam[key] });
              }
            });
          }
        }
      }
    }
    // 第一次加载页面获取数据，左右模板中，左边第一次加载，右边不加载
    // 等待左边加载完成后，后自动触发加载右边模板的事件。
    // searchFlag === 'Y' 是否搜索
    // relateParamCodes.length === 0 是左模板(主模板)
    if ((searchFlag === 'Y' && relateParamCodes.length === 0) || urlParamSearch.length > 0) {
      const param = this.handleGetAndHandleSearchColumn();
      // 分页的pageSize，pageSize默认是10，可以支持其他的数值
      let pageSize = 0;
      const { showTotal } = this.props;
      // showTotal是个function， 注意注意
      if (showTotal) {
        const { defaultPageSize } = showTotal();
        pageSize = defaultPageSize || 0;
      }
      const fParam = pageSize ? { ...param, pageSize } : param;
      this.loadDynamicColumn(param);
      this.props.loadData(fParam);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { metaModel } = this.props;
    const { datas: { list: afterDatas } } = nextProps[metaModel.funcModelCode];
    const { datas: { list: beforeDatas }, pagination: beforePagination } = this.props[metaModel.funcModelCode];
    const { tableSearchFlag } = nextProps;
    if (this.treeTableFlag === 'Y' && afterDatas !== beforeDatas) {
      if (!tableSearchFlag && !!afterDatas) {
        afterDatas.map(record => {
          // eslint-disable-next-line no-param-reassign
          record.children = [];
          return record;
        });
        if (this.hasSameFather(afterDatas, this.state.father) && !this.state.reset) {
          const fatherNode = this.findParentNode(beforeDatas, this.state.father);
          if (fatherNode && fatherNode.length === 1) {
            this.parentNode = [];
            fatherNode[0].children = [...afterDatas];
            // eslint-disable-next-line no-param-reassign
            nextProps[metaModel.funcModelCode].datas.list = [...beforeDatas];
            /* eslint-disable no-eval,no-param-reassign */
            nextProps[metaModel.funcModelCode].datas.pagination = beforePagination;
          }
        } else {
          this.setState({
            reset: false,
          });
        }
      }
    }
    const { selectedTableRow: beforeSelectedTableRow } = this.props;
    const { list } = nextProps[metaModel.funcModelCode].datas;
    if (list.length === 0) {
      // 后一个状态的数据为空则清空选中行
      if (Object.keys(beforeSelectedTableRow).length > 0) {
        this.handleOnTableClick({});
      }
    } else if (beforeDatas !== afterDatas) {
      // 后一个状态数据不为空并且前后状态的数据不同，则选中第一条数据
      const { noFirstSelect } = this.props;
      // 第一行可以不选中
      if (!noFirstSelect) {
        const [firstData] = list;
        this.handleOnTableClick(firstData);
      }
    }
    const { needLoad: afterNeedLoad } = nextProps;
    const { needLoad: beforeNeedLoad, functionLabel } = this.props;
    if (afterNeedLoad !== beforeNeedLoad && afterNeedLoad) {
      this.props.resetNeedLoad();
      // 刷新需要加上搜索栏的搜索条件，包括默认的搜索条件
      const param = this.handleGetAndHandleSearchColumn();
      // 添加排序字段
      const { sorter } = this.state;
      this.handleSorterColumn(sorter, param);
      this.setState({ selectedRows: [] });
      const { subsComponent, closeSubsComponent, tableSearchFlag: searchFlag } = this.props;
      const { currentRowInfo } = this.state;
      if (subsComponent) {
        const params = { ...currentRowInfo, goodsId: currentRowInfo.id, subquery: true };
        subsComponent.subsLoad(params);
        if (closeSubsComponent) {
          closeSubsComponent(null);
        }
      } else {
        // 处理下form的值，处理日期字段, 工单列表页面刷新需要tableSearchFlag参数
        // const formValue = this.handleSearchColumn(param);
        this.props.loadData({ ...param, tableSearchFlag: searchFlag, ...(functionLabel || {}) });
      }
    }
  }

  inDataList = (id, dataList) => dataList.some(d => d.id === id || (d.children && d.children.length > 0 && this.inDataList(id, d.children)))

  parseServiceTransferData = (text, serviceTransferData) => serviceTransferData.find(service => service.value === text)

  hasSameFather = (datas, parentParam) => datas.filter(data => !!parentParam && data[this.parentColumnCode] === parentParam).length === datas.length

  parentNode = [];

  findParentNode = (datas, parentParam) => {
    if (parentParam) {
      datas.forEach(data => {
        if (data[this.childColumnCode] === parentParam) {
          this.parentNode = [data];
        } else if (data.children.length > 0) {
          this.findParentNode(data.children, parentParam);
        }
      });
    }
    return this.parentNode;
  };

  // headers = { Authorization: `bearer ${getAccessToken()}` };
  // 主键
  key = 'id';

  // 搜索条件
  searchColumns = [];

  // 工具栏按钮
  toolbars = [];

  // 列
  columns = [];

  // treeTableFlag Y or N
  treeTableFlag = null;

  // treeTable relate column code, for example: id and pId
  childColumnCode = null;

  parentColumnCode = null;

  handleExpand = (expanded, record) => {
    if (expanded) {
      this.setState({
        father: record[this.childColumnCode],
        currentRowInfo: record,
      });
      const { publicInfoLoading } = this.props;
      if (publicInfoLoading) {
        publicInfoLoading();
      }
      if (record.children && record.children.length === 0) {
        const params = { [this.parentColumnCode]: record[this.childColumnCode] };
        this.props.loadData(params, expanded);
      }
    }
  }

  // 处理展开和隐藏高级查询框
  handleToggleForm = () => {
    const { metaModel } = this.props;
    const { datas } = this.props[metaModel.funcModelCode];
    this.setState({
      expandForm: !this.state.expandForm,
    }, () => {
      if (datas && datas.list && datas.list.length > 0 && this.state.expandForm === true) {
        this.setState({ expandTable: true });
      }
    });
  }

  // 处理展开和隐藏高级列表框
  handleToggleTable = () => {
    this.setState({
      expandTable: !this.state.expandTable,
    });
  }

  handleExport() {
    const { metaModel: { funcModelCode }, handleExportClick } = this.props;
    const { datas: { pagination } } = this.props[funcModelCode];
    const values = this.handleGetAndHandleSearchColumn();
    this.setState({
      selectedRows: [],
      expandTable: true,
    });
    const param = { ...values, ...pagination, current: 1, tableSearchFlag: true };
    console.log('导出参数', param);
    handleExportClick(param);
  }

  // 查询方法
  handleSearch = e => {
    e.preventDefault();
    const { changeTableSearchFlag, onRef } = this.props;
    const { sorter } = this.state;
    const values = this.handleGetAndHandleSearchColumn();
    this.setState({
      selectedRows: [],
      expandTable: true,
    });
    changeTableSearchFlag(true);
    const params = { ...values, current: 1, tableSearchFlag: true };
    // 处理排序字段
    this.handleSorterColumn(sorter, params);
    // 处理动态字段
    this.loadDynamicColumn(params);
    this.props.loadData(params);
    // 父组件控制子组件的点击事件
    if (onRef) {
      onRef(this);
    }
  }

  // 处理搜索字段
  handleSorterColumn = (sorter, params) => {
    if (Object.keys(sorter).length > 0) {
      params.sortField = sorter.field;
      params.sortOrder = sorter.order;
    }
  }

  // 处理搜索字段
  handleSearchColumn = fieldsValue => {
    let values = { ...fieldsValue };
    values = formatValues(values, this.searchColumns);
    const searchCols = this.searchColumns.filter(search => (search.displayType === 'D' || search.displayType === 'SD') && search.searchFlag === 'Y');
    if (searchCols && searchCols.length > 0) {
      searchCols.forEach(search => {
        const { columnCode, displayType } = search;
        if (displayType === 'D') {
          if (columnCode in values) {
            if (values[columnCode] && values[columnCode].length > 0) {
              // 处理RangePicker的初始值，将值处理为`${columnCode}Start` 和 `${columnCode}End`两个值
              values[`${columnCode}Start`] = values[columnCode][0].format(dateFormat);
              values[`${columnCode}End`] = values[columnCode][1].format(dateFormat);
              values[columnCode] = [values[columnCode][0].format(dateFormat), values[columnCode][1].format(dateFormat)];
            } else {
              values[columnCode] = undefined;
            }
          }
        }
        // 处理自定义表单控件
        if (displayType === 'SD') {
          if (columnCode in fieldsValue) {
            if (fieldsValue[columnCode]) {
              const { timeSelect, timeDatePicker } = { ...fieldsValue[columnCode] };
              values.timeSelect = timeSelect;
              if (timeSelect === 'date') {
                if (timeDatePicker) {
                  values.timeDatePicker = timeDatePicker.format(dateFormat);
                }
              } else if (timeSelect === 'month') {
                if (timeDatePicker) {
                  values.timeDatePicker = timeDatePicker.format(monthFormat);
                }
              } else if (timeSelect === 'year') {
                if (timeDatePicker) {
                  values.timeDatePicker = timeDatePicker;
                }
              }
              delete values[columnCode];
            }
          }
        }
      });
    }
    return values;
  }

  // 重置方法
  handleFormReset = e => {
    e.preventDefault();
    const { current: { resetFields } } = this.formRef;
    const { changeTableSearchFlag } = this.props;
    const { sorter } = this.state;
    resetFields();
    this.setState({
      reset: true,
      selectedRows: [],
      expandTable: true,
    });
    changeTableSearchFlag(false);
    let params = { current: 1, tableSearchFlag: false };
    // 当搜索框存在默认值时
    const values = this.handleGetAndHandleSearchColumn();
    params = { ...params, ...values };
    // 处理排序字段
    this.handleSorterColumn(sorter, params);
    this.loadDynamicColumn(params);
    this.props.loadData(params);
  }

  loadDynamicColumn = params => {
    // 处理动态字段
    const { queryDynamicColumn } = this.props;
    if (queryDynamicColumn) {
      queryDynamicColumn(params);
    }
  }


  // 处理表格分页
  handleTableChange = (pagination, filter, sorter) => {
    this.setState({ sorter });
    // 获取formValues
    const formValues = this.handleGetAndHandleSearchColumn();
    const params = {
      ...pagination,
      ...filter,
      ...formValues,
    };
    // 处理排序字段
    this.handleSorterColumn(sorter, params);
    // 采用自定义查询还是模板查询
    const { topTableOnChange, loadData } = this.props;
    this.loadDynamicColumn(params);
    if (topTableOnChange) {
      topTableOnChange(params);
    } else {
      loadData(params);
    }
  }

  handleSelectRow = records => {
    this.setState({ selectedRows: records }, () => {
      const { onSelectRow } = this.props;
      if (onSelectRow) {
        onSelectRow(records);
      }
    });
  }

  handleOnTableClick = record => {
    const { setCurrentRowInfo, tableSelectType, rowClickTrigger, onSelectRow } = this.props;
    setCurrentRowInfo(record);
    if (rowClickTrigger) {
      const { selectedRows } = this.state;
      const rowIndex = selectedRows.findIndex(row => row.id === record.id);
      if (rowIndex !== -1) {
        this.setState({
          selectedRows: selectedRows.filter((row, index) => index !== rowIndex),
        }, () => {
          if (onSelectRow) {
            onSelectRow(this.state.selectedRows);
          }
        });
      }
      else {
        if (tableSelectType !== 'radio') {
          selectedRows.push(record);
        }
        this.setState({
          selectedRows: tableSelectType === 'radio' ? [record] : selectedRows,
        }, () => {
          if (onSelectRow) {
            onSelectRow(this.state.selectedRows);
          }
        });
      }
    }
  };

  handleRowClassName = record => {
    const { selectedTableRow } = this.props;
    if (selectedTableRow && selectedTableRow.id === record.id) {
      return 'selected';
    }
    return '';
  }

  handleRowOperation = (record, action) => linkButtonGroup(record, action)

  // 导入upload
  handleUpChange = info => {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList); // eslint-disable-line
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败.`);
    }
  };

  handleToolbarOperation = (record, action) => linkButtonGroup(record, action)

  upDownForm(advancedBtn) {
    const up = (<Fragment>收起<UpOutlined /></Fragment>);
    const down = (<Fragment>展开<DownOutlined /></Fragment>);
    advancedBtn = (
      <a
        style={{
          marginLeft: 8,
        }}
        onClick={this.handleToggleForm}
      >
        {this.state.expandForm ? up : down}
      </a>
    );
    return advancedBtn;
  }

  handleCustomTableChange = (page, pageSize) => {
    const pagination = { current: page, pageSize };
    return this.handleTableChange(pagination, {}, {});
  }

  handleTablePagination = (pagination, advancedBtn) => {
    const { current, pageSize, total } = pagination;
    const { expandTable } = this.state;
    return (
      <Fragment>
        <div style={{ display: 'inline-flex' }}>
          {expandTable ? (
            <Fragment>
              <span>
                <Pagination
                  current={current}
                  pageSize={pageSize}
                  size="small"
                  total={total}
                  hideOnSinglePage
                  onChange={this.handleCustomTableChange}
                />
              </span>
              <span>{advancedBtn}</span>
            </Fragment>
          ) : ''}
        </div>
      </Fragment>
    );
  }

  // 获取和处理搜索字段
  handleGetAndHandleSearchColumn = () => {
    const { current: { getFieldsValue } } = this.formRef;
    const { dynamicColumn } = this.props;
    // 获取formValues
    const formValues = this.handleSearchColumn(getFieldsValue());
    if (dynamicColumn) {
      formValues.dynamicColumn = 'Y';
    }
    return formValues;
  }

  upDownTable(advancedBtn) {
    const { metaModel } = this.props;
    const { datas: { pagination } } = this.props[metaModel.funcModelCode];
    const up = (<Fragment>收起<UpOutlined /></Fragment>);
    // const down = (<Fragment>展开<DownOutlined /></Fragment>);
    advancedBtn = (
      <a
        style={{
          marginLeft: 8,
          float: 'middle',
        }}
        onClick={this.handleToggleTable}
      >
        {this.state.expandTable ? up : ''}
      </a>
    );
    return this.handleTablePagination(pagination, advancedBtn);
  }

  // 绘制自定义表格
  radioTable() {
    return (
      <Fragment>
        {this.props.upDown ? (
          <Fragment>
            <div style={{ display: this.state.expandTable ? 'block' : 'none' }}>
              <div>
                {this.renderTable()}
              </div>
              <div className={styles.upDown}>
                {this.upDownTable()}
              </div>
            </div>
          </Fragment>
        ) : this.renderTable()}
      </Fragment>
    );
  }

  renderSearchAreaForm() {
    const { props } = this;
    const { expandForm } = this.state;
    const { rowSearchColumns, md } = getSearchAreas(expandForm, this.searchColumns);
    return (
      <Form layout="inline" ref={this.formRef}>
        { rowSearchColumns.map((rows, index) => {
          const key = index + 1;
          return (
            <Row
              key={key}
              // gutter={[8, 8]}
              style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
            >
              {rows.map(col => (
                <Col key={col.columnCode} span={24 / Number(md)}>
                  <AutoFormRow {...props} formItemLayout={formItemLayout} column={col} searchArea />
                </Col>
              ))}
              {expandForm ? ((key > (rowSearchColumns.length - 1)) ? this.renderSearchBtn() : '') : (key === 1 ? this.renderSearchBtn() : '')}
            </Row>
          );
        })}
      </Form>
    );
  }

  renderSearchForm() {
    const { props } = this;
    const { current: form } = this.formRef;
    const { expandFormItem, md } = props;
    const { expandForm, searchBtnPosition } = this.state;
    const rowSearchColumns = [];
    let columns;
    this.searchColumns.forEach((column, index) => {
      if (index % (md ? 24 / Number(md) : 3) === 0) {
        columns = [];
        rowSearchColumns.push(columns);
      }
      if (index < (md ? 24 / Number(md) : 3) || expandForm) {
        columns.push(column);
      }
    });

    return (
      <Form layout="inline" ref={this.formRef}>
        {expandFormItem ? expandFormItem(form) : ''}
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
              gutter={[8, 8]}
              style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
            >
              {rows.map(col => (
                <Col key={col.columnCode} span={searchBtnPosition === 'search' ? (expandForm ? (md || 8) : mdVal) : (md || 8)}>
                  <AutoFormRow {...props} formItemLayout={formItemLayout} column={col} searchArea />
                </Col>
              ))}
              {searchBtnPosition === 'search' ? (expandForm ? ((key > (rowSearchColumns.length - 1)) ? this.renderSearchBtn() : '') : (key === 1 ? this.renderSearchBtn() : '')) : ''}
            </Row>
          );
        })}
      </Form>
    );
  }

  // 绘制查询按钮
  renderSearchBtn() {
    if (this.searchColumns.length > 0) {
      // 超过三行自动隐藏高级部分
      let advancedBtn = '';
      if (this.searchColumns.length > (this.props.md ? 24 / Number(this.props.md) : 3)) {
        advancedBtn = this.upDownForm(advancedBtn);
      }

      return (
        <span style={{ marginBottom: 12, position: 'absolute', right: '24px' }}>
          <Button type="primary" htmlType="submit" onClick={this.handleSearch}>查询</Button>
          <Button
            style={{
              marginLeft: 8,
            }}
            onClick={this.handleFormReset}
          >重置
          </Button>
          {advancedBtn}
          {this.props.pagination ? this.props.pagination() : ''}
        </span>
      );
    }
    return '';
  }

  // 绘制工具栏
  renderToolbar(searchLen) {
    const { selectedRows } = this.state;
    const { current: form  } = this.formRef;
    const { toolBarBtnWithFormValue, toolbarAfterExpand } = this.props;
    return (
      <Fragment>
        {
          this.toolbars.map(action => {
              let fn = this.props[action.code];
              if (!fn && action.servAction === 'add') {
                fn = this.props.handleAddClick;
              } else if (!fn && action.servAction === 'export') {
                fn = this.props.handleExportClick;
              } else if (action.servAction === 'import') {
                return (
                  <Upload
                    action={action.extStr01}
                    // headers={this.headers}
                    onChange={this.handleUpChange}
                    key={action.code}
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  >
                    <Button
                      style={{ marginRight: 8 }}
                      key={action.code}
                      type={action.displayType || 'default'}
                      icon={action.icon}
                    >
                      {action.name || '导入'}
                    </Button>
                  </Upload>
                );
              }
              if (action.propFlag === 'Y') {
                const propMsg = action.propMsg || `确定要${action.name}吗？`;
                const flag = this.handleToolbarOperation(selectedRows, action);
                if (flag === 'disabled') {
                  return (
                    <Button
                      key={action.code}
                      style={{ marginRight: 8 }}
                      disabled={flag}
                      type={action.displayType || 'default'}
                      icon={action.icon}
                    >
                      {action.name || '按钮'}
                    </Button>
                  );
                }
                  return (
                    <Popconfirm
                      key={action.code}
                      placement="top"
                      title={propMsg}
                      onConfirm={() => {
                        if (fn) {
                          if (action.servAction === 'export') {
                            // 导出则增加查询form的参数
                            this.handleExport();
                          } else if (toolBarBtnWithFormValue) {
                            // toolbar的function需要form的value
                            form.validateFields().then(fieldsValue => {
                              fn(selectedRows, this, fieldsValue);
                            }).catch(errorInfo => {
                              console.log(errorInfo);
                            });
                          } else {
                            // 其他情况把选中的行传入
                            //  判断是否需要上面搜索框的数据
                            fn(selectedRows);
                          }
                          // 操作之后清空选中的行
                          this.handleSelectRow([]);
                        }
                      }}
                      okText="确定"
                      cancelText="取消"
                    >
                      <Button
                        key={action.code}
                        style={{ marginRight: 8 }}
                        disabled={flag}
                        type={action.displayType || 'default'}
                        icon={action.icon}
                      >
                        {action.name || '按钮'}
                      </Button>
                    </Popconfirm>
                  );

              }
                return (
                  <Button
                    style={{ marginRight: 8 }}
                    key={action.code}
                    onClick={() => {
                      if (fn) {
                        if (action.servAction === 'export') {
                          // 导出则增加查询form的参数
                          this.handleExport();
                        } else if (toolBarBtnWithFormValue) {
                          // toolbar的function需要form的value
                          form.validateFields().then(fieldsValue => {
                            fn(selectedRows, this, fieldsValue);
                          }).catch(errorInfo => {
                            console.log(errorInfo);
                          });
                        } else {
                          // 其他情况把选中的行传入
                          fn(selectedRows, this);
                        }
                        this.handleSelectRow([]);
                      }
                    }}
                    type={action.displayType || 'default'}
                    icon={action.icon}
                  >
                    {action.name || '按钮'}
                  </Button>
                );

            }
          )}
        {toolbarAfterExpand ? toolbarAfterExpand() : ''}
        {searchLen % 3 === 0 && searchLen % 4 === 0 ? this.renderSearchBtn() : ''}
      </Fragment>
    );
  }

  // 绘制模板表格
  renderStandardTable() {
    const { columns } = this;
    const { metaModel, dynamicColumn } = this.props;
    const loading = this.props.loading.models[metaModel.funcModelCode];
    const { datas } = this.props[metaModel.funcModelCode];
    const { selectedRows, currentRowInfo } = this.state;
    return (
      <StandardTable
        {...this.props}
        currentRowInfo={currentRowInfo}
        onExpand={this.handleExpand}
        loading={loading}
        selectedRows={selectedRows}
        onSelectRow={this.handleSelectRow}
        data={datas}
        columns={dynamicColumn ? dynamicColumn(columns) : columns}
        onChange={this.handleTableChange}
        rowClassName={this.handleRowClassName}
        onRow={record => ({
            onClick: () => {
              this.handleOnTableClick(record);
            },
          })}
      />
    );
  }

  // 绘制不带复选框的表格
  renderTable() {
    const { columns } = this;
    const { metaModel } = this.props;
    const loading = this.props.loading.models[metaModel.funcModelCode];
    const { datas } = this.props[metaModel.funcModelCode];
    const { list: data, pagination } = datas;
    const paginationProps = {
      hideOnSinglePage: true,
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination };
    const { selectedRows, expandTable, pager } = this.state;

    return expandTable ? (
      <Table
        onExpand={this.handleExpand}
        loading={loading}
        selectedRows={selectedRows}
        rowKey={record => record.id}
        dataSource={data}
        columns={columns}
        pagination={pager ? paginationProps : false}
        onChange={this.handleTableChange}
        rowClassName={this.handleRowClassName}
        onRow={record => ({
            onClick: () => {
              this.handleOnTableClick(record);
            },
          })}
      />
    ) : '';
  }

  // 绘制列表上的点击按钮
  renderLinkBtn(record, linkBtns) {
    // 筛选掉disabled的并且页面上设置了不显示（即有hideDisabledButton属性）的按钮，
    const { hideDisabledButton } = this.props;
    let btns = linkBtns;
    if (hideDisabledButton) {
      // 说明配置了disabled的按钮不显示，
      // 删选掉根据disabled的规则是不可用的按钮
      btns = linkBtns.filter(btn => this.handleRowOperation(record, btn) !== 'disabled');
    }
    // 如果筛选后length是0的话，直接返回
    if (btns.length === 0) {
      return '';
    }
    return btns.map((action, index) => {
      let splitor;
      if (index > 0) {
        splitor = (<Divider type="vertical" />);
      }

      let fn = this.props[action.code];
      if (!fn && action.servAction === 'update') {
        fn = this.props.handleEditClick;
      } else if (!fn && action.servAction === 'delete') {
        fn = this.props.handleDel;
      }
      if (action.propFlag === 'Y') {
        const propMsg = action.propMsg || `确定要${action.name}吗？`;
        return (
          <Fragment key={action.code}>
            {splitor}
            <Popconfirm
              placement="top"
              title={propMsg}
              onConfirm={() => {
                if (fn) {
                  fn(record);
                }
              }}
              okText="确定"
              cancelText="取消"
            >
              <a disabled={this.handleRowOperation(record, action)}>{action.name || '操作'}</a>
            </Popconfirm>
          </Fragment>
        );
      }
        return (
          <Fragment key={action.code}>
            {splitor}
            <a disabled={this.handleRowOperation(record, action)} onClick={() => (fn && fn(record, this))}>{action.name || '操作'}</a>
          </Fragment>
        );

    });
  }

  render() {
    const searchLen = this.searchColumns ? this.searchColumns.length : 0;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          {searchLen > 0 && !(searchLen % 3 === 0 && searchLen % 4 === 0) ? this.renderSearchAreaForm() : this.renderSearchForm()}
        </div>
        <div style={{ display: (this.toolbars.length === 0 && this.state.searchBtnPosition === 'search') ? 'none' : 'block' }} className={styles.tableListOperator}>
          {this.renderToolbar(searchLen)}
        </div>
        {this.props.radioTable ? this.radioTable() : this.renderStandardTable()}
      </div>
    );
  }
}
