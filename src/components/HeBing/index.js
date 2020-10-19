import React, {PureComponent} from 'react';
import { Modal, Select, Skeleton, Descriptions, Tag } from 'antd';

const { Option } = Select;

export default class HeBing extends PureComponent {
  state = {
    origin: null,
    target: null,
    heBingInfo: null,
  };

  handleMultipleSelectOnChange = (values) => {
    if (values && values.length > 1) {
      const [originInfo, targetInfo] = values;
      this.setState({
        origin: originInfo.value,
        target: targetInfo.value,
        heBingInfo:
          <span>
            将属信息
            <Tag color="#87d068" style={{ marginLeft: '8px' }}>{originInfo.label}</Tag>
            合并到
            <Tag color="#87d068" style={{ marginLeft: '8px' }}>{targetInfo.label}</Tag>
            中
          </span>,
      });
    }
    else {
      this.setState({
        origin: null,
        target: null,
        heBingInfo: null,
      });
    }
  };

  // 确定
  handleHeBingOnOk = () => {
    const { heBingOnOk } = this.props;
    if (heBingOnOk) {
      const { origin, target } = this.state;
      heBingOnOk({ origin, target });
    }
    this.handleHeBingOnCancel();
  };

  // 取消
  handleHeBingOnCancel = () => {
    const { heBingOnCancel } = this.props;
    if (heBingOnCancel) {
      heBingOnCancel();
    }
  };

  renderShuInfo() {
    const { ns } = this.props;
    const { [ns]: { datas  } } = this.props;
    if (datas && datas.list && datas.list.length > 0) {
      return datas.list.map((data) => {
        return(
          <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>
        );
      });
    }
    return '';
  }

  render() {
    const { ns } = this.props;
    const { visible, loading: { effects: { [`${ns}/query`]: loading } } } = this.props;
    const { heBingInfo, origin, target } = this.state;
    return (
      <Modal
        okButtonProps={{ disabled: !(origin && target) }}
        // bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title="从属信息合并"
        visible={visible}
        onOk={this.handleHeBingOnOk}
        onCancel={this.handleHeBingOnCancel}
      >
        <Skeleton loading={loading}>
          <Descriptions column={1}>
            <Descriptions.Item label="合并信息">{heBingInfo}</Descriptions.Item>
            <Descriptions.Item label="从属名称">
              <Select
                allowClear
                mode="multiple"
                style={{ width: '100%' }}
                showSearch
                optionFilterProp="title"
                labelInValue
                placeholder="请选择属名称"
                onChange={this.handleMultipleSelectOnChange}
              >
                {this.renderShuInfo()}
              </Select>
            </Descriptions.Item>
          </Descriptions>
        </Skeleton>
      </Modal>
    );
  }
}
