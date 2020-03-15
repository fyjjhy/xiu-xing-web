import { queryXiaoShuoList } from '../services/xiaoShuo';
const Model = {
  namespace: 'xiaoShuo',
  state: {
    datas: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    },
    data: {},
    xiaoShuoList: [],
  },
  effects: {
    *queryXiaoShuoList({ payload }, { call, put }) {
      const response = yield call(queryXiaoShuoList, payload);
      yield put({
        type: 'saveXiaoShuoList',
        payload: response,
      });
    },
  },
  reducers: {
    saveXiaoShuoList(state, { payload }) {
      return { ...state, xiaoShuoList: payload };
    },
  },
};
export default Model;
