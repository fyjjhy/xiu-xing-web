import {createModel} from "../utils/metaModel";
import {action} from "../services/action";

const Model = {
  namespace: 'congShu',
  effects: {
    *heBing({ payload }, { call/* , put */ }) {
      yield call(action, 'xiu-xing', Model.namespace, 'heBing', payload);
      // yield put({
      //   type: 'changeNeedLoad',
      //   payload: true,
      // });
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
