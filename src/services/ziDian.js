import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询字典列表信息
export async function queryZiDian(params) {
  return request(`/chenXian/chen/xian/ziDian/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取字典信息
export async function getZiDian(params) {
  return request(`/chenXian/chen/xian/ziDian/${params.id}`);
}

// 新增字典信息
export async function saveZiDian(params) {
  return request('/chenXian/chen/xian/ziDian', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改字典信息
export async function updateZiDian(params) {
  return request('/chenXian/chen/xian/ziDian', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除字典信息
export async function delZiDian(params) {
  return request(`/chenXian/chen/xian/ziDian/${params.id}`, {
    method: 'DELETE',
  });
}
