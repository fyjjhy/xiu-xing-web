// 单位
export function danWeiConstant() {
  const danWei = [
    '只', '打', '张', '本', '块', '瓶', '束', '位', '道', '株',
    '亩', '片', '个', '枚', '杆', '件', '套', '面', '部', '粒',
    '服', '根', '条', '把', '颗', '艘', '柄', '份', '群', '双',
    '些', '头', '条', '口', '种', '尊', '壶'
  ].map(data => ({ dataCode: data, dataName: data }));
  return danWei;
}

// 灵物分类
export function lingWuFenLeiConstant() {
  const lingWuFenLei = [
    '妖兽', '符箓', '功法', '灵材', '傀儡', '法术', '法器', '其他灵物', '灵丹', '人神妖魔鬼怪'
  ].map(data => ({ dataCode: data, dataName: data }));
  return lingWuFenLei;
}

// 架构分类
export function jiaGouFenLeiConstant() {
  const jiaGouFenLei = [
    '散修', '散修联盟', '散修联盟机构', '修仙家族', '家族弟子', '家族机构',
    '修仙门派', '门派弟子', '门派机构', '修仙组织', '组织弟子', '组织机构',
    '修仙机构', '修仙者', '修仙圣地', '圣地修仙者', '圣地机构',
  ].map(data => ({ dataCode: data, dataName: data }));
  return jiaGouFenLei;
}

// 宗门分类
export function zongMenFenLeiConstant() {
  const zongMenFenLei = [
    '修仙家族', '修仙门派', '修仙组织',
  ].map(data => ({ dataCode: data, dataName: data }));
  return zongMenFenLei;
}

// 声调
export function shengDiaoConstant() {
  const shengDiao = [
    { dataCode: 0, dataName: '轻声' },
    { dataCode: 1, dataName: '第一声' },
    { dataCode: 2, dataName: '第二声' },
    { dataCode: 3, dataName: '第三声' },
    { dataCode: 4, dataName: '第四声' }
  ];
  return shengDiao;
}

// 字级
export function ziJiConstant() {
  const ziJi = [
    '一级字', '二级字', '三级字'
  ].map(data => ({ dataCode: data, dataName: data }));
  return ziJi;
}

// 妖兽分类
export function yaoShouFenLeiConstant() {
  const yaoShouFenLei = [
    '甲壳类', '单孔类', '有袋类', '胎盘类', '灵长类', '类人猿'
  ].map(data => ({ dataCode: data, dataName: data }));
  return yaoShouFenLei;
}

// 功法分类
export function gongFaFenLeiConstant() {
  return ['剑法', '掌法', '身法', '步法'].map(data => ({ dataCode: data, dataName: data }));
}

// 人物状态
export function renWuStateConstant() {
  return ['已死亡'].map(data => ({ dataCode: data, dataName: data }));
}

// 人物分类
export function renWuFenLeiConstant() {
  return ['人'].map(data => ({ dataCode: data, dataName: data }));
}
