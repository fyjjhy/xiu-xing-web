import request from '../utils/request';
import { stringify } from 'qs';
import { pagination2Pager, pager2pagination } from '../utils/utils';

export async function add(category, servCode, params, extStr02, delErrorMsg) {
  return request(`/xiuXing/common/${category}/${servCode}`, {
    method: 'POST',
    body: JSON.stringify(params),
    successMsg: extStr02,
    errorMsg: delErrorMsg,
  });
}

export async function query(category, servCode, params) {
  return request(`/xiuXing/common/${category}/${servCode}?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

export async function get(category, servCode, params) {
  return request(`/xiuXing/common/${category}/${servCode}/${params.id}`);
}

export async function modify(category, servCode, params, extStr02, delErrorMsg) {
  return request(`/xiuXing/common/${category}/${servCode}/${params.id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    successMsg: extStr02,
    errorMsg: delErrorMsg,
  });
}

export async function update(category, servCode, params, extStr02, delErrorMsg) {
  return request(`/xiuXing/common/${category}/${servCode}/${params.id}`, {
    method: 'PUT',
    body: JSON.stringify(params),
    successMsg: extStr02,
    errorMsg: delErrorMsg,
  });
}

export async function del(category, servCode, params, extStr02, delErrorMsg) {
  return request(`/xiuXing/common/${category}/${servCode}/${params.id}`, {
    method: 'DELETE',
    successMsg: extStr02,
    errorMsg: delErrorMsg,
  });
}

export async function option(category, servCode, action, params, extStr02, delErrorMsg) {
  return request(`/xiuXing/common/${category}/${servCode}/${action}`, {
    method: 'POST',
    body: JSON.stringify(params),
    successMsg: extStr02,
    errorMsg: delErrorMsg,
  });
}

export async function exportData(category, servCode, params) {
  return request(`/xiuXing/common/${category}/${servCode}/upload/exportsFile?${stringify(params)}`, {
    method: 'GET',
  });
}

export async function loadMetaModel(modelUrl) {
  return request(`/xiuXing/metaModel/${modelUrl}`);
}
