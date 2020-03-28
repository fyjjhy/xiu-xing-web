import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询境界列表信息
export async function queryJingJie(params) {
  return request(`/chenXian/chen/xian/jingJie/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取境界信息
export async function getJingJie(params) {
  return request(`/chenXian/chen/xian/jingJie/${params.id}`);
}

// 新增境界信息
export async function saveJingJie(params) {
  return request('/chenXian/chen/xian/jingJie', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改境界信息
export async function updateJingJie(params) {
  return request('/chenXian/chen/xian/jingJie', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除境界信息
export async function delJingJie(params) {
  return request(`/chenXian/chen/xian/jingJie/${params.id}`, {
    method: 'DELETE',
  });
}
