import { createModel } from '../utils/metaModel';
import { action } from '../services/action';

const Model = {
  namespace: 'xiaoShuo',
  state: {
    xiaoShuoList: [],
  },
  effects: {
    *list({ payload }, { call, put }) {
      const response = yield call(action, 'xiu-xing', Model.namespace, 'list', payload);
      yield put({
        type: 'saveXiaoShuoList',
        payload: response,
      });
    },
  },
  reducers: {
    saveXiaoShuoList(state, { payload }) {
      return { ...state, xiaoShuoList: payload };
    },
    emptyXiaoShuoList(state) {
      return {
        ...state,
        xiaoShuoList: [],
      };
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state };
Model.reducers = { ...metaModel.reducers, ...Model.reducers };
Model.effects = { ...metaModel.effects, ...Model.effects };
export default Model;
