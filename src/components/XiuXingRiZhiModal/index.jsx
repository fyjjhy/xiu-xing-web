import React, { PureComponent } from 'react';
import { Modal, Table, Button } from 'antd';

export default class XiuXingRiZhiModal extends PureComponent {
  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  render() {
    const { width, title, columns, dataSource, loading, scroll } = this.props;
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
          rowKey="xiuXingCode"
          scroll={scroll || {}}
          columns={columns}
          dataSource={dataSource || []}
        />
      </Modal>
    );
  }
}
