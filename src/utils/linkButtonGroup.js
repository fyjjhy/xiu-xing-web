/* eslint-disable no-eval */
export function linkButtonGroup(record, action) {
  if (!record) {
    return '';
  }
  if (record instanceof Array === true && record.length > 0) {
    const stateData = [];
    for (let i = 0; i < record.length; i += 1) {
      if (stateData.indexOf(record[i].state) === -1) {
        stateData.push(record[i].state);
      }
      if (stateData.length > 1) {
        break;
      }
    }
    if (stateData.length > 1) {
      return '';
    }
    return bar(record[0], action);
  }
    return bar(record, action);

}

export function bar(record, action) {
  if (action.disableRule) {
    let result = false;
    if (action.disableRule.indexOf('(') !== -1) {
      result = eval(action.disableRule).call(this, record, action);
    } else if (this.props[action.disableRule]) {
      result = this.props[action.disableRule].call(this, record, action);
    }
    return result ? 'disabled' : '';
  }
  return '';
}
