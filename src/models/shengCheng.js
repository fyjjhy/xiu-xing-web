import {createModel} from "../utils/metaModel";
import {generateList} from "../services/shengCheng";

const Model = {
  namespace: 'shengCheng',
  state: {
    generateList: [],
  },
  effects: {
    *generateList({ payload }, { call, put }) {
      const response = yield call(generateList, payload);
      yield put({
        type: 'saveList',
        payload: response,
      });
    },
  },
  reducers: {
    saveList(state, { payload }) {
      return { ...state, generateList: payload };
    },
    resetGenerateList(state) {
      return {
        ...state,
        generateList: [],
      };
    },
    filterGenerateList(state, { payload }) {
      return {
        ...state,
        generateList: state.generateList.filter(generate => generate !== payload),
      };
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
