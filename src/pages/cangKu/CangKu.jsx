/* eslint-disable no-nested-ternary,react/jsx-no-bind */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Select, Button, Modal, Input } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderBadgeMiaoShu, renderMiaoShu} from "../../utils/utils";
import {cangKuMetaModel} from "../../json/cangKu";
import {cangKuHisMetaModel} from "../../json/cangKuHis";
import {henJiMetaModel} from "../../json/henJi";
import {cangKuCongHisMetaModel} from "../../json/cangKuCongHis";
import {cangKuShuHisMetaModel} from "../../json/cangKuShuHis";

const { Paragraph } = Typography;
const { Option } = Select;

@connect(({ cangKu, cangKuHis, jingJie, pinJi, cangKuCongHis, cangKuShuHis, henJi, loading }) => ({
  cangKu,
  cangKuHis,
  jingJie,
  pinJi,
  cangKuCongHis,
  cangKuShuHis,
  henJi,
  loading,
}))
export default class CangKu extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      jingJieList: [],
      shuJingJieList: [],
      pinJiList: [],
      shuPinJiList: [],
      congShuModel: null,
      congInfoVisible: false,
      shuInfoVisible: false,
      henJiInfoVisible: false,
      congSelectedRow: {},
      shuSelectedRow: {},
      henJiSelectedRow: {},
      fenLei: null,
      cangKuCong: null,
      cangKuShu: null,
      currentModel: '',
      currentInfo: {},
      optVisible: false,
    };
  }

  rowProps= {};

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { jingJie: { datas: { list: afterJingJieList } } } = nextProps;
    const { jingJie: { datas: { list: beforeJingJieList } } } = this.props;
    if (afterJingJieList !== beforeJingJieList) {
      if (this.state.fenLei === 'cong') {
        this.setState({
          jingJieList: [...afterJingJieList],
        });
      } else if (this.state.fenLei === 'shu') {
        this.setState({
          shuJingJieList: [...afterJingJieList],
        });
      }
    }

    const { pinJi: { datas: { list: afterPinJiList } } } = nextProps;
    const { pinJi: { datas: { list: beforePinJiList } } } = this.props;
    if (afterPinJiList !== beforePinJiList) {
      if (this.state.fenLei === 'cong') {
        this.setState({
          pinJiList: [...afterPinJiList],
        });
      } else if (this.state.fenLei === 'shu') {
        this.setState({
          shuPinJiList: [...afterPinJiList],
        });
      }
    }
  }

  renderOptMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 其他灵物管理分页信息
  showTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 从操作记录分页信息
  showCongTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 所属操作记录分页信息
  showShuTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 痕迹分页信息
  showHenJiTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

  // 仓库历史记录分页信息
  showOptTotal = (metaModel) => {
    if (metaModel && metaModel.funcModelCode) {
      const { [metaModel.funcModelCode]: { datas: { pagination } } } = this.props;
      if (pagination && pagination.total) {
        return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
      }
    }
    return { showTotal: () => '' };
  };

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
    //         const validator = this.props[rs[1]].bind(null, congShuModel, form);
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
      const { cangKuShu, cangKuCong } = this.state;
      this.setState({
        fenLei,
        cangKuCong: fenLei === 'cong' ? 'cong' : cangKuCong,
        cangKuShu: fenLei === 'shu' ? 'shu' : cangKuShu,
      });
    }
  }

  handleCongButton = () => {
    this.setState({ congShuModel: 'cong', congInfoVisible: true });
  };

  handleHenJiButton = () => {
    this.setState({ congShuModel: 'henJi', henJiInfoVisible: true });
  };

  handleCongLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        congId: null,
        congName: null,
        congFenLei: null,
        congShuXing: null,
        congState: null,
        congMiaoShu: null,
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
  handleShuLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        shuId: null,
        shuName: null,
        shuFenLei: null,
        shuMiaoShu: null,
        shuJingJieId: null,
        shuPinJiId: null,
        // xiaoShuoId: null,
      });
    }
  }

  // 所属信息选择
  handleShuButton = () => {
    this.setState({ congShuModel: 'shu', shuInfoVisible: true });
  }

  handleCongInfoOnCancel = () => {
    this.setState({ congShuModel: null, congInfoVisible: false });
  };

  handleShuInfoOnCancel = () => {
    this.setState({ congShuModel: null, shuInfoVisible: false });
  };

  handleHenJiInfoOnCancel = () => {
    this.setState({ congShuModel: null, henJiInfoVisible: false });
  };

  handleCongInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { congSelectedRow } = this.state;
      setFieldsValue({
        congId: congSelectedRow.congId,
        congName: congSelectedRow.congName,
        congFenLei: congSelectedRow.congFenLei,
        congShuXing: congSelectedRow.congShuXing,
        congState: congSelectedRow.congState,
        congMiaoShu: congSelectedRow.congMiaoShu || null,
        congHisId: congSelectedRow.id,
        congShuLiang: congSelectedRow.congShuLiang,
        danWei: congSelectedRow.danWei,
        jingJieId: congSelectedRow.jingJieId,
        pinJiId: congSelectedRow.pinJiId,
        congXiuXing: congSelectedRow.congXiuXing,
        // xiuXingSuiYue: congSelectedRow.xiuXingSuiYue,
        // xiaoShuoId: congSelectedRow.xiaoShuoId,
      });
      // if (congSelectedRow.congFenLei) {
      //   this.handleFenLei('cong', false, congSelectedRow.congFenLei);
      // }
    }
    this.handleCongInfoOnCancel();
  };

  handleShuInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { shuSelectedRow } = this.state;
      setFieldsValue({
        shuId: shuSelectedRow.shuId,
        shuName: shuSelectedRow.shuName,
        shuState: shuSelectedRow.shuState,
        shuFenLei: shuSelectedRow.shuFenLei,
        shuMiaoShu: shuSelectedRow.shuMiaoShu || null,
        xiaoShuoId: shuSelectedRow.xiaoShuoId,
        // addrId: shuSelectedRow.addrId,
        shuJingJieId: shuSelectedRow.shuJingJieId,
        shuPinJiId: shuSelectedRow.shuPinJiId,
        shuXiuXing: shuSelectedRow.shuXiuXing,
      });
      // if (shuSelectedRow.shuFenLei) {
      //   this.handleFenLei('shu', false, shuSelectedRow.shuFenLei);
      // }
    }
    this.handleShuInfoOnCancel();
  };

  handleHenJiInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { henJiSelectedRow } = this.state;
      setFieldsValue({
        henJiId: henJiSelectedRow.id,
        xiuXingShiJian: henJiSelectedRow.xiuXingShiJian,
        beiZhu: henJiSelectedRow.beiZhu,
      });
    }
    this.handleShuInfoOnCancel();
  };

  // 在关闭新增或编辑操作时，添加的额外的处理操作
  handleExpandOnCancel = () => {
    this.setState({
      jingJieList: [],
      shuJingJieList: [],
      pinJiList: [],
      shuPinJiList: [],
      congShuModel: null,
      congInfoVisible: false,
      shuInfoVisible: false,
      congSelectedRow: {},
      shuSelectedRow: {},
      fenLei: null,
      cangKuCong: null,
      cangKuShu: null,
    });
  }


  handleCongTableOnSelectRow = selectedRows => {
    this.setState({ congSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  }

  handleShuTableOnSelectRow = selectedRows => {
    this.setState({ shuSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
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
  };

  handleFanZhuan = (record) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKuHis/fanZhuan',
      payload: record,
    });
  };

  // 重新加载coupons
  reloadCangKu = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cangKu/changeNeedLoad',
      payload: true,
    });
  }

  renderCongShuXing = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderCongShuXingList = (text) => {
    const title = renderBadgeMiaoShu(text, ' ');
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  renderCongShuXingInfo = (text) => {
    return renderBadgeMiaoShu(text, ' ');
  };

  //
  renderCongMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 所属描述
  renderShuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 痕迹描述
  renderHenJiMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 20 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  };

  renderCangKuMiaoShu = text => {
    const title = renderMiaoShu(text);
    return (<Tooltip placement="topLeft" title={title}>{text}</Tooltip>);
  };

  // 重新渲染从信息
  renderCongInfo = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleCongButton} type="primary">从信息选择</Button>
          <Button onClick={this.handleCongLinkButton} type="link">清除从信息</Button>
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

  renderCongId = FormItem => (
    <FormItem key="congId" name="congId" noStyle>
      <Input key="congId" type="hidden" name="congId"/>
    </FormItem>
  );

  renderCongHisId = FormItem => (
    <FormItem key="congHisId" name="congHisId" noStyle>
      <Input key="congHisId" type="hidden" name="congHisId"/>
    </FormItem>
  );

  // 重新渲染属信息
  renderShuInfo = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleShuButton} type="primary">属信息选择</Button>
          <Button onClick={this.handleShuLinkButton} type="link">清除属信息</Button>
        </FormItem>
      </Fragment>
    );
  };

  renderShuId = FormItem => (
    <FormItem key="shuId" name="shuId" noStyle>
      <Input key="shuId" type="hidden" name="shuId"/>
    </FormItem>
  );

  renderShuHisId = FormItem => (
    <FormItem key="shuHisId" name="shuHisId" noStyle>
      <Input key="shuHisId" type="hidden" name="shuHisId"/>
    </FormItem>
  );

  renderJingJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { jingJieList, cangKuCong } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuCong === 'cong' ? (
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

  renderShuJingJie = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { shuJingJieList, cangKuShu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuShu === 'shu' ? (
            shuJingJieList && shuJingJieList.length > 0
              ? (shuJingJieList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
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
    const { pinJiList, cangKuCong } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuCong === 'cong' ? (
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

  renderShuPinJi = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column } = rowProps;
    const { valueListData } = rowState;
    const { shuPinJiList, cangKuShu } = this.state;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={`请选择${column.columnName}`}>
          {cangKuShu === 'shu' ? (
            shuPinJiList && shuPinJiList.length > 0
              ? (shuPinJiList.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>))
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

  renderCongFenLei = (FormItem, rowProps, rowState) => {
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
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleFenLei.bind(this, 'cong', searchArea)}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  }

  renderShuFenLei = (FormItem, rowProps, rowState) => {
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
        <Select allowClear placeholder={`请选择${column.columnName}`} onChange={this.handleFenLei.bind(this, 'shu', searchArea)}>
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  renderAddrId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={/* searchArea || */700}
          placeholder={`请选择${column.columnName}`}
        >
          {valueListData ? valueListData.map(data => <Option key={data.dataCode} value={data.dataCode} title={data.dataName}>{data.dataName}</Option>) : ''}
        </Select>
      </FormItem>
    );
  };

  renderZhangJieId = (FormItem, rowProps, rowState) => {
    const { formItemLayout, column/* , searchArea */ } = rowProps;
    const { valueListData } = rowState;
    return (
      <FormItem {...formItemLayout} label={column.columnName} name={column.columnCode} rules={[]}>
        <Select
          allowClear
          showSearch
          optionFilterProp="title"
          dropdownMatchSelectWidth={/* searchArea || */700}
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
      congShuModel, congInfoVisible, congSelectedRow, shuSelectedRow,
      shuInfoVisible, optVisible, currentModel, currentInfo, henJiInfoVisible,
      henJiSelectedRow
    } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          opt={this.handleOpt}
          columnWidth="200px"
          scroll={{ x: '230vw' }}
          fixed="right"
          autoApi={{ modal: { width: '700px' } }}
          customFormItem={{
            congInfo: this.renderCongInfo,
            congId: this.renderCongId, // 从标识
            congHisId: this.renderCongHisId, // 从历史标识
            shuInfo: this.renderShuInfo,
            shuId: this.renderShuId, // 属标识
            shuHisId: this.renderShuHisId, // 属历史标识
            addrId: this.renderAddrId,
            // henJiInfo: this.renderHenJiInfo,
            // henJiId: this.renderHenJiId,
            zhangJieId: this.renderZhangJieId,
          }}
          renderMiaoShu={this.renderCangKuMiaoShu}
          renderCongShuXingList={this.renderCongShuXingList}
          renderCongShuXingInfo={this.renderCongShuXingInfo}
          showTotal={this.showTotal}
          expandOnCancel={this.handleExpandOnCancel}
          {...cangKuMetaModel()}
          {...props}
        />
        {congShuModel === 'cong' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(congSelectedRow).length === 0 }}
            title="从信息"
            maskClosable={false}
            visible={congInfoVisible}
            onOk={this.handleCongInfoOnOk}
            onCancel={this.handleCongInfoOnCancel}
            width={1000}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showCongTotal}
              renderCongShuXing={this.renderCongShuXing}
              renderMiaoShu={this.renderCongMiaoShu}
              // scroll={{ x: '60vw' }}
              {...cangKuCongHisMetaModel()}
              tableSelectType="radio"
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleCongTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
        {congShuModel === 'shu' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(shuSelectedRow).length === 0 }}
            title="属信息"
            maskClosable={false}
            visible={shuInfoVisible}
            onOk={this.handleShuInfoOnOk}
            onCancel={this.handleShuInfoOnCancel}
            width={1300}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              columnWidth="110px"
              fixed="right"
              searchBtn="search"
              profile={false}
              showTotal={this.showShuTotal}
              renderMiaoShu={this.renderShuMiaoShu}
              // scroll={{ x: '90vw' }}
              {...cangKuShuHisMetaModel()}
              tableSelectType="radio"
              customFormItem={{
                addrId: this.renderAddrId,
              }}
              rowClickTrigger // 点击行触发前面的选择项(多选还是单选)
              onSelectRow={this.handleShuTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
        {congShuModel === 'henJi' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(henJiSelectedRow).length === 0 }}
            title="痕迹信息"
            maskClosable={false}
            visible={henJiInfoVisible}
            onOk={this.handleHenJiInfoOnOk}
            onCancel={this.handleHenJiInfoOnCancel}
            width={1000}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              showTotal={this.showHenJiTotal}
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
            title="仓库操作记录"
            visible={optVisible}
            // onOk={this.handleOk}
            onCancel={this.handleOptOnCancel}
            width={1300}
            cancelText="取消"
            okText="确定"
          >
            <StandardPager
              fixed="right"
              autoApi={{ modal: { width: '700px' } }}
              fanZhuan={this.handleFanZhuan} // 翻转
              customFormItem={{
                congInfo: this.renderCongInfo,
                congId: this.renderCongId, // 从标识
                congHisId: this.renderCongHisId, // 从历史标识
                shuInfo: this.renderShuInfo,
                shuId: this.renderShuId, // 属标识
                shuHisId: this.renderShuHisId, // 属历史标识
                addrId: this.renderAddrId,
                // henJiInfo: this.renderHenJiInfo,
                // henJiId: this.renderHenJiId,
                zhangJieId: this.renderZhangJieId,
              }}
              // columnWidth="110px"
              scroll={{ x: '230vw' }} // 固定前后列，横向滚动查看其它数据
              showTotal={this.showOptTotal}
              renderMiaoShu={this.renderOptMiaoShu}
              renderCongShuXingList={this.renderCongShuXingList}
              renderCongShuXingInfo={this.renderCongShuXingInfo}
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

