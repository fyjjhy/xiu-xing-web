import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

export async function queryXiaoShuoList() {
  return request(`/chenXian/chen/xian/xiaoShuo`);
}

// 分页查询小说列表信息
export async function queryXiaoShuo(params) {
  return request(`/chenXian/chen/xian/xiaoShuo/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取小说信息
export async function getXiaoShuo(params) {
  return request(`/chenXian/chen/xian/xiaoShuo/${params.id}`);
}

// 新增小说信息
export async function saveXiaoShuo(params) {
  return request('/chenXian/chen/xian/xiaoShuo', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改小说信息
export async function updateXiaoShuo(params) {
  return request('/chenXian/chen/xian/xiaoShuo', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除小说信息
export async function delXiaoShuo(params) {
  return request(`/chenXian/chen/xian/xiaoShuo/${params.id}`, {
    method: 'DELETE',
  });
}

