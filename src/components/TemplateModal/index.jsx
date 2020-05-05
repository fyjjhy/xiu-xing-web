import React, { PureComponent } from 'react';
import { Modal, Table } from 'antd';

export default class TemplateModal extends PureComponent {
  state = {
    selectedRow: {},
  }

  handleSelectedRows = (selectedRows) => {
    this.setState({
      selectedRow: selectedRows[0],
    });
  }

  handleTemplateOnOk = () => {
    const { selectedRow } = this.state;
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(selectedRow);
    }
    this.handleTemplateCancel();
  }

  handleTemplateCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  render() {
    const { width, title, templateColumns, templateDataSource, loading, scroll } = this.props;
    const { selectedRow } = this.state;
    return (
      <Modal
        width={width}
        title={title}
        maskClosable={false}
        visible
        confirmLoading={loading}
        onCancel={() => { this.handleTemplateCancel(); }}
        onOk={() => this.handleTemplateOnOk()}
        okButtonProps={{ disabled: selectedRow && Object.keys(selectedRow).length === 0 }}
      >
        <Table
          rowKey="xiuXingCode"
          rowSelection={{
            type: "radio",
            onChange: (selectedRowKeys, selectedRows) => {
              this.handleSelectedRows(selectedRows);
            },
          }}
          scroll={scroll || {}}
          columns={templateColumns}
          dataSource={templateDataSource || []}
        />
      </Modal>
    );
  }
}
