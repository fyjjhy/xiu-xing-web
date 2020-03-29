import React, { PureComponent, Fragment } from 'react';

import { Form, Button, Modal, Input } from 'antd';

import AutoFormRow from '../Auto/AutoFormRow';
// import styles from './index.less';

// const { TextArea } = Input;
const { Item: FormItem } = Form;
// const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 7,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
    md: {
      span: 10,
    },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 7,
    },
  },
};

class StandardForm extends PureComponent {
  formRef = React.createRef();

  state = {
    loading: false,
  }

  // 表单提交
  handleSubmit(e) {
    e.preventDefault();
    const { current: { validateFields } } = this.formRef;
    const { onSubmit } = this.props;
    validateFields()
      .then(values => {
        this.setState({ loading: true });
        if (onSubmit) {
          onSubmit(values);
        }
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
  }

  handleCancel() {
    const { onCancel } = this.props;
    const { current: { resetFields } } = this.formRef;
    resetFields();
    if (onCancel) {
      onCancel();
    }
  }

  renderButton() {
    const { loading } = this.state;
    return (
      <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
        <Button type="primary" htmlType="submit" loading={loading} onClick={e => { this.handleSubmit(e); }}>提交</Button>
        <Button loading={loading} style={{ marginLeft: 8 }} onClick={() => { this.handleCancel(); }}>取消</Button>
      </FormItem>
    );
  }

  renderHidden(displayFields) {
    const { initialValues } = this.props;
    if (initialValues) {
      const hiddenFields = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const field in initialValues) {
        if (!displayFields.includes(field)) {
          hiddenFields.push(field);
        }
      }
      return hiddenFields.map(filed => (
        <FormItem key={filed} name={filed} noStyle>
          <Input key={filed} type="hidden" name={filed}/>
        </FormItem>
      ));
    }
    return '';
  }

  renderFormItem() {
    const { formColumnList, currentModel } = this.props;
    const displayFileds = [];
    return (
      <Fragment>
        {
          formColumnList.filter(column => {
            const { addField, editField, columnCode } = column;
            if (editField === 'Y') {
              displayFileds.push(columnCode);
            }
            return currentModel === 'add' ? addField === 'Y' : editField === 'Y';
          }).map(column => (
            <AutoFormRow
              // {...props}
              {...formItemLayout}
              key={column.columnCode}
              column={column}
              form={this.formRef.current}
              // initData={data}
              // record={data}
              // onExtraValueChange={this.onExtraValueChange}
              // initialValue={data[column.columnCode]}
              currentModel={currentModel}
            />
          ))
        }
        {this.renderHidden(displayFileds)}
        {/* <FormItem name="id" noStyle> */}
          {/* <Input type="hidden" name="id" /> */}
        {/* </FormItem> */}

        {/* <FormItem {...formItemLayout} label="符箓名称" name="fuLuName" rules={[{ required: true, message: '请输入符箓名称' }]}> */}
          {/* <Input placeholder="请输入符箓名称" /> */}
        {/* </FormItem> */}

        {/* <FormItem {...formItemLayout} label="小说" name="xiaoShuoId"> */}
          {/* <Select placeholder="请选择小说"> */}
            {/* {xiaoShuoList && xiaoShuoList.length > 0 ? xiaoShuoList.map(xiaoShuo => { */}
              {/* const { dataCode, dataName } = xiaoShuo; */}
              {/* return <Option key={dataCode} value={dataCode}>{dataName}</Option> */}
            {/* }) : ''} */}
          {/* </Select> */}
        {/* </FormItem> */}

        {/* <FormItem {...formItemLayout} label={<span>符箓描述<em className={styles.optional}>（选填）</em></span>} name="fuLuMiaoShu" rules={[{ message: '请输入符箓描述信息' }]}> */}
          {/* <TextArea style={{ minHeight: 32 }} placeholder="请输入符箓描述信息" rows={4} /> */}
        {/* </FormItem> */}
      </Fragment>
    );
  }

  renderForm() {
    const { initialValues } = this.props;
    return (
      <Form
        hideRequiredMark
        style={{ marginTop: 8 }}
        ref={this.formRef}
        initialValues={initialValues}
      >
        {this.renderFormItem()}
        {this.renderButton()}
      </Form>
    );
  }

  renderDialogForm() {
    const { visible, initialValues, title } = this.props;
    const { loading } = this.state;
    return (
      <Modal
        title={title}
        maskClosable={false}
        visible={visible}
        confirmLoading={loading}
        onCancel={() => { this.handleCancel(); }}
        onOk={e => { this.handleSubmit(e); }}
      >
        <Form
          ref={this.formRef}
          hideRequiredMark
          style={{ marginTop: 8 }}
          initialValues={initialValues}
        >
          {this.renderFormItem()}
        </Form>
      </Modal>
    );
  }

  render() {
    return this.props.showDialog ? this.renderDialogForm() : this.renderForm();
  }
}

export default StandardForm;
