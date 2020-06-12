import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardPager from "../../template/StandardPager";
import {pinJiMetaModel} from "../../json/pinJi";

@connect(({ pinJi, loading }) => ({
  pinJi,
  loading,
}))
export default class PinJi extends PureComponent {
  constructor(props){
    super(props);
    this.state = {...pinJiMetaModel()};
  }

  render() {
    const { props, state } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          {...state}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

