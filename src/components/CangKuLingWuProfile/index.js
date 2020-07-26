import React, {PureComponent} from 'react';
import { Modal, Descriptions, Card } from 'antd';

export default class CangKuLingWuProfile extends PureComponent {
  handleCkLwOnCancel = () => {
    const { ckLwOnCancel } = this.props;
    if (ckLwOnCancel) {
      ckLwOnCancel();
    }
  }

  render() {
    const { visible, profile } = this.props;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title={profile.lingWuName}
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkLwOnCancel}
        footer={null}
      >
        <Card bordered={false}>
          <Descriptions column={1}>
            <Descriptions.Item label={<strong>灵物状态</strong>}>{profile.lingWuStateName}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物分类</strong>}>{profile.lingWuFenLeiName}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物属性</strong>}>{profile.lingWuShuXing}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物数量</strong>}>{profile.lingWuShuLiang}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物境界</strong>}>{profile.jingJieName}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物品级</strong>}>{profile.pinJiName}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物单位</strong>}>{profile.danWei}</Descriptions.Item>
            <Descriptions.Item label={<strong>灵物描述</strong>}>{profile.lingWuMiaoShu}</Descriptions.Item>
            <Descriptions.Item label={<strong>备注</strong>}>{profile.beiZhu}</Descriptions.Item>
          </Descriptions>
        </Card>
      </Modal>
    );
  }
}
