import { queryFuLu, getFuLu, saveFuLu } from '../services/fuLu';
const Model = {
  namespace: 'fuLu',
  state: {
    datas: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    },
    data: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryFuLu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getFuLu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveFuLu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, datas: payload };
    },
    change(state, { payload }) {
      return { ...state, data: payload };
    },
  },
};
export default Model;
