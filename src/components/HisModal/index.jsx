import React, { PureComponent } from 'react';
import { Modal, Table, Button } from 'antd';

export default class HisModal extends PureComponent {
  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  render() {
    const { width, title, columns, dataSource, loading } = this.props;
    return (
      <Modal
        width={width}
        title={title}
        maskClosable={false}
        visible
        confirmLoading={loading}
        onCancel={() => { this.handleCancel(); }}
        footer={[
          <Button key="back" onClick={() => { this.handleCancel(); }}>取消</Button>
        ]}
      >
        <Table
          rowKey="id"
          scroll={{ x: '100vw' }}
          columns={columns}
          dataSource={dataSource || []}
        />
      </Modal>
    );
  }
}
