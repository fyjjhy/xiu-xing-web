import {createModel} from "../utils/metaModel";
import { queryHisList, cangKuCongShuList } from "../services/cangKuHis";
import { action } from "../services/action";

const Model = {
  namespace: 'cangKuHis',
  state: {
    hisList: {},
    his: {},
  },
  effects: {
    *queryHisList({ payload }, { call, put }) {
      const response = yield call(queryHisList, payload);
      yield put({
        type: 'saveHisList',
        payload: response,
      });
    },
    *cangKuCongShuList({ payload }, { call, put }) {
      const response = yield call(cangKuCongShuList, payload);
      yield put({
        type: 'saveHisList',
        payload: response,
      });
    },
    *fanZhuan({ payload }, { call, put }) {
      yield call(action, 'xiu-xing', Model.namespace, 'fanZhuan', payload);
      yield put({
        type: 'changeNeedLoad',
        payload: true,
      });
    },
  },
  reducers: {
    saveHisList(state, { payload }) {
      return { ...state, hisList: payload, his: payload };
    },
    searchHisList(state, { payload }) {
      const { his } = state;
      const { congFenLei, congName } = payload;
      if (his && Object.keys(his).length > 0) {
        if (congFenLei || congName) {
          if (congFenLei) {
            const congInfoList = his[congFenLei];
            if (congInfoList && congInfoList.length > 0) {
              if (congName) {
                const congInfos = congInfoList.filter(congInfo => congInfo.congName.indexOf(congName) !== -1);
                if (congInfos && congInfos.length > 0) {
                  return { ...state, hisList: { [congFenLei]: congInfos } };
                }
                return { ...state, hisList: {} };
              }
              return { ...state, hisList: { [congFenLei]: congInfoList } };
            }
            return { ...state, hisList: {} };
          }

          if (congName) {
            const info = {};
            Object.keys(his).forEach((data) => {
              const congInfos = his[data].filter(congInfo => congInfo.congName.indexOf(congName) !== -1);
              if (congInfos && congInfos.length > 0) {
                info[data] = congInfos;
              }
            });
            return { ...state, hisList: info };
          }
        }
        return { ...state, hisList: his };
      }
      return { ...state, hisList: {} };
    },
    emptyHisList(state) {
      return {
        ...state,
        hisList: {},
        his: {},
      };
    },
  }
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
