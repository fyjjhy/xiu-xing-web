import { stringify } from 'querystring';
import request from '../utils/request';

export async function queryXiaoShuoList() {
  return request(`/chenXian/chen/xian/xiaoShuo`);
}
