import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询灵材列表信息
export async function queryLingCai(params) {
  return request(`/chenXian/chen/xian/lingCai/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取灵材信息
export async function getLingCai(params) {
  return request(`/chenXian/chen/xian/lingCai/${params.id}`);
}

// 新增灵材信息
export async function saveLingCai(params) {
  return request('/chenXian/chen/xian/lingCai', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改灵材信息
export async function updateLingCai(params) {
  return request('/chenXian/chen/xian/lingCai', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除灵材信息
export async function delLingCai(params) {
  return request(`/chenXian/chen/xian/lingCai/${params.id}`, {
    method: 'DELETE',
  });
}
