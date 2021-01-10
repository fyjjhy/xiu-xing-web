import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Tag } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import StandardPager from '../../template/StandardPager';
import { xiaoShuoMetaModel } from '../../json/xiaoShuo';

@connect(({ xiaoShuo, loading }) => ({
  xiaoShuo,
  loading,
}))
export default class XiaoShuo extends PureComponent {
  UNSAFE_componentWillMount() {
    this.handlePreAction();
  }

  handlePreAction = async () => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'xiaoShuo/emptyXiaoShuoList',
    });
    await dispatch({
      type: 'xiaoShuo/list',
      payload: {},
    });
    const {
      xiaoShuo: { xiaoShuoList },
    } = this.props;
    localStorage.setItem('xiaoShuoList', JSON.stringify(xiaoShuoList));
  };

  // 置顶
  handleModify = async params => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'xiaoShuo/modify',
      payload: { ...params },
    });
    this.handlePreAction();
  };

  renderXiaoShuoName = (text, record) => {
    if (record && record.topping === 'Y') {
      return (
        <span>
          {text}
          <Tag style={{ marginLeft: '4px' }} color="#2db7f5">
            已置顶
          </Tag>
        </span>
      );
    }
    return text;
  };

  // 分页信息
  showTotal = metaModel => {
    if (metaModel && metaModel.funcModelCode) {
      const {
        [metaModel.funcModelCode]: {
          datas: { pagination },
        },
      } = this.props;
      if (pagination && pagination.total) {
        return {
          showTotal: () =>
            `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(
              pagination.total / pagination.pageSize,
            )} 页`,
        };
      }
    }
    return { showTotal: () => '' };
  };

  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          renderXiaoShuoName={this.renderXiaoShuoName}
          modify={this.handleModify}
          showTotal={this.showTotal}
          {...xiaoShuoMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}
