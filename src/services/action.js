import request from '../utils/request';

// 仓库翻转，属合并
export async function action(category, servCode, servAction, params) {
  return request(`/xiuXing/common/${category}/${servCode}/${servAction}`, {
    method: 'POST',
    body: JSON.stringify(params),
  });
}
