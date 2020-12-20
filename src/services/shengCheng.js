import request from '../utils/request';

// 新增仓库信息
export async function generateList(params) {
  return request('/xiuXing/shengCheng/generate', {
    method: 'POST',
    data: { ...params },
  });
}
