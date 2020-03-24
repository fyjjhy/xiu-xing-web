import { queryQiTaLingWu, getQiTaLingWu, saveQiTaLingWu, updateQiTaLingWu, delQiTaLingWu } from '../services/qiTaLingWu';

const Model = {
  namespace: 'lingWu',
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
      const response = yield call(queryQiTaLingWu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getQiTaLingWu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveQiTaLingWu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateQiTaLingWu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delQiTaLingWu, payload);
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
