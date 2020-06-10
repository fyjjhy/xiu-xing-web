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
Model.state = Object.assign({}, metaModel.state, Model.state);
Model.reducers = Object.assign({}, metaModel.reducers, Model.reducers);
Model.effects = Object.assign({}, metaModel.effects, Model.effects);
export default Model;
