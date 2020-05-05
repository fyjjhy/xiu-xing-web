import React, { PureComponent } from 'react';
import { Modal, Tabs, Button, Typography, Tooltip } from 'antd';
import StandardForm from "../StandardForm";
import TemplateModal from "../TemplateModal";
import {getXiuXingRiZhiColumns} from "../../utils/columns";
import {renderMiaoShu} from "../../utils/utils";

const { TabPane } = Tabs;
const { Paragraph } = Typography;
let templateColumns = getXiuXingRiZhiColumns();

export default class AddXiuXingRiZhiModal extends PureComponent {
  state = {
    currentModel: '',
    currentForm: '',
  }

  UNSAFE_componentWillMount() {
    templateColumns = templateColumns.filter(column => column.templateListField === 'Y').map(column => {
      const listColumn = {
        title: column.columnName,
        dataIndex: column.columnCode,
        key: column.columnCode,
        // width: column.columnWidth || 'auto',
      };
      return listColumn;
    }).map(col => {
      const column = {};
      if (col.dataIndex === 'riZhi') {
        column.render = (text => {
          const title = renderMiaoShu(text);
          return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
        });
      } else if (col.dataIndex === 'riZhiEvent') {
        column.render = (text => {
          const title = renderMiaoShu(text);
          return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
        });
      } else if (col.dataIndex === 'riZhiRenWu') {
        column.render = (text => {
          const title = renderMiaoShu(text);
          return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
        });
      } else if (col.dataIndex === 'riZhiDiDian') {
        column.render = (text => {
          const title = renderMiaoShu(text);
          return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
        });
      } else if (col.dataIndex === 'riZhiTime') {
        column.render = (text => {
          const title = renderMiaoShu(text);
          return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
        });
      }
      return {...col, ...column};
    });
  }

  // 仓库信息提交
  handleCangKuOnSubmit = params => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(params);
    }
  }

  // 选择模板
  handleSelectTemplate = async (form) => {
    const { xiuXingRiZhi } = this.props;
    if (xiuXingRiZhi) {
      await xiuXingRiZhi();
    }
    this.setState({
      currentModel: 'template',
      currentForm: form,
    });
  }

  handleExpandButton = (form) => (
      <Button key="select" style={{ marginLeft: 8 }} onClick={() => { this.handleSelectTemplate(form); }}>选择模板</Button>
    )

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

  handleTemplateOnCancel = () => {
    this.setState({
      currentModel: '',
      currentForm: '',
    });
  }

  handleTemplateOnSubmit = params => {
    const { currentForm } = this.state;
    if (currentForm) {
      const { setFieldsValue } = currentForm;
      setFieldsValue({
        riZhiTime: params.riZhiTime,
        riZhiDiDian: params.riZhiDiDian,
        riZhiRenWu: params.riZhiRenWu,
        riZhiEvent: params.riZhiEvent,
        riZhi: params.riZhi,
      });
    }
  }

  renderTemplate() {
    const { currentModel } = this.state;
    if (currentModel === 'template') {
      const { xiuXingRiZhiList } = this.props;
      return (
        <TemplateModal
          scroll={{ x: '120%' }}
          width={1000}
          title="模板"
          templateColumns={templateColumns}
          templateDataSource={xiuXingRiZhiList}
          onCancel={this.handleTemplateOnCancel}
          onSubmit={this.handleTemplateOnSubmit}
        />
      );
    }
    return '';
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
              formItemLayout={{
                labelCol: { xs: { span: 24 }, sm: { span: 7 } },
                wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 } },
              }}
              submitFormLayout={{wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 12, offset: 7 } } }}
              formColumnList={xiuXingRiZhiColumns}
              currentModel='add'
              initialValues={xiuXingRiZhiInitialValues}
              showDialog={false}
              onSubmit={this.handleCangKuOnSubmit}
              onCancel={this.handleCangKuOnCancel}
              expandButton={this.handleExpandButton}
            />
          </TabPane>
        </Tabs>
        {this.renderTemplate()}
      </Modal>
    );
  }
}
