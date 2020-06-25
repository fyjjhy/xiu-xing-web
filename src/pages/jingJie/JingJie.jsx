import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography } from 'antd';

import StandardPager from "../../template/StandardPager";
import {jingJieMetaModel} from "../../json/jingJie";
import {renderMiaoShu} from "../../utils/utils";

const { Paragraph } = Typography;

@connect(({ jingJie, loading }) => ({
  jingJie,
  loading,
}))
export default class JingJie extends PureComponent {
  constructor(props){
    super(props);
    this.state = {...jingJieMetaModel()};
  }

  renderMiaoShu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 50 ? <Tooltip overlayStyle={{ maxWidth: '500px', width: '500px' }} title={title}><Paragraph style={{ maxWidth: '500px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  render() {
    const { props, state } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          renderMiaoShu={this.renderMiaoShu}
          {...state}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

