import { stringify } from 'querystring';
import request from '../utils/request';

// 获取仓库历史列表信息
export async function queryHisList(params) {
  return request(`/xiuXing/cangKuHis/minLingWuList?${stringify(params)}`);
}

// 翻转
export async function action(category, servCode, servAction, params) {
  return request(`/xiuXing/common/${category}/${servCode}/${servAction}`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
