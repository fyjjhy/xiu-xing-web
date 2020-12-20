import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {shengChengMetaModel} from "../../json/shengCheng";
import ShengChengAdd from "../../components/ShengChengAdd";

@connect(({ shengCheng, loading }) => ({
  shengCheng,
  loading,
}))
export default class ShengCheng extends PureComponent {
  state = {
    currentModel: null,
    addVisible: false,
  };

  handleAdd = () => {
    this.setState({ currentModel: 'add', addVisible: true });
  };

  handleGenerate = (values) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'shengCheng/resetGenerateList'
    });
    dispatch({
      type: 'shengCheng/generateList',
      payload: values,
    });
  };

  handleShengChengAddOnCancel = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'shengCheng/resetGenerateList'
    });
    this.setState({ currentModel: null, addVisible: false });
  };

  handleFilterGenerateList = (item) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'shengCheng/filterGenerateList',
      payload: item,
    });
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  render() {
    const { props } = this;
    const { currentModel, addVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          add={this.handleAdd}
          scroll={{ x: 'max-content' }}
          fixed="right"
          columnWidth="110px"
          expandOnCancel={this.handleExpandOnCancel}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...shengChengMetaModel()}
          {...props}
        />
        {currentModel === 'add' ? (
          <ShengChengAdd
            visible={addVisible}
            generate={this.handleGenerate}
            shengChengAddOnCancel={this.handleShengChengAddOnCancel}
            shengChengAddOnOk={this.handleHeBingOnOk}
            filterGenerateList={this.handleFilterGenerateList}
            {...props}
          />
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

