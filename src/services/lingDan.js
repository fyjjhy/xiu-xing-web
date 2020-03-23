import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询灵丹列表信息
export async function queryLingDan(params) {
  return request(`/chenXian/chen/xian/lingDan/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取灵丹信息
export async function getLingDan(params) {
  return request(`/chenXian/chen/xian/lingDan/${params.id}`);
}

// 新增灵丹信息
export async function saveLingDan(params) {
  return request('/chenXian/chen/xian/lingDan', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改灵丹信息
export async function updateLingDan(params) {
  return request('/chenXian/chen/xian/lingDan', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除灵丹信息
export async function delLingDan(params) {
  return request(`/chenXian/chen/xian/lingDan/${params.id}`, {
    method: 'DELETE',
  });
}
