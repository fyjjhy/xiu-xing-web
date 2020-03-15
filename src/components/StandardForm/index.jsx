import React, { PureComponent, Fragment } from 'react';

import { Form, Select, Button, Modal, Input } from 'antd';

import styles from './index.less';

const { TextArea } = Input;
const { Item: FormItem } = Form;
const { Option } = Select;

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
        <Button type="primary" htmlType="submit" loading={loading} onClick={(e) => { this.handleSubmit(e); }}>提交</Button>
        <Button loading={loading} style={{ marginLeft: 8 }} onClick={() => { this.handleCancel(); }}>取消</Button>
      </FormItem>
    );
  }

  renderFormItem() {
    const { xiaoShuoList } = this.props;
    return (
      <Fragment>
        <FormItem name="id" noStyle>
          <Input type="hidden" name="id" />
        </FormItem>

        <FormItem {...formItemLayout} label="符箓名称" name="fuLuName" rules={[{ required: true, message: '请输入符箓名称' }]}>
          <Input placeholder="请输入符箓名称" />
        </FormItem>

        <FormItem {...formItemLayout} label="小说" name="xiaoShuoId">
          <Select placeholder="请选择小说">
            {xiaoShuoList && xiaoShuoList.length > 0 ? xiaoShuoList.map(xiaoShuo => {
              const { dataCode, dataName } = xiaoShuo;
              return <Option key={dataCode} value={dataCode}>{dataName}</Option>
            }) : ''}
          </Select>
        </FormItem>

        <FormItem {...formItemLayout} label={<span>符箓描述<em className={styles.optional}>（选填）</em></span>} name="fuLuMiaoShu" rules={[{ message: '请输入符箓描述信息' }]}>
          <TextArea style={{ minHeight: 32 }} placeholder="请输入符箓描述信息" rows={4} />
        </FormItem>
      </Fragment>
    );
  }

  renderForm() {
    const { data } = this.props;
    const profile = data || {};
    return (
      <Form
        hideRequiredMark
        style={{ marginTop: 8 }}
        ref={this.formRef}
        initialValues={{
          fuLuName: profile.fuLuName,
          fuLuCode: profile.fuLuCode,
          xiaoShuoId: profile.xiaoShuoId,
          fuLuMiaoShu: profile.fuLuMiaoShu,
          id: profile.id
        }}
      >
        {this.renderFormItem()}
        {this.renderButton()}
      </Form>
    );
  }

  renderDialogForm() {
    const { visible, data } = this.props;
    const { loading } = this.state;
    const profile = data || {};
    return (
      <Modal
        title="新增符箓"
        maskClosable={false}
        visible={visible}
        confirmLoading={loading}
        onCancel={() => { this.handleCancel(); }}
        onOk={(e) => { this.handleSubmit(e); }}
      >
        <Form
          ref={this.formRef}
          hideRequiredMark
          style={{ marginTop: 8 }}
          initialValues={{
            fuLuName: profile.fuLuName,
            fuLuCode: profile.fuLuCode,
            xiaoShuoId: profile.xiaoShuoId,
            fuLuMiaoShu: profile.fuLuMiaoShu,
            id: profile.id
          }}
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
