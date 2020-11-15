import {createModel} from "../utils/metaModel";

const Model = {
  namespace: 'renWu',
  state: {
    his: {
      list: [],
      pagination:{
        current: 1,
        pageSize: 10,
      }
    }
  },
  reducers: {
    changeHis(state, { payload }) {
      return { ...state, his: {...payload} };
    },
    emptyRenWuHis(state) {
      return {
        ...state,
        his: {},
      };
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
