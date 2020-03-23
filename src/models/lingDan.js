import { queryLingDan, getLingDan, saveLingDan, updateLingDan, delLingDan } from '../services/lingDan';

const Model = {
  namespace: 'lingDan',
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
      const response = yield call(queryLingDan, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getLingDan, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveLingDan, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateLingDan, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delLingDan, payload);
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, datas: payload };
    },
    change(state, { payload }) {
      return { ...state, data: payload };
    },
    emptyProfile(state) {
      return {
        ...state,
        data: {},
      };
    },
  },
};
export default Model;
