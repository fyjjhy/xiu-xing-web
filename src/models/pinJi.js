import { queryPinJi, getPinJi, savePinJi, updatePinJi, delPinJi } from '../services/pinJi';

const Model = {
  namespace: 'pinJi',
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
      const response = yield call(queryPinJi, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getPinJi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(savePinJi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updatePinJi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delPinJi, payload);
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
