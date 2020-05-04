import React, { PureComponent } from 'react';
import { Modal, Tabs } from 'antd';
import StandardForm from "../StandardForm";

const { TabPane } = Tabs;

export default class AddXiuXingRiZhiModal extends PureComponent {
  // 仓库信息提交
  handleCangKuOnSubmit = (params) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(params);
    }
  }

  // 仓库信息取消
  handleCangKuOnCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  }

  render() {
    const { width, title, cangKuColumns, xiuXingRiZhiColumns, cangKuInitialValues, xiuXingRiZhiInitialValues, loading, currentTab } = this.props;
    return (
      <Modal
        width={width}
        title={title}
        maskClosable={false}
        visible
        confirmLoading={loading}
        onCancel={() => { this.handleCancel(); }}
        footer={null}
      >
        <Tabs defaultActiveKey={currentTab} tabPosition="left">
          <TabPane
            disabled={currentTab === 'xiuXingRiZhi'}
            tab="仓库信息"
            key="cangKu"
          >
            <StandardForm
              formColumnList={cangKuColumns}
              currentModel='add'
              initialValues={cangKuInitialValues}
              showDialog={false}
              onSubmit={this.handleCangKuOnSubmit}
              onCancel={this.handleCangKuOnCancel}
            />
          </TabPane>
          <TabPane
            tab="日志信息"
            disabled={currentTab === 'cangKu'}
            key="xiuXingRiZhi"
          >
            <StandardForm
              formColumnList={xiuXingRiZhiColumns}
              currentModel='add'
              initialValues={xiuXingRiZhiInitialValues}
              showDialog={false}
              onSubmit={this.handleCangKuOnSubmit}
              onCancel={this.handleCangKuOnCancel}
            />
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}
