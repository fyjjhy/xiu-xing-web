import React, {PureComponent} from 'react';
import { Modal, Card, Timeline, Badge } from 'antd';

export default class CongGuiJi extends PureComponent {
  handleCongGuiJiOnCancel = () => {
    const {guiJiOnCancel} = this.props;
    if (guiJiOnCancel) {
      guiJiOnCancel();
    }
  }

  renderLabel = data => (
    <div>
      {data.congFenLeiName}<strong>  [从分类]</strong>
      <br/>
      {data.xiaoShuoName || ''}<strong>  [从小说]</strong>
    </div>
  );

  renderCongHis = data => (
    <div>
      <strong>从名称：</strong>{data.congName}
      <br/>
      <strong>从描述：</strong>{data.congMiaoShu || ''}
    </div>
  );

  render() {
    const {visible, congHis: {datas: {list}}} = this.props;
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
            <strong>从历史轨迹</strong>
          </Badge>
        }
        visible={visible}
        // onOk={this.handleOk}
        onCancel={this.handleCongGuiJiOnCancel}
        footer={null}
      >
        <Card bordered={false}>
          <Timeline mode="left">
            {list && list.length > 0 ? list.map((data, index) =>
              <Timeline.Item
                dot={<Badge overflowCount={999} style={{ backgroundColor: '#52c41a' }} count={list.length - index} />}
                label={this.renderLabel(data)}>
                {this.renderCongHis(data)}
              </Timeline.Item>) : ''}
          </Timeline>
        </Card>
      </Modal>
    );
  }
}
