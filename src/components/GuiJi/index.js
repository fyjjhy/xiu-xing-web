import React, {PureComponent} from 'react';
import { Modal, Card, Timeline, Badge } from 'antd';

export default class GuiJi extends PureComponent {
  handleShuGuiJiOnCancel = () => {
    const {guiJiOnCancel} = this.props;
    if (guiJiOnCancel) {
      guiJiOnCancel();
    }
  }

  renderLabel = data => (
    <div>
      {data.updateTime}<strong>  [更新时间]</strong>
      <br/>
      {data.addrFullName || ''}<strong>  [地址]</strong>
      <br/>
      {data.xiuXingShiJian || ''}<strong>  [时间]</strong>
    </div>
  );

  renderShuHis = data => (
    <div>
      <strong>属名称：</strong>{data.shuFullName}
      <br/>
      <strong>修行岁月：</strong>{data.xiuXingSuiYue || ''}
      <br/>
      <strong>属描述：</strong>{data.shuMiaoShu || ''}
      <br/>
      <strong>备注：</strong>{data.beiZhu || ''}
    </div>
  );

  render() {
    const {visible, shuHis: {datas: {list}}} = this.props;
    return (
      <Modal
        width={1100}
        okButtonProps={{disabled: true}}
        bodyStyle={{padding: '0px'}}
        maskClosable={false}
        title={
          <Badge
            count={list && list.length > 0 ? list.length : 0}
            offset={[16, 8]}
            size="small"
            // style={{ backgroundColor: '#52c41a' }}
          >
            <strong>属历史轨迹</strong>
          </Badge>
        }
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleShuGuiJiOnCancel}
        footer={null}
      >
        <Card bordered={false}>
          <Timeline mode="left">
            {list && list.length > 0 ? list.map((data, index) =>
              <Timeline.Item
                dot={<Badge overflowCount={999} style={{ backgroundColor: '#52c41a' }} count={list.length - index} />}
                label={this.renderLabel(data)}>
                {this.renderShuHis(data)}
              </Timeline.Item>) : ''}
          </Timeline>
        </Card>
      </Modal>
    );
  }
}
