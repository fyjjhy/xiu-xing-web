import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip/* , Typography */ } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {sheDingMetaModel} from "../../json/sheDing";

/* const { Paragraph } = Typography; */

@connect(({ sheDing, loading }) => ({
  sheDing,
  loading,
}))
export default class SheDing extends PureComponent {
  // renderMiaoShu = text => {
  //   const title = renderMiaoShu(text);
  //   return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  // }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 其他灵物管理分页信息
  showTotal = () => {
    const { sheDing: { datas: { pagination } } } = this.props;
    if (pagination && pagination.total) {
      return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
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
          {...sheDingMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

