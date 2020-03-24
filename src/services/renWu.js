import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询人物列表信息
export async function queryRenWu(params) {
  return request(`/chenXian/chen/xian/renWu/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取人物信息
export async function getRenWu(params) {
  return request(`/chenXian/chen/xian/renWu/${params.id}`);
}

// 新增人物信息
export async function saveRenWu(params) {
  return request('/chenXian/chen/xian/renWu', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改人物信息
export async function updateRenWu(params) {
  return request('/chenXian/chen/xian/renWu', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除人物信息
export async function delRenWu(params) {
  return request(`/chenXian/chen/xian/renWu/${params.id}`, {
    method: 'DELETE',
  });
}
