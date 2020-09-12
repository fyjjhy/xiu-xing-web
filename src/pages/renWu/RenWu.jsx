import React, {PureComponent} from 'react';
import {connect} from 'dva';

import { Typography, Tooltip } from 'antd';


import {PageHeaderWrapper} from '@ant-design/pro-layout';
import StandardPager from "../../template/StandardPager";
import {renWuMetaModel} from "../../json/renWu";
import {renderMiaoShu} from "../../utils/utils";

const { Paragraph } = Typography;

@connect(({cangKu, renWu, xiaoShuo, xiuXingRiZhi, loading}) => ({
  cangKu,
  renWu,
  xiaoShuo,
  xiuXingRiZhi,
  loading,
}))
export default class RenWu extends PureComponent {
  renderRenWuShuXing = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  renderRenWuMiaoShu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  render() {
    const {props} = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="160px"
          fixed="right"
          renderRenWuShuXing={this.renderRenWuShuXing}
          renderRenWuMiaoShu={this.renderRenWuMiaoShu}
          scroll={{ x: '100vw' }}
          {...renWuMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

