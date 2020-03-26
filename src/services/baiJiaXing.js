import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询百家姓列表信息
export async function queryBaiJiaXing(params) {
  return request(`/chenXian/chen/xian/baiJiaXing/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取百家姓信息
export async function getBaiJiaXing(params) {
  return request(`/chenXian/chen/xian/baiJiaXing/${params.id}`);
}

// 新增百家姓信息
export async function saveBaiJiaXing(params) {
  return request('/chenXian/chen/xian/baiJiaXing', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改百家姓信息
export async function updateBaiJiaXing(params) {
  return request('/chenXian/chen/xian/baiJiaXing', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除百家姓信息
export async function delBaiJiaXing(params) {
  return request(`/chenXian/chen/xian/baiJiaXing/${params.id}`, {
    method: 'DELETE',
  });
}
