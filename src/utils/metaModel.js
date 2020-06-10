import { add, query, get, modify, update, del, exportData, loadMetaModel } from '../services/metaModel';

export function createModel(namespace) {
  const model = {
    state: {
      datas: {
        list: [],
        pagination: {
          current: 1,
          pageSize: 10,
        },
      },
      data: {},
      metaModel: {},
      needLoad: false,
    },
  };

  model.reducers = {
    save(state, action) {
      return {
        ...state,
        datas: action.payload,
      };
    },
    saveMetaModel(state, action) {
      return {
        ...state,
        metaModel: action.payload,
      };
    },
    change(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
    changeNeedLoad(state, action) {
      return {
        ...state,
        needLoad: action.payload,
      };
    },
    emptyList(state) {
      return {
        ...state,
        datas: {
          list: [],
          pagination: {
            current: 1,
            pageSize: 10,
            total: 0,
          },
        },
      };
    },
    emptyProfile(state) {
      return {
        ...state,
        data: {},
      };
    },
    emptyMetaModel(state) {
      return {
        ...state,
        metaModel: {},
      };
    },
    exportFileData(state) {
      return {
        ...state,
        data: {},
      };
    },
    resetNeedLoad(state) {
      return {
        ...state,
        needLoad: false,
      };
    },
  };

  const effects = {};
  effects.query = function*({ payload }, { call, put }) {
    const response = yield call(query, 'xiu-xing', namespace, payload);
    yield put({
      type: 'save',
      payload: response,
    });
    yield put({
      type: 'changeNeedLoad',
      payload: false,
    });
  };

  effects.export = function*({ payload }, { call, put }) {
    const response = yield call(exportData, 'xiu-xing', namespace, payload);
    yield put({
      type: 'exportFileData',
      payload: response,
    });
  };

  effects.get = function*({ payload }, { call, put }) {
    const response = yield call(get, 'xiu-xing', namespace, payload);
    yield put({
      type: 'change',
      payload: response,
    });
  };

  effects.add = function*({ payload }, { call, put }) {
    const response = yield call(add, 'xiu-xing', namespace, payload, null, null);
    yield put({
      type: 'change',
      payload: response,
    });
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  effects.modify = function*({ payload }, { call, put }) {
    const response = yield call(modify, 'xiu-xing', namespace, payload, null, null);
    yield put({
      type: 'change',
      payload: response,
    });
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  effects.update = function*({ payload }, { call, put }) {
    const response = yield call(update, 'xiu-xing', namespace, payload, null, null);
    yield put({
      type: 'change',
      payload: response,
    });
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  effects.delete = function*({ payload }, { call, put }) {
    yield call(del, 'xiu-xing', namespace, payload, null, null);
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  effects.import = function*({ put }) {
    yield put({
      type: 'changeNeedLoad',
      payload: true,
    });
  };

  effects.metaModel = function*({ payload }, { call, put }) {
    const response = yield call(loadMetaModel, payload);
    yield put({
      type: 'saveMetaModel',
      payload: response,
    });
  };

  model.effects = effects;

  return model;
}

export function getMetaModel(metaModelList, position) {
  return metaModelList.filter(m => (m.position === position))[0];
}

