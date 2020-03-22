import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询法术列表信息
export async function queryGongFa(params) {
  return request(`/chenXian/chen/xian/gongFa/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取法术信息
export async function getGongFa(params) {
  return request(`/chenXian/chen/xian/gongFa/${params.id}`);
}

// 新增法术信息
export async function saveGongFa(params) {
  return request('/chenXian/chen/xian/gongFa', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改法术信息
export async function updateGongFa(params) {
  return request('/chenXian/chen/xian/gongFa', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除法术信息
export async function delGongFa(params) {
  return request(`/chenXian/chen/xian/gongFa/${params.id}`, {
    method: 'DELETE',
  });
}
