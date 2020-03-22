import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询傀儡列表信息
export async function queryKuiLei(params) {
  return request(`/chenXian/chen/xian/kuiLei/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取傀儡信息
export async function getKuiLei(params) {
  return request(`/chenXian/chen/xian/kuiLei/${params.id}`);
}

// 新增傀儡信息
export async function saveKuiLei(params) {
  return request('/chenXian/chen/xian/kuiLei', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改傀儡信息
export async function updateKuiLei(params) {
  return request('/chenXian/chen/xian/kuiLei', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除傀儡信息
export async function delKuiLei(params) {
  return request(`/chenXian/chen/xian/kuiLei/${params.id}`, {
    method: 'DELETE',
  });
}
