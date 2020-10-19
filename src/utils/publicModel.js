import {action} from "../services/action";

export function publicModel(namespace) {
  const model = {
    state: {},
    reducers: {},
  };

  const effects = {};
  effects.chuangXin = function*({ payload }, { call, put }) {
    yield call(action, 'xiu-xing', namespace, 'chuangXin', payload);
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  model.effects = effects;
  return model;
}

