import React, {PureComponent} from 'react';
import {Modal, Card, Timeline} from 'antd';

export default class CangKuLingWuRecord extends PureComponent {
  handleCkLwRecordOnCancel = () => {
    const {ckLwRecordOnCancel} = this.props;
    if (ckLwRecordOnCancel) {
      ckLwRecordOnCancel();
    }
  }

  renderLingWu = data => (
    <div>
      <strong>灵物：</strong>{data.lingWuFullName}
      <br/>
      <strong>描述：</strong>{data.lingWuMiaoShu || ''}
      <br/>
      <strong>备注：</strong>{data.beiZhu || ''}
    </div>
  );

  render() {
    const {visible, cangKuHis: {datas: {list}}} = this.props;
    return (
      <Modal
        okButtonProps={{disabled: true}}
        bodyStyle={{padding: '0px'}}
        maskClosable={false}
        title="灵物记录"
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkLwRecordOnCancel}
        footer={null}
      >
        <Card bordered={false}>
          <Timeline mode="left">
            {list && list.length > 0 ? list.map(data => <Timeline.Item
              label={data.updateTime}>{this.renderLingWu(data)}</Timeline.Item>) : ''}
          </Timeline>
        </Card>
      </Modal>
    );
  }
}
