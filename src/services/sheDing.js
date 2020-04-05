import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询设定列表信息
export async function querySheDing(params) {
  return request(`/chenXian/chen/xian/sheDing/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取设定信息
export async function getSheDing(params) {
  return request(`/chenXian/chen/xian/sheDing/${params.id}`);
}

// 新增设定信息
export async function saveSheDing(params) {
  return request('/chenXian/chen/xian/sheDing', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改设定信息
export async function updateSheDing(params) {
  return request('/chenXian/chen/xian/sheDing', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除设定信息
export async function delSheDing(params) {
  return request(`/chenXian/chen/xian/sheDing/${params.id}`, {
    method: 'DELETE',
  });
}
