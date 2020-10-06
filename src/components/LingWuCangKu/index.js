/* eslint-disable no-restricted-syntax,guard-for-in */
import React, {PureComponent} from 'react';
import { Modal, Card, List, Tag, Tooltip, Typography, Avatar, Divider, Row, Col, Badge, Switch, Form, Select, Input, Button } from 'antd';
import CangKuLingWuProfile from "../CangKuLingWuProfile";
import CangKuLingWuRecord from "../CangKuLingWuRecord";
import {renderMiaoShu} from "../../utils/utils";

const { Paragraph } = Typography;
const { Option } = Select;

export default class LingWuCangKu extends PureComponent {
  formRef = React.createRef();

  state = {
    currentModel: '',
    currentInfo: {},
    ckLwVisible: false,
    ckLwRecordVisible: false,
    kuCun: '',
  };

  handleLingWuProfileOnClick = item => {
    this.setState({
      currentModel: 'ckLw',
      currentInfo: item,
      ckLwVisible: true,
    });
  }

  handleLingWuRecordOnClick = item => {
    this.setState({
      currentModel: 'ckLwRecord',
      ckLwRecordVisible: true,
    });
    const { ckLwRecordClick } = this.props;
    if (ckLwRecordClick) {
      ckLwRecordClick(item);
    }
  };

  handleCangKuLingWuProfileOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckLwVisible: false,
    });
  }

  handleCangKuLingWuRecordOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckLwRecordVisible: false,
    });
  }

  handleCkOnCancel = () => {
    const { ckOnCancel } = this.props;
    if (ckOnCancel) {
      ckOnCancel();
    }
  }

  handleLingWuQingLing = kuCun => {
    this.setState({
      kuCun,
    });
  };

  handleDataSource = () => {
    const { cangKuHis: { hisList: hisMap } } = this.props;
    const { kuCun } = this.state;
    if (hisMap && Object.keys(hisMap).length > 0) {
      const result = [];
      // 对值进行排序
      Object.keys(hisMap).sort().forEach(key => {
        const his = {};
        his.lingWuFenLeiName = key;
        his.lingWu = hisMap[key].filter(data => {
          if (kuCun === 'qingLing') {
            return data.lingWuShuLiang !== '0';
          }
          return true;
        });
        result.push(his);
      });
      return result;
    }
    return [];
  };

  handleFormOnFinish = (values) => {
    const { ckSearch } = this.props;
    if (ckSearch) {
      ckSearch(values);
    }
  };

  handleFormReset = (e) => {
    e.preventDefault();
    const { current } = this.formRef;
    if (current) {
      const { resetFields } = current;
      if (resetFields) {
        resetFields();
      }
      const { ckSearch } = this.props;
      if (ckSearch) {
        ckSearch({});
      }
    }
  };

  renderCangKuLingWuProfile() {
    const {currentModel, ckLwVisible, currentInfo } = this.state;
    if (currentModel === 'ckLw') {
      return (
        <CangKuLingWuProfile
          visible={ckLwVisible}
          profile={currentInfo}
          ckLwOnCancel={this.handleCangKuLingWuProfileOnCancel}
        />
      );
    }
    return '';
  }

  renderCangKuLingWuRecord() {
    const {currentModel, ckLwRecordVisible } = this.state;
    if (currentModel === 'ckLwRecord') {
      return (
        <CangKuLingWuRecord
          {...this.props}
          visible={ckLwRecordVisible}
          ckLwRecordOnCancel={this.handleCangKuLingWuRecordOnCancel}
        />
      );
    }
    return '';
  }

  renderDescription = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 10 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderLingWu = item => {
    const lingWuList = [];
    let lingWu = [];
    item.lingWu.forEach((data, index) => {
      if (index % 3 === 0) {
        lingWu = [];
        lingWuList.push(lingWu);
      }
      lingWu.push(data);
    });
    return(
      <div>
        <Divider style={{ border: '2px solid blue' }} type="vertical" />
        <Badge
          count={item.lingWu ? item.lingWu.length : 0}
          offset={[16, 8]}
          size="small"
          // style={{ backgroundColor: '#52c41a' }}
        >
          <strong>{item.lingWuFenLeiName}</strong>
        </Badge><br/>
        {lingWuList.map((rows, index) => {
          const key1 = index + 1;
          return (
            <Row
              key={key1}
              gutter={[8, 8]}
              style={{ width: '100%', marginLeft: '0px', marginRight: '0px' }}
            >
              {rows.map((data, rowIndex) => {
                const key = rowIndex + 1;
                const key2 = `${key1}${key}`;
                return(
                  <Col key={key2} span={8}>
                    {this.renderLingWuItem(data)}
                  </Col>
                )}
              )}
            </Row>
          );
        })}
      </div>
    );
  };

  renderLingWuItem(item) {
    return <List.Item style={{marginBottom: 0}}>
      <Card
        actions={[
          <div onClick={() => this.handleLingWuProfileOnClick(item)}>详情</div>,
          <div onClick={() => this.handleLingWuRecordOnClick(item)}>记录</div>
        ]}
        hoverable
        style={{ width: '100%' }}
        bodyStyle={{height: 100}}
      >
        <Card.Meta
          avatar={<Avatar src=""/>}
          title={<div>
            <span>{item.lingWuName}</span><br/>
            {/* {item.lingWuFenLeiName ? (<Tag color="#87d068">{item.lingWuFenLeiName}</Tag>) : ''} */}
            {item.lingWuStateName ? (<Tag color="#91d5ff">{item.lingWuStateName}</Tag>) : ''}
            {item.lingWuShuXing ? item.lingWuShuXing.split(' ').map(shuXing => <Tag color="#87d068">{shuXing}</Tag>) : ''}
            {item.lingWuShuLiang && item.danWei ? (<Tag
              color={item.lingWuShuLiang === '0' ? 'red' : '#87d068'}>{`${item.lingWuShuLiang} ${item.danWei}`}</Tag>) : ''}
            {item.jingJieName && item.jingJieName !== '无' ? (<Tag color="#87d068">{item.jingJieName}</Tag>) : ''}
            {item.pinJiName && item.pinJiName !== '无' ? (<Tag color="#87d068">{item.pinJiName}</Tag>) : ''}
          </div>} description={this.renderDescription(item.lingWuMiaoShu)}/>
      </Card>
    </List.Item>;
  }

  renderCongFenLeiSelectOption() {
    const { cangKuHis: { his: hisMap } } = this.props;
    if (hisMap && Object.keys(hisMap).length > 0) {
      // 对值进行排序
      return Object.keys(hisMap).sort().map((data, index) => {
        const key = index + 1;
        return(
          <Option key={key} value={data} title={data}>{data}</Option>
        );
      });
    }
    return '';
  }

  renderForm() {
    return(
      <Form ref={this.formRef} name="horizontal_login" layout="inline" onFinish={this.handleFormOnFinish}>
        <Row style={{ width: '100%', marginTop: '12px', marginBottom: '12px' }}>
          <Col span={8} style={{ paddingLeft: '8px' }}>
            <Form.Item name="congFenLei" label="从分类">
              <Select allowClear showSearch optionFilterProp="title" placeholder="请选择从分类">
                {this.renderCongFenLeiSelectOption()}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="congName" label="从名称">
              <Input placeholder="请输入从名称" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: '8px' }} onClick={this.handleFormReset}>重置</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const { visible, cangKuHis: { his: hisMap } } = this.props;
    const { kuCun } = this.state;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title={
          <div>
            <span>灵物仓库</span>
            <Switch
              checkedChildren="清零"
              unCheckedChildren="所有"
              onClick={() => this.handleLingWuQingLing(kuCun === 'qingLing' ? 'suoYou' : 'qingLing')}
            />
          </div>
        }
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkOnCancel}
        width={1000}
        footer={null}
      >
        {hisMap && Object.keys(hisMap).length > 0 ? this.renderForm() : ''}
        <List>{this.handleDataSource().map(item => (this.renderLingWu(item)))}</List>
        {this.renderCangKuLingWuProfile()}
        {this.renderCangKuLingWuRecord()}
      </Modal>
    );
  }
}
