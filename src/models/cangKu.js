import {createModel} from "../utils/metaModel";
import {getCangKuList} from "../services/cangKu";

const Model = {
  namespace: 'cangKu',
  state: {
    cangKuList: [],
  },
  effects: {
    *getCangKuList({ payload }, { call, put }) {
      const response = yield call(getCangKuList, payload);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
  },
  reducers: {
    saveList(state, { payload }) {
      return { ...state, cangKuList: payload };
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
