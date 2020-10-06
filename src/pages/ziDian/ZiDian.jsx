import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Typography, Tooltip } from 'antd';

import StandardPager from "../../template/StandardPager";
import {ziDianMetaModel} from "../../json/ziDian";
import {renderMiaoShu} from "../../utils/utils";
import {getDictDataTransferData} from "../../services/loadData";

const { Paragraph } = Typography;

@connect(({ ziDian, xiaoShuo, loading }) => ({
  ziDian,
  xiaoShuo,
  loading,
}))
export default class ZiDian extends PureComponent {
  constructor(props){
    super(props);
    this.state = {...ziDianMetaModel()};
  }

  // 字义
  renderXinHuaZiDian = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 组词头
  renderZuCiTou = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 组词中
  renderZuCiZhong = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 组词尾
  renderZuCiWei = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 详情字义
  renderProfileXinHuaZiDian = text => renderMiaoShu(text)

  // 声调
  renderShengDiao = text => {
    const { dictList } = this.state;
    const shengDiao = getDictDataTransferData("shengDiao", `${text}`, dictList);
    return `${text}` ? shengDiao || text : text;
  }

  // 字典管理分页信息
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
    const { props, state } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="160px"
          fixed="right"
          // searchBtn="search"
          renderShengDiao={this.renderShengDiao} // 声调
          renderProfileXinHuaZiDian={this.renderProfileXinHuaZiDian} // 详情字义
          renderZuCiWei={this.renderZuCiWei} // 组词尾
          renderZuCiZhong={this.renderZuCiZhong} // 组词中
          renderZuCiTou={this.renderZuCiTou} // 组词头
          renderXinHuaZiDian={this.renderXinHuaZiDian} // 字义
          scroll={{ x: '100vw' }}
          showTotal={this.showTotal}
          {...state}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

