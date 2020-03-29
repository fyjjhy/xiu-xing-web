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
    '妖兽', '符箓', '功法', '灵材', '傀儡', '法术', '法器', '其他灵物', '灵丹', '佛道儒魔妖'
  ].map(data => ({ dataCode: data, dataName: data }));
  return lingWuFenLei;
}
