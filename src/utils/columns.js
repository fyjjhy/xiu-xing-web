import {
  danWeiConstant, gongFaFenLeiConstant, jiaGouFenLeiConstant, lingWuFenLeiConstant, renWuFenLeiConstant,
  renWuStateConstant,
  shengDiaoConstant,
  yaoShouFenLeiConstant,
  ziJiConstant, zongMenFenLeiConstant
} from "./constant";

// 人物操作记录
export function renWuHisColumns() {
  const renWuHis = [
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
      width: '160px',
    },
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
      title: '曾用名',
      dataIndex: 'cengYongMing',
      key: 'cengYongMing',
    },
    {
      title: '人物分类',
      dataIndex: 'renWuFenLei',
      key: 'renWuFenLei',
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
    }];
  return renWuHis;
}

// 机构管理字段
export function getJiGouColumns() {
  const jiGouColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '机构代码', columnCode: 'jiGouCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '机构名称', columnCode: 'jiGouName', columnWidth: '110px'  },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '机构分类', columnCode: 'jiGouFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '机构描述', columnCode: 'jiGouMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return jiGouColumns;
}

// 设定管理字段
export function getSheDingColumns() {
  const sheDingColumns = [
    // { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '设定代码', columnCode: 'sheDingCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '设定名称', columnCode: 'sheDingName', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '设定分类', columnCode: 'sheDingFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '设定描述', columnCode: 'sheDingMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return sheDingColumns;
}

// 法术管理字段
export function getFaShuColumns() {
  const faShuColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '法术代码', columnCode: 'faShuCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '法术名称', columnCode: 'faShuName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '法术分类', columnCode: 'faShuFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '法术描述', columnCode: 'faShuMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', valueList: 'service|/chenXian/chen/xian/xiaoShuo', columnWidth: '175px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return faShuColumns;
}

// 符箓管理字段
export function getFuLuColumns() {
  const fuLuColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '符箓代码', columnCode: 'fuLuCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '符箓名称', columnCode: 'fuLuName', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '符箓分类', columnCode: 'fuLuFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '符箓描述', columnCode: 'fuLuMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return fuLuColumns;
}

// 功法管理字段
export function getGongFaColumns() {
  const gongFaColumns = [
      { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '功法代码', columnCode: 'gongFaCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '功法名称', columnCode: 'gongFaName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '功法分类', columnCode: 'gongFaFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(gongFaFenLeiConstant())}` },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '功法描述', columnCode: 'gongFaMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return gongFaColumns;
}

// 傀儡管理字段
export function getKuiLeiColumns() {
  const kuiLeiColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '傀儡代码', columnCode: 'kuiLeiCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '傀儡名称', columnCode: 'kuiLeiName', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '傀儡分类', columnCode: 'kuiLeiFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '傀儡描述', columnCode: 'kuiLeiMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return kuiLeiColumns;
}

// 灵材管理字段
export function getLingCaiColumns() {
  const lingCaiColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵材代码', columnCode: 'lingCaiCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵材名称', columnCode: 'lingCaiName', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵材分类', columnCode: 'lingCaiFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵材描述', columnCode: 'lingCaiMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnWidth: '175px', columnCode: 'xiaoShuoId', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return lingCaiColumns;
}

// 灵丹管理字段
export function getLingDanColumns() {
  const lingDanColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵丹代码', columnCode: 'lingDanCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵丹名称', columnCode: 'lingDanName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵丹分类', columnCode: 'lingDanFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵丹描述', columnCode: 'lingDanMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return lingDanColumns;
}

// 灵器管理字段
export function getLingQiColumns() {
  const lingQiColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵器代码', columnCode: 'lingQiCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵器名称', columnCode: 'lingQiName', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵器分类', columnCode: 'lingQiFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵器描述', columnCode: 'lingQiMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return lingQiColumns;
}

// 阵法管理字段
export function getZhenFaColumns() {
  const zhenFaColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '阵法代码', columnCode: 'zhenFaCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '阵法名称', columnCode: 'zhenFaName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '阵法分类', columnCode: 'zhenFaFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '阵法描述', columnCode: 'zhenFaMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return zhenFaColumns;
}

// 其他灵物管理字段
export function getQiTaLingWuColumns() {
  const lingWuColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵物代码', columnCode: 'lingWuCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '灵物名称', columnCode: 'lingWuName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵物分类', columnCode: 'lingWuFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '灵物描述', columnCode: 'lingWuMiaoShu', columnWidth: null },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return lingWuColumns;
}

// 地名管理字段
export function getDiMingColumns() {
  const diMingColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '地名代码', columnCode: 'diMingCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '地名名称', columnCode: 'diMingName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '地名分类', columnCode: 'diMingFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '地名描述', columnCode: 'diMingMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return diMingColumns;
}

// 宗门管理字段
export function getZongMenColumns() {
  const zongMenColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '宗门代码', columnCode: 'zongMenCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '宗门名称', columnCode: 'zongMenName', columnWidth: '110px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '宗门分类', columnCode: 'zongMenFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(zongMenFenLeiConstant())}` },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '宗门描述', columnCode: 'zongMenMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return zongMenColumns;
}

// 妖兽管理字段
export function getYaoShouColumns() {
  const yaoShouColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '妖兽代码', columnCode: 'yaoShouCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '妖兽名称', columnCode: 'yaoShouName', columnWidth: '110px'  },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '妖兽分类', columnCode: 'yaoShouFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(yaoShouFenLeiConstant())}` },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '妖兽描述', columnCode: 'yaoShouMiaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'S', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return yaoShouColumns;
}

// 小说管理字段
export function getXiaoShuoColumns() {
  const xiaoShuoColumns = [
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '小说名称', columnCode: 'name' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', columnName: '小说作者', columnCode: 'zuoZhe' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说分类', columnCode: 'xiaoShuoFenLei', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'T', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', columnName: '小说描述', columnCode: 'xiaoShuoMiaoShu' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', valueType: 'S', displayType: 'I', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return xiaoShuoColumns;
}

// 品级管理字段
export function getPinJiColumns() {
  const pinJiColumns = [
    // { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', valueType: 'S', displayType: 'I', columnName: '品级代码', columnCode: 'pinJiCode', columnWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'Y', profileField: 'Y', valueType: 'S', displayType: 'I', columnName: '品级名称', columnCode: 'name', columnWidth: '110px' },
    // { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', valueType: 'S', displayType: 'I', columnName: '品级分类', columnCode: 'pinJiFenLei', columnWidth: '90px',  },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', valueType: 'S', displayType: 'T', columnName: '品级描述', columnCode: 'miaoShu' },
    { addField: 'Y', editField: 'Y', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'N', searchFlag: 'Y', profileField: 'Y', valueType: 'S', displayType: 'S', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'Y', valueType: 'S', displayType: 'I', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', sortField: 'N', hiddenField: 'N', requiredFlag: 'Y', searchFlag: 'N', profileField: 'N', valueType: 'S', displayType: 'I', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return pinJiColumns;
}

// 境界管理字段
export function getJingJieColumns() {
  const jingJieColumns = [
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '境界代码', columnCode: 'code', columnWidth: '90px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '境界名称', columnCode: 'name', columnWidth: '110px' },
    // { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '境界分类', columnCodeCode: 'jingJieFenLei', columnWidth: '90px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '境界描述', columnCode: 'miaoShu' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return jingJieColumns;
}

// 字典管理字段
export function getZiDianColumns() {
  const ziDianColumns = [
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '字名', columnCode: 'ziName', columnWidth: '60px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '字级', columnCode: 'ziJi', columnWidth: '80px', valueList: `constant|${JSON.stringify(ziJiConstant())}` },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '拼音', columnCode: 'pinYin', columnWidth: '65px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '声调', columnCode: 'shengDiao', columnWidth: '65px', valueList: `constant|${JSON.stringify(shengDiaoConstant())}` },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '字义', columnCode: 'xinHuaZiDian' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '组词词头', columnCode: 'zuCiTou' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '组词词中', columnCode: 'zuCiZhong' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '组词词尾', columnCode: 'zuCiWei' },
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'Y', displayType: 'I', valueType: 'S', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return ziDianColumns;
}

// 人物管理字段
export function getRenWuColumns() {
  const renWuColumns = [
    { sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '人物代码', columnCode: 'renWuCode', columnWidth: '90px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '人物名称', columnCode: 'renWuName', columnWidth: '110px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '曾用名', columnCode: 'cengYongMing', columnWidth: '110px' },
    { sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'MS', valueType: 'S', columnName: '人物分类', columnCode: 'renWuFenLei', columnWidth: '110px', valueList: `constant|${JSON.stringify(renWuFenLeiConstant())}` },
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
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '灵物名称', columnCode: 'lingWu', columnWidth: '200px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '灵物分类', columnCode: 'lingWuFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(lingWuFenLeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '灵物属性', columnCode: 'lingWuShuXing', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '灵物状态', columnCode: 'lingWuState', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '灵物数量', columnCode: 'lingWuShuLiang', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '单位', columnCode: 'danWei', columnWidth: '65px', valueList: `constant|${JSON.stringify(danWeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '所属者', columnCode: 'suoShuZhe', columnWidth: '105px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '小说', columnCode: 'xiaoShuoId',  columnWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '境界', columnCode: 'jingJieName', columnWidth: '65px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '品级', columnCode: 'pinJiName', columnWidth: '65px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', valueType: 'S', displayType: 'T', columnName: '描述', columnCode: 'miaoShu', columnWidth: null },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '修行圣地名称', columnCode: 'xiuXingShengDiName', columnWidth: '120px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'S', columnName: '架构分类', columnCode: 'jiaGouFenLei', columnWidth: '90px', valueList: `constant|${JSON.stringify(jiaGouFenLeiConstant())}` },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '人事分类', columnCode: 'renShiFenLei', columnWidth: '90px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'Y', addField: 'Y', profileField: 'Y', searchFlag: 'N', requiredFlag: 'N', valueType: 'S', displayType: 'I', columnName: '架构名称', columnCode: 'jiaGouName', columnWidth: '90px' },
    // { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px' },
    { hiddenField: 'N', sortField: 'N', listField: 'Y', editField: 'N', addField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', valueType: 'S', displayType: 'I', columnName: '操作', columnCode: 'id', columnWidth: '160px' },
  ];
  return cangKu;
}

// 修行日志管理字段
export function getXiuXingRiZhiColumns() {
  const xiuXingRiZhiColumns = [
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '仓库灵物', columnCode: 'cangKuLingWu', columnWidth: '105px', profileWidth: '105px' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '修行代码', columnCode: 'xiuXingCode', columnWidth: '90px', profileWidth: '90px' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '日志代码', columnCode: 'riZhiCode', columnWidth: '90px', profileWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志时间', columnCode: 'riZhiTime', columnWidth: '200px', profileWidth: '90px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志地点', columnCode: 'riZhiDiDian', columnWidth: '200px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志人物', columnCode: 'riZhiRenWu', columnWidth: '200px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志事件', columnCode: 'riZhiEvent', columnWidth: '200px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'Y', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'T', valueType: 'S', columnName: '日志', columnCode: 'riZhi', columnWidth: '300px' },
    { addField: 'Y', editField: 'Y', listField: 'N', templateListField: 'N', sortField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '仓库灵物', columnCode: 'cangKuId' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'N', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '灵物全称', columnCode: 'lingWuFullName', columnWidth: '105px' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '数量单位', columnCode: 'shuLiangDanWei', columnWidth: '105px', profileWidth: '90px' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'Y', searchFlag: 'Y', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '灵物描述', columnCode: 'lingWuMiaoShu', columnWidth: '300px' },
    { addField: 'Y', editField: 'Y', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'S', valueType: 'S', columnName: '小说', columnCode: 'xiaoShuoId', columnWidth: '175px', profileWidth: '175px', valueList: 'service|/chenXian/chen/xian/xiaoShuo' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'Y', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'N', displayType: 'I', valueType: 'S', columnName: '更新时间', columnCode: 'updateTime', columnWidth: '160px', profileWidth: '160px' },
    { addField: 'N', editField: 'N', listField: 'Y', templateListField: 'N', sortField: 'N', profileField: 'N', searchFlag: 'N', requiredFlag: 'Y', hiddenField: 'Y', displayType: 'I', valueType: 'S', columnName: '操作', columnCode: 'id', columnWidth: '110px' },
  ];
  return xiuXingRiZhiColumns;
}
