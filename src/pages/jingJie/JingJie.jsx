import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip/* , Typography */ } from 'antd';

import StandardPager from "../../template/StandardPager";
import {jingJieMetaModel} from "../../json/jingJie";
import {renderMiaoShu} from "../../utils/utils";

// const { Paragraph } = Typography;

@connect(({ jingJie, loading }) => ({
  jingJie,
  loading,
}))
export default class JingJie extends PureComponent {
  // renderMiaoShu = (text) => {
  //   const title = renderMiaoShu(text);
  //   return text && text.length > 50 ? <Tooltip overlayStyle={{ maxWidth: '500px', width: '500px' }} title={title}><Paragraph style={{ maxWidth: '500px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  // };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 境界管理分页信息
  showTotal = metaModel => {
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
          columnWidth="110px"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...jingJieMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

