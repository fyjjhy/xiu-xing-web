import { queryXiaoShuoList, queryXiaoShuo, getXiaoShuo, saveXiaoShuo, updateXiaoShuo, delXiaoShuo } from '../services/xiaoShuo';

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
    *query({ payload }, { call, put }) {
      const response = yield call(queryXiaoShuo, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getXiaoShuo, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveXiaoShuo, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateXiaoShuo, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delXiaoShuo, payload);
    },
  },
  reducers: {
    saveXiaoShuoList(state, { payload }) {
      return { ...state, xiaoShuoList: payload };
    },
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
