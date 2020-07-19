import {createModel} from "../utils/metaModel";

const Model = {
  namespace: 'suoShuHis',
};
const metaModel = createModel(Model.namespace);
Model.state = Object.assign({}, metaModel.state, Model.state);
Model.reducers = Object.assign({}, metaModel.reducers, Model.reducers);
Model.effects = Object.assign({}, metaModel.effects, Model.effects);
export default Model;
