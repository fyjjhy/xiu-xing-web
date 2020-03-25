import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询机构列表信息
export async function queryJiGou(params) {
  return request(`/chenXian/chen/xian/jiGou/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取机构信息
export async function getJiGou(params) {
  return request(`/chenXian/chen/xian/jiGou/${params.id}`);
}

// 新增机构信息
export async function saveJiGou(params) {
  return request('/chenXian/chen/xian/jiGou', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改机构信息
export async function updateJiGou(params) {
  return request('/chenXian/chen/xian/jiGou', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除机构信息
export async function delJiGou(params) {
  return request(`/chenXian/chen/xian/jiGou/${params.id}`, {
    method: 'DELETE',
  });
}
