import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { SwitcherOutlined } from '@ant-design/icons';

import { Tooltip, Select, Button } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {shengWuFenLeiMetaModel} from "../../json/shengWuFenLei";
import {Input} from "../../components/InputArea";

const { Option } = Select;

@connect(({ shengWuFenLei, loading }) => ({
  shengWuFenLei,
  loading,
}))
export default class ShengWuFenLei extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      formItemSwitch: {
        yu: 'select',
        jie: 'select',
        yaJie: 'select',
        zongMen: 'select',
        men: 'select',
        yaMen: 'select',
        zongGang: 'select',
        gang: 'select',
        yaGang: 'select',
        zongMu: 'select',
        mu: 'select',
        yaMu: 'select',
        zongKe: 'select',
        ke: 'select',
        yaKe: 'select',
        shu: 'select',
        yaShu: 'select',
        zhong: 'select',
        yaZhong: 'select',
      },
    };
  }
  // renderMiaoShu = text => {
  //   const title = renderMiaoShu(text);
  //   return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  // }

  handleExpandOnCancel = () => {
    this.setState({
      formItemSwitch: {
        yu: 'select',
        jie: 'select',
        yaJie: 'select',
        zongMen: 'select',
        men: 'select',
        yaMen: 'select',
        zongGang: 'select',
        gang: 'select',
        yaGang: 'select',
        zongMu: 'select',
        mu: 'select',
        yaMu: 'select',
        zongKe: 'select',
        ke: 'select',
        yaKe: 'select',
        shu: 'select',
        yaShu: 'select',
        zhong: 'select',
        yaZhong: 'select',
      },
    });
  };

  handleFormItemSwitch = (fenLei) => {
    const { formItemSwitch } = this.state;
    if (formItemSwitch[fenLei] === 'select') {
      this.setState({ formItemSwitch: { ...formItemSwitch, [fenLei]: 'input' } });
    } else if (formItemSwitch[fenLei] === 'input') {
      this.setState({ formItemSwitch: { ...formItemSwitch, [fenLei]: 'select' } });
    }
  };

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 其他灵物管理分页信息
  showTotal = metaModel => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  renderSearchSelectFormItem = (FormItem, formItemLayout, column, valueListData) => {
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData && valueListData.length > 0 ? valueListData.map(data => {
            return (
              <Option
                key={data.dataCode}
                value={data.dataCode}
                title={data.dataName}
              >
                {data.dataName}
              </Option>
            );
          }) : ''}
        </Select>
      </FormItem>
    );
  };

  renderSelect = (column, valueListData) => {
    return (
      <Select
        allowClear
        showSearch
        style={{width: '80%'}}
        optionFilterProp="title"
        placeholder={`请选择${column.columnName}`}
      >
        {valueListData ? valueListData.map(data => {
          return (
            <Option
              key={data.dataCode}
              value={data.dataCode}
              title={data.dataName}
            >
              {data.dataName}
            </Option>
          );
        }) : ''}
      </Select>
    );
  };

  renderInput = (column) => {
    return <Input style={{width: '80%'}} placeholder={`请输入${column.columnName}`}/>;
  };

  renderButtonIcon = (fenLei) => {
    return (
      <Button
        style={{marginLeft: '4px'}}
        icon={<SwitcherOutlined/>}
        onClick={() => this.handleFormItemSwitch(fenLei)}
      >
        切换
      </Button>
    );
  };

  renderSwitch = (FormItem, formItemLayout, column, valueListData, fenLei) => {
    const {formItemSwitch} = this.state;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
          <FormItem
            name={column.columnCode}
            noStyle
            rules={[]}
          >
            {formItemSwitch[fenLei] === 'select' ? this.renderSelect(column, valueListData) : this.renderInput(column)}
          </FormItem>
          {this.renderButtonIcon(fenLei)}
        </FormItem>
      </Fragment>
    );
  };

  renderYu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yu');
  };

  renderJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'jie');
  };

  renderYaJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaJie');
  };

  renderZongMen = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }

    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'zongMen');
  };

  renderMen = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }

    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'men');
  };

  renderYaMen = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }

    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaMen');
  };

  renderZongGang = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'zongGang');
  };

  renderGang = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'gang');
  };

  renderYaGang = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaGang');
  };

  renderZongMu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'zongMu');
  };

  renderMu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'mu');
  };

  renderYaMu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaMu');
  };

  renderZongKe = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'zongKe');
  };

  renderKe = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'ke');
  };

  renderYaKe = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaKe');
  };

  renderShu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'shu');
  };

  renderYaShu = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaShu');
  };

  renderZhong = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'zhong');
  };

  renderYaZhong = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column , searchArea  } = rowProps;
    const { valueListData } = rowState;
    // 搜索区域
    if (searchArea) {
      return this.renderSearchSelectFormItem(FormItem, formItemLayout, column, valueListData);
    }
    return this.renderSwitch(FormItem, formItemLayout, column, valueListData, 'yaZhong');
  };

  render() {
    const { props } = this;
    return (
      <PageHeaderWrapper>
        <StandardPager
          scroll={{ x: 'max-content' }}
          fixed="right"
          columnWidth="110px"
          expandOnCancel={this.handleExpandOnCancel}
          customFormItem={{
            yu: this.renderYu,
            jie: this.renderJie,
            yaJie: this.renderYaJie,
            zongMen: this.renderZongMen,
            men: this.renderMen,
            yaMen: this.renderYaMen,
            zongGang: this.renderZongGang,
            gang: this.renderGang,
            yaGang: this.renderYaGang,
            zongMu: this.renderZongMu,
            mu: this.renderMu,
            yaMu: this.renderYaMu,
            zongKe: this.renderZongKe,
            ke: this.renderKe,
            yaKe: this.renderYaKe,
            shu: this.renderShu,
            yaShu: this.renderYaShu,
            zhong: this.renderZhong,
            yaZhong: this.renderYaZhong,
          }}
          autoApi={{ form: {
              labelCol: { xs: { span: 24 }, sm: { span: 2 } },
              wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 22 } },
            } }}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          {...shengWuFenLeiMetaModel()}
          {...props}
        />
      </PageHeaderWrapper>
    );
  }
}

