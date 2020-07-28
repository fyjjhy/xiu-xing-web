import { stringify } from 'querystring';
import request from '../utils/request';

// 获取仓库历史列表信息
export async function queryHisList(params) {
  return request(`/xiuXing/cangKuHis/minLingWuList?${stringify(params)}`);
}
