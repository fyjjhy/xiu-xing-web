import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardPager from "../../template/StandardPager";
import {xiaoShuoMetaModel} from "../../json/xiaoShuo";

@connect(({ xiaoShuo, loading }) => ({
  xiaoShuo,
  loading,
}))
export default class XiaoShuo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {...xiaoShuoMetaModel()};
  }

  render() {
    const { props, state } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          {...state}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

