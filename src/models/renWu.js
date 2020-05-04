import { queryRenWu, getRenWu, saveRenWu, updateRenWu, delRenWu, getRenWuHis } from '../services/renWu';

const Model = {
  namespace: 'renWu',
  state: {
    datas: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    },
    data: {},
    renWu: {},
    his: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    }
  },
  effects: {
    *query({ payload }, { call, put }) {
      const response = yield call(queryRenWu, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *get({ payload }, { call, put }) {
      const response = yield call(getRenWu, payload);
      yield put({
        type: 'saveRenWu',
        payload: response,
      });
    },
    *getRenWuHis({ payload }, { call, put }) {
      const response = yield call(getRenWuHis, payload);
      yield put({
        type: 'changeHis',
        payload: {...response},
      });
    },
    *add({ payload }, { call, put }) {
      const response = yield call(saveRenWu, payload);
      yield put({
        type: 'change',
        payload: {...response},
      });
    },
    *update({ payload }, { call, put }) {
      const response = yield call(updateRenWu, payload);
      yield put({
        type: 'change',
        payload: {...response},
      });
    },
    *del({ payload }, { call }) {
      yield call(delRenWu, payload);
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, datas: {...payload} };
    },
    change(state, { payload }) {
      return { ...state, data: payload };
    },
    saveRenWu(state, { payload }) {
      return { ...state, renWu: payload };
    },
    changeHis(state, { payload }) {
      return { ...state, his: {...payload} };
    },
    emptyProfile(state) {
      return {
        ...state,
        data: {},
      };
    },
    emptyRenWuHis(state) {
      return {
        ...state,
        his: {},
      };
    },
  },
};
export default Model;
