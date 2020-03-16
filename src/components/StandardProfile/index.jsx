import React, { PureComponent } from 'react';

// import styles from './index.less';

import DescriptionList from '../DescriptionList';

const { Description } = DescriptionList;

class StandardProfile extends PureComponent {
  renderXiaoShuo(xiaoShuoId) {
    const { xiaoShuoList } = this.props;
    if (xiaoShuoList && xiaoShuoList.length > 0) {
      const [xiaoShuo] = xiaoShuoList.filter(xiaoShuo => xiaoShuo.dataCode === xiaoShuoId);
      if (xiaoShuo) {
        const { dataName } = xiaoShuo;
        return dataName;
      }
    }
    return xiaoShuoId;
  }

  render() {
    const { data: { fuLuName, fuLuCode, xiaoShuoId, fuLuState, stateTime, fuLuMiaoShu } } = this.props;
    return (
      <DescriptionList style={{ marginBottom: 24 }}>
        <Description term="符箓代码">{fuLuName}</Description>
        <Description term="符箓名称">{fuLuCode}</Description>
        <Description term="小说">{this.renderXiaoShuo(xiaoShuoId)}</Description>
        <Description term="符箓状态">{fuLuState}</Description>
        <Description term="更新时间">{stateTime}</Description>
        <Description term="符箓描述">{fuLuMiaoShu}</Description>
      </DescriptionList>
    );
  }
}

export default StandardProfile;
