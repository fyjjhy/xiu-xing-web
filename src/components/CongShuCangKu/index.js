/* eslint-disable no-restricted-syntax,guard-for-in */
import React, {PureComponent} from 'react';
import { Modal, Card, List, Tag, Tooltip, Typography, Avatar, Divider, Row, Col, Badge, Switch, Form, Select, Input, Button, Skeleton } from 'antd';
import CangKuCongProfile from "../CangKuCongProfile";
import CangKuCongRecord from "../CangKuCongRecord";
import {renderMiaoShu} from "../../utils/utils";

const { Paragraph } = Typography;
const { Option } = Select;

export default class CongShuCangKu extends PureComponent {
  formRef = React.createRef();

  state = {
    currentModel: '',
    currentInfo: {},
    ckLwVisible: false,
    ckLwRecordVisible: false,
    kuCun: '',
  };

  handleCongProfileOnClick = item => {
    this.setState({
      currentModel: 'ckLw',
      currentInfo: item,
      ckLwVisible: true,
    });
  }

  handleCongRecordOnClick = item => {
    this.setState({
      currentModel: 'ckLwRecord',
      ckLwRecordVisible: true,
    });
    const { ckLwRecordClick } = this.props;
    if (ckLwRecordClick) {
      ckLwRecordClick(item);
    }
  };

  handleCongLinkOnClick = (item) => {
    window.open(`/shuList?shuName=${item.congName}`);
  };

  handleCangKuCongProfileOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      ckLwVisible: false,
    });
  }

  handleCangKuCongRecordOnCancel = () => {
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

  handleCongQingLing = kuCun => {
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
        his.congFenLeiName = key;
        his.cong = hisMap[key].filter(data => {
          if (kuCun === 'qingLing') {
            return data.congShuLiang !== '0';
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

  handleTab = (item) => {
    const tabList = [];
    const tabs = [];
    const options = [];
    if (item.congStateName) {
      tabList.push({
        len: item.congStateName.length,
        key: item.congStateName,
        value: item.congStateName,
        label: <Tag color="#91d5ff">{item.congStateName}</Tag>,
      });
    }

    if (item.congShuXing) {
      item.congShuXing.split(' ').forEach(shuXing => {
        tabList.push({
          len: shuXing.length,
          key: shuXing,
          value: shuXing,
          label: <Tag color="#87d068">{shuXing}</Tag>,
        });
      });
    }

    if (item.congShuLiang && item.danWei) {
      tabList.push({
        len: `${item.congShuLiang}${item.danWei}`.length,
        key: `${item.congShuLiang}${item.danWei}`,
        value: `${item.congShuLiang}${item.danWei}`,
        label: <Tag color={item.congShuLiang === '0' ? 'red' : '#87d068'}>{`${item.congShuLiang} ${item.danWei}`}</Tag>,
      });
    }

    if (item.congJingJieName && item.congJingJieName !== '无') {
      tabList.push({
        len: item.congJingJieName.length,
        key: item.congJingJieName,
        value: item.congJingJieName,
        label: <Tag color="#87d068">{item.congJingJieName}</Tag>,
      });
    }

    if (item.congPinJiName && item.congPinJiName !== '无') {
      tabList.push({
        len: item.congPinJiName.length,
        key: item.congPinJiName,
        value: item.congPinJiName,
        label: <Tag color="#87d068">{item.congPinJiName}</Tag>,
      });
    }
    if (tabList && tabList.length > 0) {
      tabList.sort((tab1, tab2) => tab1.len - tab2.len);
      let length = 0;
      if (tabList.length === 1) {
        tabs.push(tabList[0].label);
      } else {
        tabList.forEach(tabInfo => {
          const { len, label, key, value } = tabInfo;
          if (length + len > 12) {
            options.push(<Option disabled key={key} value={value}>{label}</Option>);
          } else {
            tabs.push(label);
          }
          length += len;
        });
      }
    }
    return(
      <span>
        {tabs.map(tab => tab)}
        {options.length > 0 ? (
          <Select
            style={{ width: 24 }}
            // defaultOpen
            defaultActiveFirstOption
            dropdownMatchSelectWidth={150}
            bordered={false}>
            {options.map(option => option)}
          </Select>
        ) : ''}
      </span>
    );
  };

  renderCangKuCongProfile() {
    const {currentModel, ckLwVisible, currentInfo } = this.state;
    if (currentModel === 'ckLw') {
      return (
        <CangKuCongProfile
          visible={ckLwVisible}
          profile={currentInfo}
          ckLwOnCancel={this.handleCangKuCongProfileOnCancel}
        />
      );
    }
    return '';
  }

  renderCangKuCongRecord() {
    const {currentModel, ckLwRecordVisible } = this.state;
    if (currentModel === 'ckLwRecord') {
      return (
        <CangKuCongRecord
          {...this.props}
          visible={ckLwRecordVisible}
          ckLwRecordOnCancel={this.handleCangKuCongRecordOnCancel}
        />
      );
    }
    return '';
  }

  renderDescription = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 10 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderCong = item => {
    const congList = [];
    let cong = [];
    item.cong.forEach((data, index) => {
      const key = index + 1;
      if (index % 3 === 0) {
        cong = [];
        congList.push(cong);
      }
      cong.push({ ...data, index: key });
    });
    return(
      <div>
        <Divider style={{ border: '2px solid blue' }} type="vertical" />
        <Badge
          count={item.cong ? item.cong.length : 0}
          offset={[16, 8]}
          size="small"
          // style={{ backgroundColor: '#52c41a' }}
        >
          <strong>{item.congFenLeiName}</strong>
        </Badge><br/>
        {congList.map((rows, index) => {
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
                    {this.renderCongItem(data)}
                  </Col>
                )}
              )}
            </Row>
          );
        })}
      </div>
    );
  };

  renderCongItem(item) {
    return (
      <List.Item style={{marginBottom: 0}}>
        <Card
          actions={this.renderActions(item)}
          hoverable
          style={{ width: '100%' }}
          bodyStyle={{height: 100}}
        >
          <Card.Meta
            avatar={<Avatar src=""/>}
            title={
              <div>
                <Badge
                  size="small"
                  style={{marginRight: '3px', marginBottom: '3px'}}
                  count={item.index}
                /><span>{item.congName}</span><br/>
                {this.handleTab(item)}
              </div>}
            description={this.renderDescription(item.congMiaoShu)}/>
        </Card>
      </List.Item>
    );
  }

  renderActions(item) {
    const actions = [
      <div onClick={() => this.handleCongProfileOnClick(item)}>详情</div>,
      <div onClick={() => this.handleCongRecordOnClick(item)}>记录</div>,
    ];
    if (item.type === '从属') {
      actions.push(<div onClick={() => this.handleCongLinkOnClick(item)}>链接</div>);
    }
    return actions;
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
    const {
      visible,
      cangKuHis: { his: hisMap },
      loading: { effects: { 'cangKuHis/queryHisList': loading, 'cangKuHis/cangKuCongShuList': congShuLoading } }
    } = this.props;
    const { kuCun } = this.state;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title={
          <div>
            <span>从仓库</span>
            <Switch
              checkedChildren="清零"
              unCheckedChildren="所有"
              onClick={() => this.handleCongQingLing(kuCun === 'qingLing' ? 'suoYou' : 'qingLing')}
            />
          </div>
        }
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkOnCancel}
        width={1000}
        footer={null}
      >
        <Skeleton loading={loading || congShuLoading}>
          {hisMap && Object.keys(hisMap).length > 0 ? this.renderForm() : ''}
          <List>{this.handleDataSource().map(item => (this.renderCong(item)))}</List>
        </Skeleton>
        {this.renderCangKuCongProfile()}
        {this.renderCangKuCongRecord()}
      </Modal>
    );
  }
}
