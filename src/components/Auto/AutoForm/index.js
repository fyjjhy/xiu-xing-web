/* eslint-disable guard-for-in,no-restricted-syntax,no-restricted-syntax */
import React, { PureComponent, Fragment } from 'react';
import { Form, Modal } from 'antd';
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
  }

  onExtraValueChange = values => {
    const { extraValues } = this.state;
    this.setState({
      extraValues: { ...extraValues, ...values },
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { addLoading, currentModel, addOnSubmit, editOnSubmit, metaModel } = this.props;
    const { current } = this.formRef;
    const { columnList, funcModelCode } = metaModel;
    if (!addLoading) {
      current.validateFields().then(values => {
        const { extraValues } = this.state;
        const resultValues = {
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
          addOnSubmit(resultValues);
        }
        if (currentModel === 'edit' && editOnSubmit) {
          editOnSubmit(resultValues);
        }
      }).catch(errorInfo => {
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
  }

  // 初始化表单
  initForm = () => {
    const { metaModel, data, currentModel } = this.props;
    const { columnList } = metaModel;
    if (currentModel === 'add') {
      return {};
    }
    if (currentModel === 'edit') {
      const initForm = { ...data };
      const editColumnList = columnList.filter(column => column.editDisplayFlag === 'Y' || column.editable === 'Y');
      const formKeys = Object.keys(initForm);
      if (formKeys.length > 0 && editColumnList.length > 0) {
        for (const key in formKeys) {
          const [editColumn] = editColumnList.filter(column => column.columnCode === formKeys[key]);
          if (editColumn) {
            const {defaultValue, displayType, valueType, columnCode} = editColumn;
            if (displayType === 'D') {
              initForm[columnCode] = [moment(moment().startOf('month'), dateFormat), moment(new Date(), dateFormat)];
            } else if (displayType === 'MS') {
              const initValue = initForm[columnCode];
              initForm[columnCode] = initValue ? initValue.split(',') : [];
            } else if (displayType === 'C') {
              const initValue = initForm[columnCode];
              initForm[columnCode] = initValue ? initValue.split(',') : [];
            } else if (displayType === 'DP') {
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
        return initForm;
      }
    }
    return {};
  }

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
          <Input key={filed} type="hidden" name={filed}/>
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
    return (
      <Fragment>
        {
            columnList.filter(column => {
              const { addTable, editDisplayFlag, editable, columnCode } = column;
              if (editDisplayFlag === 'Y' || editable === 'Y') {
                displayFileds.push(columnCode);
              }
              return currentModel === 'add' ? addTable === 'Y' : (editDisplayFlag === 'Y' || editable === 'Y');
            }).map(column => (
              <AutoFormRow
                {...props}
                formItemLayout={formItemLayout}
                key={column.columnCode}
                column={column}
                form={this.formRef.current}
                // initData={data}
                // record={data}
                // onExtraValueChange={this.onExtraValueChange}
                // initialValue={data[column.columnCode]}
                currentModel={this.props.currentModel}
              />
            ))
              }
        {this.renderHidden(displayFileds)}
      </Fragment>
    );
  }

  renderDialogForm() {
    const { visible, metaModel, title, addLoading, autoFormApi } = this.props;
    return (
      <Modal
        {...(autoFormApi || {})}
        title={title || metaModel.modelName}
        visible={visible}
        maskClosable={false}
        confirmLoading={addLoading}
        onCancel={() => {
                  this.handleCancel();
              }}
        onOk={e => {
                  this.handleSubmit(e);
              }}
      >
        <Form
          initialValues={this.initForm()}
          ref={this.formRef}
          disabled={addLoading}
          style={ { marginTop: 8 } }
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
