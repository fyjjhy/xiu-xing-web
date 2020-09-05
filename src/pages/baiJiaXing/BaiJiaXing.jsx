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
  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          {...baiJiaXingMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

