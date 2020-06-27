// 获取表单域规则
export function getFormItemRules(rowProps, column) {
  let rules = [];
  const errorMessage = column.errorText || '请填写正确的信息';
  if (column.validateRule) {
    rules = column.validateRule.split(';').map((rule) => {
      const rs = rule.split('|');
      if (rs[0] === 'validator') {
        if (rs.length > 1) {
          const { form, currentModel } = rowProps;
          const validator = rowProps[rs[1]].bind(null, currentModel, form);
          if (validator) {
            return { validator };
          }
        }
      }
      const r = { message: errorMessage };
      r[rs[0]] = rs.length > 1 ? rs[1] : rs[0];
      return r;
    });
  }
  if (column.requiredFlag === 'Y') {
    rules.push({ required: column.requiredFlag === 'Y', message: errorMessage });
  }
  return rules;
}

export function getPlaceHolder (rowProps, column) {
  const {columnName, columnCode} = column;
  const {[`${columnCode}Placeholder`]: placeholder} = rowProps;
  if (column.placeholder) {
    return column.placeholder;
  }
  if (placeholder) {
    return placeholder;
  }

  switch (column.displayType) {
    case 'S':
    case 'C':
    case 'TS':
    case 'MT':
    case 'MS':
    case 'R':
      return `请选择${columnName}`;
    default:
      return `请输入${columnName}`;
  }
}
