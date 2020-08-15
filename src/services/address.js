import request from '../utils/request';

// 获取仓库信息
export async function getAddrTypeAddrList(params) {
  return request(`/xiuXing/address?addrType=${params.addrType}`);
}
