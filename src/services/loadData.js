/* eslint-disable prefer-promise-reject-errors */
import request from '../utils/request';

export function getValueList(column) {
  const { valueList } = column;
  if (!valueList) {
    return [];
  }
  return valueList.split('|');
}

export function getDictData(dictCode, dictList) {
  if (dictList && dictList.length > 0) {
    const [first] = dictList.filter(dict => dict.dictCode === dictCode);
    if (first) {
      const { dictDataList } = first;
      if (dictDataList && dictDataList.length > 0) {
        return dictDataList;
      }
    }
  }
  return [];
}

export function getQueryData(url) {
  return request(url);
}

// 获取字典表中的对应值
export function getDictDataTransferData(column, text, dictList) {
  if (!text) {
    return '-';
  }
  const dictDataList = getDictData(column, dictList);
  if (dictDataList && dictDataList.length > 0) {
    const [currentDictData] = dictDataList.filter(dictData => {
      const { dataCode } = dictData;
      return dataCode === text;
    });
    if (currentDictData) {
      const { dataName } = currentDictData;
      return dataName;
    }
  }
  return text;
}

export function makeCancelable(promise) {
  let hasCanceled = false;
  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val =>
      (hasCanceled ? reject({ isCanceled: true }) : resolve(val))
    );
    promise.catch(error =>
      (hasCanceled ? reject({ isCanceled: true }) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
}
