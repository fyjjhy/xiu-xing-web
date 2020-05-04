import {danWeiConstant, jiaGouFenLeiConstant, lingWuFenLeiConstant, renWuStateConstant} from "./constant";

// 人物操作记录
export function renWuHisColumns() {
  const renWuHis = [
    {
      title: '操作代码',
      dataIndex: 'renWuHisCode',
      key: 'renWuHisCode',
      width: '90px',
    },
    {
      title: '人物名称',
      dataIndex: 'renWuName',
      key: 'renWuName',
      width: '90px',
    },
    {
      title: '人物状态',
      dataIndex: 'renWuState',
      key: 'renWuState',
      width: '90px',
    },
    {
      title: '人物属性',
      dataIndex: 'renWuShuXing',
      key: 'renWuShuXing',
      width: '180px',
    },
    {
      title: '人物描述',
      dataIndex: 'renWuMiaoShu',
      key: 'renWuMiaoShu',
      // width: '200px',
    },
    {
      title: '小说',
      dataIndex: 'xiaoShuoId',
      key: 'xiaoShuoId',
      width: '110px',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: '160px',
    }];
  return renWuHis;
}

// 人物管理字段
export function getRenWuColumns() {
  const renWuColumns = [
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '人物代码', columnCode: 'renWuCode', columnWidth: '90px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '人物名称', columnCode: 'renWuName', columnWidth: '110px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '人物状态', columnCode: 'renWuState', columnWidth: '90px', valueList: `constant|${JSON.stringify(renWuStateConstant())}` },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '人物属性', columnCode: 'renWuShuXing' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '人物描述', columnCode: 'renWuMiaoShu' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '110px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '操作', columnCode: 'id', columnWidth: '260px' },
  ];
  return renWuColumns;
}

// 仓库管理字段
export function getCangKuColumns() {
  const cangKu = [
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '灵物名称', columnCode: 'lingWu', columnWidth: '200px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '灵物分类', columnCode: 'lingWuFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(lingWuFenLeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '灵物属性', columnCode: 'lingWuShuXing', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '灵物状态', columnCode: 'lingWuState', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '灵物数量', columnCode: 'lingWuShuLiang', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '单位', columnCode: 'danWei', columnWidth: '65px', valueList: `constant|${JSON.stringify(danWeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '所属者', columnCode: 'suoShuZhe', columnWidth: '105px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '小说', columnCode: 'xiaoShuoId',  columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '境界', columnCode: 'jingJieName', columnWidth: '65px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '品级', columnCode: 'pinJiName', columnWidth: '65px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'T', columnName: '描述', columnCode: 'miaoShu', columnWidth: null },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '修行圣地名称', columnCode: 'xiuXingShengDiName', columnWidth: '120px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '架构分类', columnCode: 'jiaGouFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(jiaGouFenLeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '人事分类', columnCode: 'renShiFenLei', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '架构名称', columnCode: 'jiaGouName', columnWidth: '90px' },
    // { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', addDisplayField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', addDisplayField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '操作', columnCode: 'id', columnWidth: '160px' },
  ];
  return cangKu;
}

// 修行日志管理字段
export function getXiuXingRiZhiColumns() {
  const xiuXingRiZhiColumns = [
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '仓库灵物', columnCode: 'cangKuLingWu', columnWidth: '105px', profileWidth: '105px' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '修行代码', columnCode: 'xiuXingCode', columnWidth: '90px', profileWidth: '90px' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '日志代码', columnCode: 'riZhiCode', columnWidth: '90px', profileWidth: '90px' },
    { addField: 'Y', addDisplayField: 'N', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志时间', columnCode: 'riZhiTime', columnWidth: '90px', profileWidth: '90px' },
    { addField: 'Y', addDisplayField: 'N', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志地点', columnCode: 'riZhiDiDian', columnWidth: '90px' },
    { addField: 'Y', addDisplayField: 'N', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志人物', columnCode: 'riZhiRenWu', columnWidth: '200px' },
    { addField: 'Y', addDisplayField: 'N', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志事件', columnCode: 'riZhiEvent', columnWidth: '200px' },
    { addField: 'Y', addDisplayField: 'N', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志', columnCode: 'riZhi', columnWidth: '500px' },
    { addField: 'Y', addDisplayField: 'Y', editField: 'Y', listField: 'N', sortField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '仓库灵物', columnCode: 'cangKuId', columnWidth: null },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '灵物全称', columnCode: 'lingWuFullName', columnWidth: '105px' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '数量单位', columnCode: 'shuLiangDanWei', columnWidth: '105px', profileWidth: '90px' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '灵物描述', columnCode: 'lingWuMiaoShu', columnWidth: '105px' },
    { addField: 'Y', addDisplayField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', profileWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px', profileWidth: '160px' },
    { addField: 'N', addDisplayField: 'N', editField: 'N', listField: 'Y', sortField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'Y', displayType: 'I', valueType: 'S', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return xiuXingRiZhiColumns;
}
