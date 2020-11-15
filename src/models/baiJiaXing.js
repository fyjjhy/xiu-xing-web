import {createModel} from "../utils/metaModel";

const Model = {
  namespace: 'baiJiaXing',
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
