import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询品级列表信息
export async function queryPinJi(params) {
  return request(`/chenXian/chen/xian/pinJi/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取品级信息
export async function getPinJi(params) {
  return request(`/chenXian/chen/xian/pinJi/${params.id}`);
}

// 新增品级信息
export async function savePinJi(params) {
  return request('/chenXian/chen/xian/pinJi', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改品级信息
export async function updatePinJi(params) {
  return request('/chenXian/chen/xian/pinJi', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除品级信息
export async function delPinJi(params) {
  return request(`/chenXian/chen/xian/pinJi/${params.id}`, {
    method: 'DELETE',
  });
}
