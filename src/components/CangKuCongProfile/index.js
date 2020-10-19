import React, {PureComponent} from 'react';
import { Modal, Descriptions, Card } from 'antd';

export default class CangKuCongProfile extends PureComponent {
  handleCkCongOnCancel = () => {
    const { ckLwOnCancel } = this.props;
    if (ckLwOnCancel) {
      ckLwOnCancel();
    }
  };

  render() {
    const { visible, profile } = this.props;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title={profile.congName}
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkCongOnCancel}
        footer={null}
      >
        <Card bordered={false}>
          <Descriptions column={1}>
            <Descriptions.Item label={<strong>从状态</strong>}>{profile.congStateName}</Descriptions.Item>
            <Descriptions.Item label={<strong>从分类</strong>}>{profile.congFenLeiName}</Descriptions.Item>
            <Descriptions.Item label={<strong>从属性</strong>}>{profile.congShuXing}</Descriptions.Item>
            <Descriptions.Item label={<strong>从数量</strong>}>{profile.congShuLiang}</Descriptions.Item>
            <Descriptions.Item label={<strong>从境界</strong>}>{profile.congJingJieName}</Descriptions.Item>
            <Descriptions.Item label={<strong>从品级</strong>}>{profile.congPinJiName}</Descriptions.Item>
            <Descriptions.Item label={<strong>从单位</strong>}>{profile.danWei}</Descriptions.Item>
            <Descriptions.Item label={<strong>从描述</strong>}>{profile.congMiaoShu}</Descriptions.Item>
            <Descriptions.Item label={<strong>备注</strong>}>{profile.beiZhu}</Descriptions.Item>
          </Descriptions>
        </Card>
      </Modal>
    );
  }
}
