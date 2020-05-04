import { stringify } from 'querystring';
import request from '../utils/request';
import { pagination2Pager, pager2pagination } from '../utils/utils';

// 分页查询修行日志列表信息
export async function queryXiuXingRiZhi(params) {
  return request(`/chenXian/chen/xian/xiuXingRiZhi/pagerList?${stringify(pagination2Pager(params))}`)
    .then(data => (pager2pagination(data)));
}

// 获取修行日志信息
export async function getXiuXingRiZhi(params) {
  return request(`/chenXian/chen/xian/xiuXingRiZhi/${params.id}`);
}

// 获取修行日志列表信息
export async function getXiuXingRiZhiList(params) {
  return request(`/chenXian/chen/xian/xiuXingRiZhi/list?${stringify(pagination2Pager(params))}`);
}

// 新增修行日志信息
export async function saveXiuXingRiZhi(params) {
  return request('/chenXian/chen/xian/xiuXingRiZhi', {
    method: 'POST',
    data: { ...params },
  });
}

// 修改修行日志信息
export async function updateXiuXingRiZhi(params) {
  return request('/chenXian/chen/xian/xiuXingRiZhi', {
    method: 'POST',
    data: { ...params },
  });
}

// 删除修行日志信息
export async function delXiuXingRiZhi(params) {
  return request(`/chenXian/chen/xian/xiuXingRiZhi/${params.id}`, {
    method: 'DELETE',
  });
}
