import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询符箓列表信息
export async function queryFuLu(params) {
  return request(`/chenXian/chen/xian/fuLu/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取符箓信息
export async function getFuLu(params) {
  return request(`/chenXian/chen/xian/fuLu/${params.id}`);
}

// 新增符箓信息
export async function saveFuLu(params) {
  return request('/chenXian/chen/xian/fuLu', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改符箓信息
export async function updateFuLu(params) {
  return request('/chenXian/chen/xian/fuLu', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除符箓信息
export async function delFuLu(params) {
  return request(`/chenXian/chen/xian/fuLu/${params.id}`, {
    method: 'DELETE',
  });
}
