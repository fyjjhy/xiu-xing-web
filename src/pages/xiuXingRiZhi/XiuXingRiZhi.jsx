import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import { Tooltip, Typography, Input, Button, Modal } from 'antd';

import StandardPager from "../../template/StandardPager";
import {renderMiaoShu} from "../../utils/utils";
import {xiuXingRiZhiMetaModel} from "../../json/xiuXingRiZhi";
import {cangKuInfoMetaModel} from "../../json/cangKuInfo";

const { Paragraph } = Typography;

@connect(({ xiuXingRiZhi, cangKuInfo, loading }) => ({
  xiuXingRiZhi,
  cangKuInfo,
  loading,
}))
export default class XiuXingRiZhi extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      cangKuModel: null,
      cangKuInfoVisible: false,
      cangKuSelectedRow: {},
    };
  }

  rowProps= {};

  handleCangKuTableOnSelectRow = selectedRows => {
    this.setState({ cangKuSelectedRow: selectedRows && selectedRows.length > 0 ? selectedRows[0] : {} });
  }

  handleCangKuButton = () => {
    this.setState({ cangKuModel: 'cangKu', cangKuInfoVisible: true });
  }

  handleCangKuInfoOnCancel = () => {
    this.setState({ cangKuModel: null, cangKuInfoVisible: false });
  }

  handleCangKuInfoOnOk = () => {
    const {form} = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      const { cangKuSelectedRow } = this.state;
      setFieldsValue({
        cangKuId: cangKuSelectedRow.id,
        lingWuName: cangKuSelectedRow.lingWuName,
        lingWuFullName: cangKuSelectedRow.lingWuFullName,
        lingWuMiaoShu: cangKuSelectedRow.lingWuMiaoShu,
        // suoShuId: cangKuSelectedRow.suoShuId,
        suoShuName: cangKuSelectedRow.suoShuName,
        suoShuFullName: cangKuSelectedRow.suoShuFullName,
        suoShuMiaoShu: cangKuSelectedRow.suoShuMiaoShu,
        xiaoShuoId: cangKuSelectedRow.xiaoShuoId,
      });
    }
    this.handleCangKuInfoOnCancel();
  }

  handleCangKuLinkButton = () => {
    const { form } = this.rowProps;
    if (form && form.setFieldsValue) {
      const { setFieldsValue } = form;
      setFieldsValue({
        cangKuId: null,
        lingWuName: null,
        lingWuFullName: null,
        lingWuMiaoShu: null,
        suoShuName: null,
        suoShuFullName: null,
        suoShuMiaoShu: null,
        xiaoShuoId: null,
      });
    }
  }

  renderMiaoShu = text => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 其他灵物管理分页信息
  showTotal = () => {
    const { xiuXingRiZhi: { datas: { pagination } } } = this.props;
    if (pagination && pagination.total) {
      return { showTotal: () => `共 ${pagination.total} 条记录 第 ${pagination.current} / ${Math.ceil(pagination.total / pagination.pageSize)} 页` };
    }
      return { showTotal: () => '' };

  }

  // 日志时间
  renderRiZhiTime = (text) => {
    const title = renderMiaoShu(text);
    return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
  }

  // 日志地点
  renderRiZhiDiDian = (text) => {
    const title = renderMiaoShu(text);
    return text ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
  }

  // 日志人物
  renderRiZhiRenWu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
  }

  // 日志事件
  renderRiZhiEvent = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
  }

  // 日志
  renderRiZhi = (text) => {
    const title = renderMiaoShu(text);
    return text ? <Tooltip overlayStyle={{ maxWidth: '400px', width: '400px' }} title={title}><Paragraph style={{ marginTop: '0px', marginBottom: '0px' }} ellipsis>{title}</Paragraph></Tooltip> : text
  }

  // 灵物全名
  renderLingWuFullName = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 所属全名
  renderSuoShuFullName = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 灵物描述
  renderLingWuMiaoShu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 所属描述
  renderSuoShuMiaoShu = (text) => {
    const title = renderMiaoShu(text);
    return text && text.length > 15 ? <Tooltip title={title}><Paragraph style={{ width: '250px', marginTop: '0px', marginBottom: '0px' }} ellipsis={{ row: 1 }}>{text}</Paragraph></Tooltip> : text
  }

  // 仓库信息
  renderCangKuId = (FormItem, rowProps) => {
    const { formItemLayout, column } = rowProps;
    this.rowProps = rowProps;
    return (
      <Fragment>
        <FormItem {...formItemLayout} label={column.columnName}>
          <Button onClick={this.handleCangKuButton} type="primary">仓库信息选择</Button>
          <Button onClick={this.handleCangKuLinkButton} type="link">清除仓库信息</Button>
        </FormItem>
        <FormItem key={column.columnCode} name={column.columnCode} noStyle>
          <Input key={column.columnCode} type="hidden" name={column.columnCode} />
        </FormItem>
      </Fragment>
    );
  }

  render() {
    const { props } = this;
    const { cangKuModel, cangKuSelectedRow, cangKuInfoVisible } = this.state;
    return (
      <PageHeaderWrapper>
        <StandardPager
          columnWidth="110px"
          renderMiaoShu={this.renderMiaoShu}
          showTotal={this.showTotal}
          fixed="right"
          scroll={{ x: '180%' }}
          autoFormApi={{ width: '650px' }}
          renderRiZhiTime={this.renderRiZhiTime}
          renderRiZhiDiDian={this.renderRiZhiDiDian}
          renderRiZhiRenWu={this.renderRiZhiRenWu}
          renderRiZhiEvent={this.renderRiZhiEvent}
          renderRiZhi={this.renderRiZhi}
          renderLingWuFullName={this.renderLingWuFullName}
          renderSuoShuFullName={this.renderSuoShuFullName}
          renderLingWuMiaoShu={this.renderLingWuMiaoShu}
          renderSuoShuMiaoShu={this.renderSuoShuMiaoShu}
          customFormItem={{ cangKuId: this.renderCangKuId }}
          {...xiuXingRiZhiMetaModel()}
          {...props}
        />
        {cangKuModel === 'cangKu' ? (
          <Modal
            bodyStyle={{ padding: 0 }}
            okButtonProps={{ disabled: Object.keys(cangKuSelectedRow).length === 0 }}
            title="仓库信息"
            maskClosable={false}
            visible={cangKuInfoVisible}
            onOk={this.handleCangKuInfoOnOk}
            onCancel={this.handleCangKuInfoOnCancel}
            width={1200}
          >
            <StandardPager
              columnWidth="160px"
              fixed="right"
              renderMiaoShu={this.renderMiaoShu}
              scroll={{ x: '200%' }}
              {...cangKuInfoMetaModel()}
              tableSelectType="radio"
              onSelectRow={this.handleCangKuTableOnSelectRow}
              {...props}
            />
          </Modal>
        ) : ''}
      </PageHeaderWrapper>
    );
  }
}

