import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip/* , Typography */ } from 'antd';

import StandardPager from "../../template/StandardPager";
import {pinJiMetaModel} from "../../json/pinJi";
import {renderMiaoShu} from "../../utils/utils";

@connect(({ pinJi, loading }) => ({
  pinJi,
  loading,
}))
export default class PinJi extends PureComponent {
  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 品级管理分页信息
  showTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  }

  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...pinJiMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

