import React, {PureComponent} from 'react';
import { Modal, Select, Skeleton, Form, Button, Radio, Input, List, Card } from 'antd';

const { Option } = Select;

export default class ShengChengAdd extends PureComponent {
  formRef = React.createRef();

  state = {
    configItem: null,
  };

  // 确定
  handleShengChengAddOnOk = () => {
    this.handleShengChengAddOnCancel();
  };

  // 取消
  handleShengChengAddOnCancel = () => {
    const { shengChengAddOnCancel } = this.props;
    if (shengChengAddOnCancel) {
      shengChengAddOnCancel();
    }
  };

  handleButton = () => {
    const { current } = this.formRef;
    if (current) {
      const { validateFields } = current;
      validateFields().then(values => {
        const { generate } = this.props;
        if (generate) {
          generate(values);
        }
      }).catch(errorInfo => {
        console.log(errorInfo);
      });
    }
  };

  handleCardDel = (item) => {
    const { filterGenerateList } = this.props;
    if (filterGenerateList) {
      filterGenerateList(item);
    }
  };

  handleConfigItemRadio = (e) => {
    const { value } = e.target;
    this.setState({ configItem: value }, () => {
      if (value === 'Y') {
        const { current } = this.formRef;
        if (current) {
          const {setFieldsValue} = current;
          setFieldsValue({ keyword: null });
        }
      }
    });
  };

  render() {
    const { visible, shengCheng: { generateList }, loading: { effects: { 'shengCheng/generateList': shengChengLoading } } } = this.props;
    const { configItem } = this.state;
    return (
      <Modal
        okButtonProps={{ disabled: !(generateList && generateList.length > 0) }}
        // bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title="生成新增"
        width={1300}
        visible={visible}
        onOk={this.handleShengChengAddOnOk}
        onCancel={this.handleShengChengAddOnCancel}
      >
        <Form
          labelCol={{ xs: { span: 24 }, sm: { span: 2 } }}
          wrapperCol={{ xs: { span: 24 }, sm: { span: 12 }, md: { span: 21 } }}
          layout="horizontal"
          ref={this.formRef}
        >
          <Form.Item required label="生成对象" name="shengChengName">
            <Select showSearch optionFilterProp="title" allowClear placeholder="请选择生成对象">
              <Option value="renMing_xing">人名 - 姓</Option>
              <Option value="renMing_ming">人名 - 名</Option>
              <Option value="diMing">地名</Option>
              <Option value="niaoMing">鸟名</Option>
            </Select>
          </Form.Item>
          <Form.Item label="配置项" name="configItem">
            <Radio.Group onChange={this.handleConfigItemRadio}>
              <Radio.Button value="Y">使用</Radio.Button>
              <Radio.Button value="N">不使用</Radio.Button>
            </Radio.Group>
          </Form.Item>
          {configItem === 'N' ? (
            <Form.Item label="关键字" name="keyword">
              <Input placeholder="请输入关键字，多个关键字用分号隔开" />
            </Form.Item>
          ) : ''}
          <Form.Item label="字级" name="ziJi">
            <Select mode="multiple" allowClear placeholder="请选择字级">
              <Option value="一级字">一级字</Option>
              <Option value="二级字">二级字</Option>
              <Option value="三级字">三级字</Option>
            </Select>
          </Form.Item>
          <Form.Item label="位置" name="weiZhi">
            <Radio.Group>
              <Radio.Button value="shou">首</Radio.Button>
              <Radio.Button value="zhong">中</Radio.Button>
              <Radio.Button value="wei">尾</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="长度" name="changDu">
            <Input placeholder="请输入长度限制" />
          </Form.Item>
          <Form.Item label="数量" name="shuLiang">
            <Input placeholder="请输入生成对象的数量" />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button onClick={() => this.handleButton()}>点击生成</Button>
          </Form.Item>
        </Form>
        <Skeleton loading={false}>
          <List
            loading={shengChengLoading}
            style={{ marginLeft: 30, marginRight: 30 }}
            grid={{ gutter: [6, 6], column: 6 }}
            dataSource={generateList || []}
            renderItem={item => (
              <List.Item style={{ marginBottom: 0 }}>
                <Card
                  // bordered={false}
                  hoverable
                  actions={[
                    <a onClick={() => this.handleCardDel(item)}>删除</a>
                  ]}
                  bodyStyle={{ textAlign: 'center' }}
                  headStyle={{ backgroundColor: '#f9fafc', textAlign: 'center' }}
                  // title={item}
                >
                  {item}
                </Card>
              </List.Item>
            )}
          />
        </Skeleton>
      </Modal>
    );
  }
}
