import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询妖兽列表信息
export async function queryYaoShou(params) {
  return request(`/chenXian/chen/xian/yaoShou/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取妖兽信息
export async function getYaoShou(params) {
  return request(`/chenXian/chen/xian/yaoShou/${params.id}`);
}

// 新增妖兽信息
export async function saveYaoShou(params) {
  return request('/chenXian/chen/xian/yaoShou', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改妖兽信息
export async function updateYaoShou(params) {
  return request('/chenXian/chen/xian/yaoShou', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除妖兽信息
export async function delYaoShou(params) {
  return request(`/chenXian/chen/xian/yaoShou/${params.id}`, {
    method: 'DELETE',
  });
}
