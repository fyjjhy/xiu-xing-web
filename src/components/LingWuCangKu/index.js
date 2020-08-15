import React, {PureComponent} from 'react';
import { Modal, Card, List, Tag, Tooltip, Typography, Avatar } from 'antd';
import CangKuLingWuProfile from "../CangKuLingWuProfile";
import CangKuLingWuRecord from "../CangKuLingWuRecord";
import {renderMiaoShu} from "../../utils/utils";

const { Paragraph } = Typography;

export default class LingWuCangKu extends PureComponent {

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
  }

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
    const { cangKuHis: { hisList: list } } = this.props;
    const { kuCun } = this.state;
    if (list && list.length > 0) {
      return list.filter(data => {
        if (kuCun === 'qingLing') {
          return data.lingWuShuLiang !== '0';
        }
        return true;
      });
    }
    return [];
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

  render() {
    const { visible } = this.props;
    const { kuCun } = this.state;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title={<div>灵物仓库(<a onClick={() => this.handleLingWuQingLing(kuCun === 'qingLing' ? 'suoYou' : 'qingLing')}>{kuCun === 'qingLing' ? '所有' : '清零'}</a>)</div>}
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkOnCancel}
        width={1000}
        footer={null}
      >
        <List
          style={{ marginLeft: 30, marginRight: 30 }}
          grid={{ gutter: [32, 32], column: 3 }}
          dataSource={this.handleDataSource()}
          renderItem={item => (
            <List.Item style={{ marginBottom: 0 }}>
              <Card
                actions={[
                  <div onClick={() => this.handleLingWuProfileOnClick(item)}>详情</div>,
                  <div onClick={() => this.handleLingWuRecordOnClick(item)}>记录</div>
                ]}
                hoverable
                bodyStyle={{ height: 100 }}
              >
                <Card.Meta
                  avatar={<Avatar src="" />}
                  title={<div>
                  <span>{item.lingWuName}</span><br />
                  {item.lingWuFenLeiName ? (<Tag color="#87d068">{item.lingWuFenLeiName}</Tag>) : ''}
                  {item.lingWuShuXing ? (<Tag color="#87d068">{item.lingWuShuXing}</Tag>) : ''}
                  {item.lingWuStateName ? (<Tag color="#87d068">{item.lingWuStateName}</Tag>) : ''}
                  {item.lingWuShuLiang && item.danWei ? (<Tag color={item.lingWuShuLiang === '0' ? 'red' : '#87d068'}>{`${item.lingWuShuLiang} ${item.danWei}`}</Tag>) : ''}
                  {item.jingJieName && item.jingJieName !== '无' ? (<Tag color="#87d068">{item.jingJieName}</Tag>) : ''}
                  {item.pinJiName && item.pinJiName !== '无' ? (<Tag color="#87d068">{item.pinJiName}</Tag>) : ''}
                </div>} description={this.renderDescription(item.lingWuMiaoShu)} />
              </Card>
            </List.Item>
          )}
        />
        {this.renderCangKuLingWuProfile()}
        {this.renderCangKuLingWuRecord()}
      </Modal>
    );
  }
}
