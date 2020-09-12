/* eslint-disable no-nested-ternary,react/jsx-no-bind */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Select, Button, Modal, Input } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {cangKuMetaModel} from "../../json/cangKu";
import {cangKuHisMetaModel} from "../../json/cangKuHis";
import {henJiMetaModel} from "../../json/henJi";
import {cangKuLingWuHisMetaModel} from "../../json/cangKuLingWuHis";
import {cangKuSuoShuHisMetaModel} from "../../json/cangKuSuoShuHis";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ cangKu, cangKuHis, jingJie, pinJi, cangKuLingWuHis, cangKuSuoShuHis, henJi, loading }) => ({
  cangKu,
  cangKuHis,
  jingJie,
  pinJi,
  cangKuLingWuHis,
  cangKuSuoShuHis,
  henJi,
  loading,
}))
export default class CangKu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      jingJieList: [],
      suoShuJingJieList: [],
      pinJiList: [],
      suoShuPinJiList: [],
      lingWuSuoShuModel: null,
      lingWuInfoVisible: false,
      suoShuInfoVisible: false,
      henJiInfoVisible: false,
      lingWuSelectedRow: {},
      suoShuSelectedRow: {},
      henJiSelectedRow: {},
      fenLei: null,
      cangKuLingWu: null,
      cangKuSuoShu: null,
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    };
  }

  rowProps= {};

  componentWillReceiveProps(nextProps) {
    const { jingJie: { datas: { list: afterJingJieList } } } = nextProps;
    const { jingJie: { datas: { list: beforeJingJieList } } } = this.props;
    if (afterJingJieList !== beforeJingJieList) {
      if (this.state.fenLei === 'lingWu') {
        this.setState({
          jingJieList: [...afterJingJieList],
        });
      } else if (this.state.fenLei === 'suoShu') {
        this.setState({
          suoShuJingJieList: [...afterJingJieList],
        });
      }
    }

    const { pinJi: { datas: { list: afterPinJiList } } } = nextProps;
    const { pinJi: { datas: { list: beforePinJiList } } } = this.props;
    if (afterPinJiList !== beforePinJiList) {
      if (this.state.fenLei === 'lingWu') {
        this.setState({
          pinJiList: [...afterPinJiList],
        });
      } else if (this.state.fenLei === 'suoShu') {
        this.setState({
          suoShuPinJiList: [...afterPinJiList],
        });
      }
    }
  }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
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

  // 获取表单域规则
  getFormItemRules = column => {
    const rules = [];
    const errorMessage = column.errorText || '请填写正确的信息';
    // if (column.validateRule) {
    //   rules = column.validateRule.split(';').map((rule) => {
    //     const rs = rule.split('|');
    //     if (rs[0] === 'validator') {
    //       if (rs.length > 1) {
    //         const { form } = this.props;
    //         const validator = this.props[rs[1]].bind(null, lingWuSuoShuModel, form);
    //         if (validator) {
    //           return { validator };
    //         }
    //       }
    //     }
    //     const r = { message: errorMessage };
    //     r[rs[0]] = rs.length > 1 ? rs[1] : rs[0];
    //     return r;
    //   });
    // }
    if (column.requiredFlag === 'Y') {
      rules.push({ required: column.requiredFlag === 'Y', message: errorMessage });
    }
    return rules;
  }

  handleFenLei = (fenLei, area, value) => {
    if (!area) {
      const { dispatch } = this.props;
      dispatch({
        type: 'jingJie/query',
        payload: { jingJieFenLei: value },
      });

      dispatch({
        type: 'pinJi/query',
        payload: { pinJiFenLei: value },
      });
      const { cangKuSuoShu, cangKuLingWu } = this.state;
      this.setState({
        fenLei,
        cangKuLingWu: fenLei === 'lingWu' ? 'lingWu' : cangKuLingWu,
        cangKuSuoShu: fenLei === 'suoShu' ? 'suoShu' : cangKuSuoShu,
      });
    }
  }

  handleLingWuButton = () => {
    this.setState({ lingWuSuoShuModel: 'lingWu', lingWuInfoVisible: true });
  };

  handleHenJiButton = () => {
    this.setState({ lingWuSuoShuModel: 'henJi', henJiInfoVisible: true });
  };

  handleLingWuLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        lingWuId: null,
        lingWuName: null,
        lingWuFenLei: null,
        lingWuShuXing: null,
        lingWuState: null,
        lingWuMiaoShu: null,
        // xiaoShuoId: null,
        danWei: null,
        jingJieId: null,
        pinJiId: null,
      });
    }
  };

  handleHenJiLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        henJiId: null,
        shiJian: null,
        beiZhu: null,
      });
    }
  };

  // 清除所属信息
  handleSuoShuLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        suoShuId: null,
        suoShuName: null,
        suoShuFenLei: null,
        suoShuMiaoShu: null,
        suoShuJingJieId: null,
        suoShuPinJiId: null,
        // xiaoShuoId: null,
      });
    }
  }

  // 所属信息选择
  handleSuoShuButton = () => {
    this.setState({ lingWuSuoShuModel: 'suoShu', suoShuInfoVisible: true });
  }

  handleLingWuInfoOnCancel = () => {
    this.setState({ lingWuSuoShuModel: null, lingWuInfoVisible: false });
  }

  handleSuoShuInfoOnCancel = () => {
    this.setState({ lingWuSuoShuModel: null, suoShuInfoVisible: false });
  };

  handleHenJiInfoOnCancel = () => {
    this.setState({ lingWuSuoShuModel: null, henJiInfoVisible: false });
  };

  handleLingWuInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { lingWuSelectedRow } = this.state;
      setFieldsValue({
        lingWuId: lingWuSelectedRow.lingWuId,
        lingWuName: lingWuSelectedRow.lingWuName,
        lingWuFenLei: lingWuSelectedRow.lingWuFenLei,
        lingWuShuXing: lingWuSelectedRow.lingWuShuXing,
        lingWuState: lingWuSelectedRow.lingWuState,
        lingWuMiaoShu: lingWuSelectedRow.lingWuMiaoShu,
        lingWuHisId: lingWuSelectedRow.id,
        lingWuShuLiang: lingWuSelectedRow.lingWuShuLiang,
        danWei: lingWuSelectedRow.danWei,
        jingJieId: lingWuSelectedRow.jingJieId,
        pinJiId: lingWuSelectedRow.pinJiId,
        xiuXingSuiYue: lingWuSelectedRow.xiuXingSuiYue,
        // xiaoShuoId: lingWuSelectedRow.xiaoShuoId,
      });
      if (lingWuSelectedRow.lingWuFenLei) {
        this.handleFenLei('lingWu', false, lingWuSelectedRow.lingWuFenLei);
      }
    }
    this.handleLingWuInfoOnCancel();
  }

  handleSuoShuInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { suoShuSelectedRow } = this.state;
      setFieldsValue({
        suoShuId: suoShuSelectedRow.suoShuId,
        suoShuName: suoShuSelectedRow.suoShuName,
        suoShuFenLei: suoShuSelectedRow.suoShuFenLei,
        suoShuMiaoShu: suoShuSelectedRow.suoShuMiaoShu,
        xiaoShuoId: suoShuSelectedRow.xiaoShuoId,
        addrId: suoShuSelectedRow.addrId,
        suoShuJingJieId: suoShuSelectedRow.suoShuJingJieId,
        suoShuPinJiId: suoShuSelectedRow.suoShuPinJiId,
      });
      if (suoShuSelectedRow.suoShuFenLei) {
        this.handleFenLei('suoShu', false, suoShuSelectedRow.suoShuFenLei);
      }
    }
    this.handleSuoShuInfoOnCancel();
  };

  handleHenJiInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { henJiSelectedRow } = this.state;
      setFieldsValue({
        henJiId: henJiSelectedRow.id,
        shiJian: henJiSelectedRow.shiJian,
        beiZhu: henJiSelectedRow.beiZhu,
      });
    }
    this.handleSuoShuInfoOnCancel();
  };

  // 在关闭新增或编辑操作时，添加的额外的处理操作
  handleExpandOnCancel = () => {
    this.setState({
      jingJieList: [],
      suoShuJingJieList: [],
      pinJiList: [],
      suoShuPinJiList: [],
      lingWuSuoShuModel: null,
      lingWuInfoVisible: false,
      suoShuInfoVisible: false,
      lingWuSelectedRow: {},
      suoShuSelectedRow: {},
      fenLei: null,
      cangKuLingWu: null,
      cangKuSuoShu: null,
    });
  }


  handleLingWuTableOnSelectRow = selectedRows => {
    this.setState({ lingWuSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  }

  handleSuoShuTableOnSelectRow = selectedRows => {
    this.setState({ suoShuSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  };

  handleHenJiTableOnSelectRow = selectedRows => {
    this.setState({ henJiSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  };

  handleOpt = (record) => {
    this.setState({
      currentModel: 'opt',
      currentInfo: { cangKuId: record.id },
      optVisible: true,
    });
  }

  handleOptOnCancel = () => {
    this.setState({
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    });
    this.reloadCangKu();
  }

  // 重新加载coupons
  reloadCangKu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKu/changeNeedLoad',
      payload: true,
    });
  }

  renderLingWuShuXing = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  //
  renderLingWuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 所属描述
  renderSuoShuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  // 痕迹描述
  renderHenJiMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  // 重新渲染灵物信息
  renderLingWuInfo = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleLingWuButton} type="primary">灵物信息选择</Button>
          <Button onClick={this.handleLingWuLinkButton} type="link">清除灵物信息</Button>
        </FormItem>
      </Fragment>
    );
  };

  // 重新渲染痕迹信息
  renderHenJiInfo = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleHenJiButton} type="primary">痕迹信息选择</Button>
          <Button onClick={this.handleHenJiLinkButton} type="link">清除痕迹信息</Button>
        </FormItem>
      </Fragment>
    );
  };

  renderHenJiId = FormItem => (
    <FormItem key="henJiId" name="henJiId" noStyle>
      <Input key="henJiId" type="hidden" name="henJiId"/>
    </FormItem>
  );

  renderLingWuId = FormItem => (
    <FormItem key="lingWuId" name="lingWuId" noStyle>
      <Input key="lingWuId" type="hidden" name="lingWuId"/>
    </FormItem>
  );

  renderLingWuHisId = FormItem => (
    <FormItem key="lingWuHisId" name="lingWuHisId" noStyle>
      <Input key="lingWuHisId" type="hidden" name="lingWuHisId"/>
    </FormItem>
  );

  // 重新渲染所属信息
  renderSuoShuInfo = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleSuoShuButton} type="primary">所属信息选择</Button>
          <Button onClick={this.handleSuoShuLinkButton} type="link">清除所属信息</Button>
        </FormItem>
      </Fragment>
    );
  }

  renderSuoShuId = FormItem => (
    <FormItem key="suoShuId" name="suoShuId" noStyle>
      <Input key="suoShuId" type="hidden" name="suoShuId"/>
    </FormItem>
  );

  renderSuoShuHisId = FormItem => (
    <FormItem key="suoShuHisId" name="suoShuHisId" noStyle>
      <Input key="suoShuHisId" type="hidden" name="suoShuHisId"/>
    </FormItem>
  );

  renderJingJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { jingJieList, cangKuLingWu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuLingWu === 'lingWu' ? (
            jingJieList && jingJieList.length > 0
              ? (jingJieList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderSuoShuJingJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { suoShuJingJieList, cangKuSuoShu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuSuoShu === 'suoShu' ? (
            suoShuJingJieList && suoShuJingJieList.length > 0
              ? (suoShuJingJieList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderPinJi = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { pinJiList, cangKuLingWu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuLingWu === 'lingWu' ? (
            pinJiList && pinJiList.length > 0
              ? (pinJiList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderSuoShuPinJi = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { suoShuPinJiList, cangKuSuoShu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuSuoShu === 'suoShu' ? (
            suoShuPinJiList && suoShuPinJiList.length > 0
              ? (suoShuPinJiList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
              : ''
          ) : (
            valueListData && valueListData.length > 0
              ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>)
              : ''
          )}
        </Select>
      </FormItem>
    );
  }

  renderLingWuFenLei = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, searchArea } = rowProps;
    const { valueListData } = rowState;
    let rules;
    if (searchArea) {
      rules = [];
    } else {
      rules = this.getFormItemRules(column);
    }
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={rules}>
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleFenLei.bind(this, 'lingWu', searchArea)}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  }

  renderSuoShuFenLei = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, searchArea } = rowProps;
    const { valueListData } = rowState;
    let rules;
    if (searchArea) {
      rules = [];
    } else {
      rules = this.getFormItemRules(column);
    }
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={rules}>
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleFenLei.bind(this, 'suoShu', searchArea)}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  renderAddrId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column, searchArea } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={searchArea || 700}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  render() {
    const { props } = this;
    const {
      lingWuSuoShuModel, lingWuInfoVisible, lingWuSelectedRow, suoShuSelectedRow,
      suoShuInfoVisible, optVisible, currentModel, currentInfo, henJiInfoVisible,
      henJiSelectedRow
    } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          opt={this.handleOpt}
          columnWidth="200px"
          scroll={{ x: '300vw' }}
          fixed="right"
          autoFormApi={{ width: '650px' }}
          customFormItem={{
            lingWuInfo: this.renderLingWuInfo,
            lingWuId: this.renderLingWuId,
            lingWuHisId: this.renderLingWuHisId,
            lingWuFenLei: this.renderLingWuFenLei,
            jingJieId: this.renderJingJie,
            pinJiId: this.renderPinJi,
            suoShuInfo: this.renderSuoShuInfo,
            suoShuId: this.renderSuoShuId,
            suoShuHisId: this.renderSuoShuHisId,
            suoShuFenLei: this.renderSuoShuFenLei,
            suoShuJingJieId: this.renderSuoShuJingJie,
            suoShuPinJiId: this.renderSuoShuPinJi,
            addrId: this.renderAddrId,
            henJiInfo: this.renderHenJiInfo,
            henJiId: this.renderHenJiId,
          }}
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          expandOnCancel={this.handleExpandOnCancel}
          {...cangKuMetaModel()}
          {...props}
        />
        {lingWuSuoShuModel === 'lingWu' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(lingWuSelectedRow).length === 0 }}
            title="灵物信息"
            maskClosable={false}
            visible={lingWuInfoVisible}
            onOk={this.handleLingWuInfoOnOk}
            onCancel={this.handleLingWuInfoOnCancel}
            width={1000}
          >
            <StandardPager
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showTotal}
              renderLingWuShuXing={this.renderLingWuShuXing}
              renderMiaoShu={this.renderLingWuMiaoShu}
              scroll={{ x: '60vw' }}
              {...cangKuLingWuHisMetaModel()}
              tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleLingWuTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
        {lingWuSuoShuModel === 'suoShu' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(suoShuSelectedRow).length === 0 }}
            title="所属信息"
            maskClosable={false}
            visible={suoShuInfoVisible}
            onOk={this.handleSuoShuInfoOnOk}
            onCancel={this.handleSuoShuInfoOnCancel}
            width={1000}
          >
            <StandardPager
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showTotal}
              renderMiaoShu={this.renderSuoShuMiaoShu}
              scroll={{ x: '90vw' }}
              {...cangKuSuoShuHisMetaModel()}
              tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleSuoShuTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
        {lingWuSuoShuModel === 'henJi' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(henJiSelectedRow).length === 0 }}
            title="痕迹信息"
            maskClosable={false}
            visible={henJiInfoVisible}
            onOk={this.handleHenJiInfoOnOk}
            onCancel={this.handleHenJiInfoOnCancel}
            width={1000}
          >
            <StandardPager
              showTotal={this.showTotal}
              columnWidth="110px"
              // fixed="right"
              renderMiaoShu={this.renderHenJiMiaoShu}
              // scroll={{ x: '100vw' }}
              {...henJiMetaModel()}
              tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleHenJiTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
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
              fixed="right"
              columnWidth="110px"
              scroll={{ x: '300vw' }} // 固定前后列，横向滚动查看其它数据
              showTotal={this.showTotal}
              renderMiaoShu={this.renderMiaoShu}
              rowInfo={currentInfo}
              profile={false}
              searchBtn="search"
              {...cangKuHisMetaModel()}
              {...props}
            />
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

