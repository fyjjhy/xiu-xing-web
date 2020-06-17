import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询仓库列表信息
export async function queryCangKu(params) {
  return request(`/chenXian/chen/xian/cangKu/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取仓库信息
export async function getCangKu(params) {
  return request(`/chenXian/chen/xian/cangKu/${params.id}`);
}

// 新增仓库信息
export async function saveCangKu(params) {
  return request('/chenXian/chen/xian/cangKu', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改仓库信息
export async function updateCangKu(params) {
  return request('/chenXian/chen/xian/cangKu', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除仓库信息
export async function delCangKu(params) {
  return request(`/chenXian/chen/xian/cangKu/${params.id}`, {
    method: 'DELETE',
  });
}

// 获取仓库列表信息
export async function getCangKuList(params) {
  return request(`/xiuXing/cangKu/list?${stringify(pagination2Pager(params))}`);
}
