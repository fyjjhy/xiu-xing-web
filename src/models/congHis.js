import {createModel} from "../utils/metaModel";
import {publicModel} from "../utils/publicModel";

const Model = {
  namespace: 'congHis',
};
const metaModel = createModel(Model.namespace);
const commonModel = publicModel(Model.namespace);
Model.state = { ...commonModel.state, ...metaModel.state, ...Model.state};
Model.reducers = { ...commonModel.reducers, ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...commonModel.effects, ...metaModel.effects, ...Model.effects};
export default Model;
