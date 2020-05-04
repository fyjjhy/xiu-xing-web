import { queryXiuXingRiZhi, getXiuXingRiZhi, getXiuXingRiZhiList, saveXiuXingRiZhi, updateXiuXingRiZhi, delXiuXingRiZhi } from '../services/xiuXingRiZhi';

const Model = {
  namespace: 'xiuXingRiZhi',
  state: {
    datas: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    },
    xiuXingRiZhiList: [],
    data: {},
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryXiuXingRiZhi, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getXiuXingRiZhi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *getXiuXingRiZhiList({ payload }, { call, put }) {
      const response = yield call(getXiuXingRiZhiList, payload);
      yield put({
        type: 'saveXiuXingRiZhi',
        payload: response,
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveXiuXingRiZhi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateXiuXingRiZhi, payload);
      yield put({
        type: 'change',
        payload: response,
      });
    },
    *del({ payload }, { call }) {
      yield call(delXiuXingRiZhi, payload);
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, datas: payload };
    },
    saveXiuXingRiZhi(state, { payload }) {
      return { ...state, xiuXingRiZhiList: payload };
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
    emptyXiuXingRiZhiList(state) {
      return {
        ...state,
        xiuXingRiZhiList: [],
      };
    },
  },
};
export default Model;
