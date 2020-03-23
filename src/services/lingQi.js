import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询灵器列表信息
export async function queryLingQi(params) {
  return request(`/chenXian/chen/xian/lingQi/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取灵器信息
export async function getLingQi(params) {
  return request(`/chenXian/chen/xian/lingQi/${params.id}`);
}

// 新增灵器信息
export async function saveLingQi(params) {
  return request('/chenXian/chen/xian/lingQi', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改灵器信息
export async function updateLingQi(params) {
  return request('/chenXian/chen/xian/lingQi', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除灵器信息
export async function delLingQi(params) {
  return request(`/chenXian/chen/xian/lingQi/${params.id}`, {
    method: 'DELETE',
  });
}
