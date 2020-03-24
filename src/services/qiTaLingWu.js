import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询其他灵物列表信息
export async function queryQiTaLingWu(params) {
  return request(`/chenXian/chen/xian/qiTaLingWu/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取其他灵物信息
export async function getQiTaLingWu(params) {
  return request(`/chenXian/chen/xian/qiTaLingWu/${params.id}`);
}

// 新增其他灵物信息
export async function saveQiTaLingWu(params) {
  return request('/chenXian/chen/xian/qiTaLingWu', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改其他灵物信息
export async function updateQiTaLingWu(params) {
  return request('/chenXian/chen/xian/qiTaLingWu', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除其他灵物信息
export async function delQiTaLingWu(params) {
  return request(`/chenXian/chen/xian/qiTaLingWu/${params.id}`, {
    method: 'DELETE',
  });
}
