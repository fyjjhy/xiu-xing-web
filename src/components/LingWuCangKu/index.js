import React, {PureComponent} from 'react';
import { Modal, Card, List } from 'antd';
import CangKuLingWuProfile from "../CangKuLingWuProfile";
import CangKuLingWuRecord from "../CangKuLingWuRecord";

export default class LingWuCangKu extends PureComponent {

  state = {
    currentModel: '',
    currentInfo: {},
    ckLwVisible: false,
    ckLwRecordVisible: false,
  };

  handleLingWuProfileOnClick = (item) => {
    this.setState({
      currentModel: 'ckLw',
      currentInfo: item,
      ckLwVisible: true,
    });
  }

  handleLingWuRecordOnClick = (item) => {
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

  render() {
    const { visible, cangKu: { datas: { list } } } = this.props;
    return (
      <Modal
        okButtonProps={{ disabled: true }}
        bodyStyle={{ padding: '0px' }}
        maskClosable={false}
        title="灵物仓库"
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCkOnCancel}
        width={1000}
      >
        <List
          style={{ marginLeft: 30, marginRight: 30 }}
          grid={{ gutter: [32, 32], column: 3 }}
          dataSource={list}
          renderItem={item => (
            <List.Item style={{ marginBottom: 0 }}>
              <Card
                actions={[
                  <div onClick={() => this.handleLingWuProfileOnClick(item)}>详情</div>,
                  <div onClick={() => this.handleLingWuRecordOnClick(item)}>记录</div>
                ]}
                hoverable
                // bordered={false}
                bodyStyle={{ height: 100 }}
                // headStyle={{ backgroundColor: '#f9fafc', textAlign: 'center' }}
                // cover={<img height={200} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Card.Meta title={item.lingWuName} description={item.lingWuMiaoShu} />
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
