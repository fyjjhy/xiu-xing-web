import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询宗门列表信息
export async function queryZongMen(params) {
  return request(`/chenXian/chen/xian/zongMen/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取宗门信息
export async function getZongMen(params) {
  return request(`/chenXian/chen/xian/zongMen/${params.id}`);
}

// 新增宗门信息
export async function saveZongMen(params) {
  return request('/chenXian/chen/xian/zongMen', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改宗门信息
export async function updateZongMen(params) {
  return request('/chenXian/chen/xian/zongMen', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除宗门信息
export async function delZongMen(params) {
  return request(`/chenXian/chen/xian/zongMen/${params.id}`, {
    method: 'DELETE',
  });
}
