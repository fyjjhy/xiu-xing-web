import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardPager from "../../template/StandardPager";
import {baiJiaXingMetaModel} from "../../json/baiJiaXing";

@connect(({ baiJiaXing, loading }) => ({
  baiJiaXing,
  loading,
}))
export default class BaiJiaXing extends PureComponent {
  // 百家姓管理分页信息
  showTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          {...baiJiaXingMetaModel()}
          showTotal={this.showTotal}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

