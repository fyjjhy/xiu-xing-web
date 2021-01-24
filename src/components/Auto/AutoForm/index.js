/* eslint-disable guard-for-in,no-restricted-syntax,no-restricted-syntax,no-nested-ternary */
import React, { PureComponent, Fragment } from 'react';
import { Form, Modal, Row, Col } from 'antd';
import moment from 'moment';
import AutoFormRow from '../AutoFormRow';

import { Input } from '../../InputArea';

const { Item: FormItem } = Form;
const dateFormat = 'YYYY-MM-DD';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 7 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 10 } },
};

const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

export default class AutoForm extends PureComponent {
  formRef = React.createRef();

  state = {
    extraValues: {},
  };

  onExtraValueChange = values => {
    const { extraValues } = this.state;
    this.setState({
      extraValues: { ...extraValues, ...values },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      addLoading,
      currentModel,
      addOnSubmit,
      editOnSubmit,
      metaModel,
      xiaoShuoId,
    } = this.props;
    const { current } = this.formRef;
    const { columnList, funcModelCode } = metaModel;
    if (!addLoading) {
      current
        .validateFields()
        .then(values => {
          const { extraValues } = this.state;
          const resultValues = {
            xiaoShuoId,
            ...values,
            funcModelCode,
            ...extraValues,
          };
          columnList.forEach(column => {
            if (column.displayType === 'DP') {
              const dp = values[column.columnCode];
              if (dp) {
                resultValues[column.columnCode] = dp.format(dateTimeFormat);
              }
            } else if (column.displayType === 'DTP') {
              // 年月日时分秒
              const dtp = values[column.columnCode];
              if (dtp) {
                resultValues[column.columnCode] = dtp.format(dateTimeFormat);
              }
            } else if (column.displayType === 'MS') {
              const ms = values[column.columnCode];
              if (ms && ms.length > 0) {
                resultValues[column.columnCode] = ms.join(',');
              } else {
                resultValues[column.columnCode] = null;
              }
            }
          });
          if (currentModel === 'add' && addOnSubmit) {
            addOnSubmit(resultValues, currentModel);
          }
          if (currentModel === 'edit' && editOnSubmit) {
            editOnSubmit(resultValues, currentModel);
          }
        })
        .catch(errorInfo => {
          console.log(errorInfo);
        });
    }
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    const { current } = this.formRef;
    current.resetFields();
    if (onCancel) {
      onCancel();
    }
  };

  handleFormItemLayout = grid => {
    if (grid === 24) {
      return {
        labelCol: { xs: { span: 24 }, sm: { span: 3 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 21 } },
      };
    }
    if (grid === 12) {
      return {
        labelCol: { xs: { span: 24 }, sm: { span: 6 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 18 } },
      };
    }
    if (grid === 8) {
      return {
        labelCol: { xs: { span: 24 }, sm: { span: 9 } },
        wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 15 } },
      };
    }
    return { ...formItemLayout };
  };

  // 初始化表单
  initForm = () => {
    const { metaModel, data, currentModel, selectedTableRow } = this.props;
    const { columnList } = metaModel;
    const initForm =
      currentModel === 'add' ? { ...selectedTableRow } : currentModel === 'edit' ? { ...data } : {};
    const editColumnList = columnList.filter(
      column => column.editDisplayFlag === 'Y' || column.editable === 'Y',
    );
    const formKeys = Object.keys(initForm);
    if (formKeys.length > 0 && editColumnList.length > 0) {
      for (const key in formKeys) {
        const [editColumn] = editColumnList.filter(column => column.columnCode === formKeys[key]);
        if (editColumn) {
          const { defaultValue, displayType, valueType, columnCode } = editColumn;
          if (displayType === 'D') {
            initForm[columnCode] = [
              moment(moment().startOf('month'), dateFormat),
              moment(new Date(), dateFormat),
            ];
          } else if (displayType === 'MS') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue ? initValue.split(',') : [];
          } else if (displayType === 'C') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue ? initValue.split(',') : [];
          } else if (displayType === 'DP') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue ? moment(new Date(initValue), dateTimeFormat) : null;
          } else if (displayType === 'DTP') {
            // 年月日时分秒
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue ? moment(new Date(initValue), dateTimeFormat) : null;
          } else if (displayType === 'S') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue || defaultValue;
          } else if (displayType === 'TS') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue || defaultValue;
          } else if (valueType === 'N') {
            const initValue = initForm[columnCode];
            initForm[columnCode] = initValue === undefined ? '' : `${initValue}`;
          }
          // if (displayType === 'SD') {
          //   return initialValue || {timeSelect: defaultValue, timeDatePicker: moment(new Date(), monthFormat)};
          // }
        }
      }
    }
    return initForm;
  };

  renderHidden(displayFileds) {
    const { data } = this.props;
    if (data) {
      const hiddenFileds = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const field in data) {
        if (displayFileds.indexOf(field) === -1) {
          hiddenFileds.push(field);
        }
      }
      return hiddenFileds.map(filed => (
        <FormItem key={filed} name={filed} noStyle>
          <Input key={filed} type="hidden" name={filed} />
        </FormItem>
      ));
    }
    return '';
  }

  renderFormItem() {
    const { props } = this;
    const { metaModel, currentModel } = props;
    // const data = props.data || {};
    const { columnList } = metaModel;
    const displayFileds = [];
    const rowCols = [];
    const defaultCols = [];
    let cols = [];
    let grid = 0;
    columnList
      .filter(column => {
        const { addTable, editDisplayFlag, editable, columnCode } = column;
        if (editDisplayFlag === 'Y' || editable === 'Y') {
          displayFileds.push(columnCode);
        }
        return currentModel === 'add'
          ? addTable === 'Y'
          : editDisplayFlag === 'Y' || editable === 'Y';
      })
      .forEach(column => {
        // 如果extStr02=24，则独占一行；
        // 如果和值>24，则进入下一行
        if (column.hasOwnProperty('extStr02')) {
          grid += Number(column.extStr02);
          if (grid < 24) {
            cols.push(column);
          } else if (grid === 24) {
            cols.push(column);
            rowCols.push(cols);
            grid = 0;
            cols = [];
          } else {
            rowCols.push(cols);
            grid = 0;
            cols = [];
            cols.push(column);
          }
        } else {
          defaultCols.push(column);
        }
      });
    return (
      <Fragment>
        {rowCols && rowCols.length > 0
          ? rowCols.map((rows, index) => {
              const key = index + 1;
              return (
                <Row
                  key={key}
                  // gutter={[8, 8]}
                  style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
                >
                  {rows.map(column => (
                    <Col key={column.columnCode} span={Number(column.extStr02)}>
                      <AutoFormRow
                        {...props}
                        formItemLayout={this.handleFormItemLayout(Number(column.extStr02))}
                        key={column.columnCode}
                        column={column}
                        form={this.formRef.current}
                        // initData={data}
                        // record={data}
                        // onExtraValueChange={this.onExtraValueChange}
                        // initialValue={data[column.columnCode]}
                        currentModel={this.props.currentModel}
                      />
                    </Col>
                  ))}
                </Row>
              );
            })
          : columnList
              .filter(column => {
                const { addTable, editDisplayFlag, editable, columnCode } = column;
                if (editDisplayFlag === 'Y' || editable === 'Y') {
                  displayFileds.push(columnCode);
                }
                return currentModel === 'add'
                  ? addTable === 'Y'
                  : editDisplayFlag === 'Y' || editable === 'Y';
              })
              .map(column => (
                <AutoFormRow
                  {...props}
                  key={column.columnCode}
                  column={column}
                  form={this.formRef.current}
                  // initData={data}
                  // record={data}
                  // onExtraValueChange={this.onExtraValueChange}
                  // initialValue={data[column.columnCode]}
                  currentModel={this.props.currentModel}
                />
              ))}
        {this.renderHidden(displayFileds)}
      </Fragment>
    );
  }

  // 渲染新增或编辑的title
  renderFormTitle = () => {
    const { metaModel, title, currentModel, fuGaiFormTitle } = this.props;
    const formTitle = `${title || metaModel.modelName}${
      currentModel === 'add' ? '新增' : currentModel === 'edit' ? '编辑' : ''
    }`;
    if (fuGaiFormTitle) {
      const xiaoShuoName = fuGaiFormTitle();
      return (
        <span>
          {formTitle}
          <span style={{ color: 'blue' }}>{xiaoShuoName ? `（${xiaoShuoName}）` : ''}</span>
        </span>
      );
    }
    return formTitle;
  };

  renderDialogForm() {
    const { visible, addLoading, autoApi } = this.props;
    return (
      <Modal
        {...(autoApi && autoApi.modal ? autoApi.modal : {})}
        title={this.renderFormTitle()}
        visible={visible}
        maskClosable={false}
        confirmLoading={addLoading}
        onCancel={() => {
          this.handleCancel();
        }}
        onOk={e => {
          this.handleSubmit(e);
        }}
        cancelText="取消"
        okText="确定"
      >
        <Form
          name="control-ref"
          {...formItemLayout}
          initialValues={this.initForm()}
          ref={this.formRef}
          disabled={addLoading}
          style={{ marginTop: 8 }}
          {...(autoApi && autoApi.form ? autoApi.form : {})}
        >
          {this.renderFormItem()}
        </Form>
      </Modal>
    );
  }

  render() {
    return this.renderDialogForm();
  }
}
