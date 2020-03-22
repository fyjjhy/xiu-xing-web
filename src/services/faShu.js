import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询法术列表信息
export async function queryFaShu(params) {
  return request(`/chenXian/chen/xian/faShu/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取法术信息
export async function getFaShu(params) {
  return request(`/chenXian/chen/xian/faShu/${params.id}`);
}

// 新增法术信息
export async function saveFaShu(params) {
  return request('/chenXian/chen/xian/faShu', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改法术信息
export async function updateFaShu(params) {
  return request('/chenXian/chen/xian/faShu', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除法术信息
export async function delFaShu(params) {
  return request(`/chenXian/chen/xian/faShu/${params.id}`, {
    method: 'DELETE',
  });
}
