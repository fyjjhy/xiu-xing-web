import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Modal } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {lingWuMetaModel} from "../../json/lingWu";
import {lingWuHisMetaModel} from "../../json/lingWuHis";

const { Paragraph } = Typography;

@connect(({ lingWu, lingWuHis, loading }) => ({
  lingWu,
  lingWuHis,
  loading,
}))
export default class LingWu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    };
  }

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { lingWuId: record.id },
      optVisible: true,
    });
  }

  handleOptOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    });
    this.reloadLingWu();
  }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 重新加载coupons
  reloadLingWu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'lingWu/changeNeedLoad',
      payload: true,
    });
  }

  // 其他灵物管理分页信息
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
    const { currentModel, currentInfo, optVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="180px"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          opt={this.handleOpt}
          {...lingWuMetaModel()}
          {...props}
        />
        {currentModel === 'opt' ? (
          <Modal
            okButtonProps={{ disabled: true }}
            bodyStyle={{ padding: '0px' }}
            maskClosable={false}
            title="操作记录"
            visible={optVisible}
            // onOk={this.handleOk}
            onCancel={this.handleOptOnCancel}
            width={1000}
          >
            <StandardPager
              scroll={{ x: '100vw' }} // 固定前后列，横向滚动查看其它数据
              fixed="right"
              columnWidth="110px"
              searchBtn='search'
              showTotal={this.showTotal}
              renderMiaoShu={this.renderMiaoShu}
              rowInfo={currentInfo}
              profile={false}
              {...lingWuHisMetaModel()}
              {...props}
            />
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

