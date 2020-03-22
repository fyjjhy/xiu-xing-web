import { queryLingCai, getLingCai, saveLingCai, updateLingCai, delLingCai } from '../services/lingCai';

const Model = {
  namespace: 'lingCai',
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
      const response = yield call(queryLingCai, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getLingCai, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveLingCai, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateLingCai, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delLingCai, payload);
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
