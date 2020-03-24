import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询阵法列表信息
export async function queryZhenFa(params) {
  return request(`/chenXian/chen/xian/zhenFa/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取阵法信息
export async function getZhenFa(params) {
  return request(`/chenXian/chen/xian/zhenFa/${params.id}`);
}

// 新增阵法信息
export async function saveZhenFa(params) {
  return request('/chenXian/chen/xian/zhenFa', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改阵法信息
export async function updateZhenFa(params) {
  return request('/chenXian/chen/xian/zhenFa', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除阵法信息
export async function delZhenFa(params) {
  return request(`/chenXian/chen/xian/zhenFa/${params.id}`, {
    method: 'DELETE',
  });
}
