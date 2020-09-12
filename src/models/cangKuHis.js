import {createModel} from "../utils/metaModel";
import {queryHisList} from "../services/cangKuHis";

const Model = {
  namespace: 'cangKuHis',
  state: {
    hisList: {},
  },
  effects: {
    *queryHisList({ payload }, { call, put }) {
      const response = yield call(queryHisList, payload);
      yield put({
        type: 'saveHisList',
        payload: response,
      });
    },
  },
  reducers: {
    saveHisList(state, { payload }) {
      return { ...state, hisList: payload };
    },
    emptyHisList(state) {
      return {
        ...state,
        hisList: {},
      };
    },
  }
};
const metaModel = createModel(Model.namespace);
Model.state = Object.assign({}, metaModel.state, Model.state);
Model.reducers = Object.assign({}, metaModel.reducers, Model.reducers);
Model.effects = Object.assign({}, metaModel.effects, Model.effects);
export default Model;
