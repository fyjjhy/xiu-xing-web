import {createModel} from "../utils/metaModel";
import { getAddrTypeAddrList } from '../services/address';

const Model = {
  namespace: 'address',
  state: {
    addrList: [],
  },
  effects: {
    *getAddrTypeAddrList({ payload }, { call, put }) {
      const response = yield call(getAddrTypeAddrList, payload);
      yield put({
        type: 'saveAddrList',
        payload: response,
      });
    },
  },
  reducers: {
    saveAddrList(state, { payload }) {
      return { ...state, addrList: payload };
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
