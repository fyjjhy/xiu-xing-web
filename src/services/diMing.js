import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询地名列表信息
export async function queryDiMing(params) {
  return request(`/chenXian/chen/xian/diMing/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取地名信息
export async function getDiMing(params) {
  return request(`/chenXian/chen/xian/diMing/${params.id}`);
}

// 新增地名信息
export async function saveDiMing(params) {
  return request('/chenXian/chen/xian/diMing', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改地名信息
export async function updateDiMing(params) {
  return request('/chenXian/chen/xian/diMing', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除地名信息
export async function delDiMing(params) {
  return request(`/chenXian/chen/xian/diMing/${params.id}`, {
    method: 'DELETE',
  });
}
