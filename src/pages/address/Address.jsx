/* eslint-disable no-nested-ternary,react/jsx-no-bind,no-multi-assign */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Select, TreeSelect } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {addressMetaModel} from "../../json/address";

const { Paragraph } = Typography;
const { Option } = Select;

const valueMap = {};
function loops(list, parent) {
  return (list || []).map(({ children, value, title }) => {
    const node = (valueMap[value] = {
      parent,
      value,
      title
    });
    node.children = loops(children, node);
    return node;
  });
}

@connect(({ address, loading }) => ({
  address,
  loading,
}))
export default class Address extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      addrList: [],
      action: 'show',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { address: { addrList: afterAddrList } } = nextProps;
    const { address: { addrList: beforeAddrList } } = this.props;
    if (afterAddrList !== beforeAddrList) {
      this.setState({
        addrList: [...afterAddrList],
      });
    }
  }

  rowProps = {};

  // 选择地址类别
  handleAddrTypeSelect = (form, addrType) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'address/getAddrTypeAddrList',
      payload: { addrType: addrType || '' },
    });
    this.setState({
      action: 'opt',
    });
    if (form) {
      const { setFieldsValue } = form;
      setFieldsValue({
        pId: undefined,
      });
    }
  };

  // 点击编辑按钮时执行的额外操作
  handleExtraEditClick = async params => {
    const { dispatch } = this.props;
    await dispatch({
      type: 'address/getAddrTypeAddrList',
      payload: { addrType: params.addrType || '' },
    });
    this.setState({
      action: 'opt',
    });
  }

  // 在关闭新增或编辑操作时，添加的额外的处理操作
  handleExpandOnCancel = () => {
    this.setState({
      action: 'show',
    });
  };

  handlePIdOnChange = (value) => {
    const { addrList } = this.state;
    loops(addrList);
    const path = [];
    let current = valueMap[value];
    while (current) {
      path.unshift(current.title);
      current = current.parent;
    }
    const { form } = this.rowProps;
    if (path && path.length > 0 && form) {
      const { setFieldsValue } = form;
      setFieldsValue({
        fullName: path[path.length - 1],
      });
    }
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 地址管理分页信息
  showTotal = metaModel => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  }

  renderAddrType = (FormItem, rowProps, rowState) => {
    const {formItemLayout, column, form} = rowProps;
    this.rowProps = rowProps;
    const {valueListData} = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          onChange={this.handleAddrTypeSelect.bind(this, form)}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData && valueListData.length > 0
            ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
            : ''
          }
        </Select>
      </FormItem>
    );
  };

  renderPId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { addrList, action } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <TreeSelect
          allowClear
          treeDefaultExpandAll
          onChange={this.handlePIdOnChange}
          treeData={action === 'opt' ? addrList : (valueListData || [])}
          placeholder={`请选择${column.columnName}`}
          // dropdownStyle={{overflow:'auto'}}
        />
      </FormItem>
    );
  };

  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          scroll={{ x: '140%' }}
          fixed="right"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          customFormItem={{ addrType: this.renderAddrType, pId: this.renderPId }}
          expandOnCancel={this.handleExpandOnCancel}
          extraEditClick={this.handleExtraEditClick}
          {...addressMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

