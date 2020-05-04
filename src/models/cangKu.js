import { queryCangKu, getCangKu, saveCangKu, updateCangKu, delCangKu, getCangKuList } from '../services/cangKu';

const Model = {
  namespace: 'cangKu',
  state: {
    datas: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    },
    cangKuList: [],
    data: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryCangKu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getCangKu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *getCangKuList({ payload }, { call, put }) {
      const response = yield call(getCangKuList, payload);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveCangKu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateCangKu, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delCangKu, payload);
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, datas: payload };
    },
    saveList(state, { payload }) {
      return { ...state, cangKuList: payload };
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
    emptyCangKuList(state) {
      return {
        ...state,
        cangKuList: [],
      };
    },
  },
};
export default Model;
