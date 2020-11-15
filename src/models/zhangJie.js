/* eslint-disable no-restricted-syntax,guard-for-in */
import {createModel} from "../utils/metaModel";
import { action } from "../services/action";

const Model = {
  namespace: 'zhangJie',
  state: {
    congShuInfoList: [],
    juInfoList: [],
    sanInfoList: [],
    congShuGuiJiList: [],
    juGuiJiList: [],
    sanGuiJiList: [],
  },
  effects: {
    *getInfoList({ payload }, { call, put }) {
      const response = yield call(action, 'xiu-xing', Model.namespace, 'info', payload);
      yield put({
        type: 'saveInfo',
        payload: response,
      });
    },
    *getGuiJiList({ payload }, { call, put }) {
      const response = yield call(action, 'xiu-xing', Model.namespace, 'guiJi', payload);
      yield put({
        type: 'saveGuiJi',
        payload: response,
      });
    },
  },
  reducers: {
    juSanSwitch(state, { payload }) {
      const congShuInfo = { ...state };
      if (payload === '聚') {
        congShuInfo.congShuInfoList = state.juInfoList;
      } else if (payload === '散') {
        congShuInfo.congShuInfoList = state.sanInfoList;
      }
      return congShuInfo;
    },
    juSanGuiJiSwitch(state, { payload }) {
      const congShuGuiJi = { ...state };
      if (payload === '聚') {
        congShuGuiJi.congShuGuiJiList = state.juGuiJiList;
      } else if (payload === '散') {
        congShuGuiJi.congShuGuiJiList = state.sanGuiJiList;
      }
      return congShuGuiJi;
    },
    emptyCongShuInfoList(state) {
      return {
        ...state,
        congShuInfoList: [],
        juInfoList: [],
        sanInfoList: [],
      };
    },
    emptyCongShuGuiJiList(state) {
      return {
        ...state,
        congShuGuiJiList: [],
        juGuiJiList: [],
        sanGuiJiList: [],
      };
    },
    saveInfo(state, { payload }) {
      const congShuInfo = { ...state, congShuInfoList: [], sanInfoList: [], juInfoList: [] };
      if (payload && payload.length > 0) {
        const infoList = [...payload];
        const info = {};
        infoList.forEach(dataInfo => {
          let congShuList = info[dataInfo.addrFullName];
          if (!congShuList) {
            congShuList = [];
          }
          congShuList.push(dataInfo);
          info[dataInfo.addrFullName] = congShuList;
        });
        if (info && Object.keys(info).length > 0) {
          const result = [];
          // 对值进行排序
          Object.keys(info).sort().forEach(key => {
            const zhangJieInfo = {};
            zhangJieInfo.addrFullName = key;
            if (info[key] && info[key].length > 0) {
              zhangJieInfo.congShuList = info[key].map((dataInfo, index) => {
                const seq = index + 1;
                return {...dataInfo, seq};
              })
            } else {
              zhangJieInfo.congShuList = [];
            }
            result.push(zhangJieInfo);
          });
          congShuInfo.sanInfoList = result;
          congShuInfo.congShuInfoList = result;
        }
      }
      if (payload && payload.length > 0) {
        const infoList = [...payload];
        const congInfo = {};
        const shuInfo = {};
        const cangKuCongInfo = {};
        infoList.forEach(dataInfo => {
          if (dataInfo.congShuType === '从') {
            let congHis = congInfo[dataInfo.congShuHisId];
            if (!congHis) {
              congHis = {...dataInfo};
            }
            if (!(congHis.fullNames && congHis.fullNames.length > 0)) {
              congHis.fullNames = [];
            }
            if (!congHis.fullNames.includes(dataInfo.addrFullName)) {
              congHis.fullNames.push(dataInfo.addrFullName);
            }
            congInfo[dataInfo.congShuHisId] = congHis;
          } else if (dataInfo.congShuType === '属') {
            let shuHis = shuInfo[dataInfo.congShuHisId];
            if (!shuHis) {
              shuHis = {...dataInfo};
            }
            if (!(shuHis.fullNames && shuHis.fullNames.length > 0)) {
              shuHis.fullNames = [];
            }
            if (!shuHis.fullNames.includes(dataInfo.addrFullName)) {
              shuHis.fullNames.push(dataInfo.addrFullName);
            }
            shuInfo[dataInfo.congShuHisId] = shuHis;
          } else if (dataInfo.congShuType === '仓从') {
            let cangKuCongHis = cangKuCongInfo[dataInfo.congShuHisId];
            if (!cangKuCongHis) {
              cangKuCongHis = {...dataInfo};
            }
            if (!(cangKuCongHis.fullNames && cangKuCongHis.fullNames.length > 0)) {
              cangKuCongHis.fullNames = [];
            }
            if (!cangKuCongHis.fullNames.includes(dataInfo.addrFullName)) {
              cangKuCongHis.fullNames.push(dataInfo.addrFullName);
            }
            cangKuCongInfo[dataInfo.congShuHisId] = cangKuCongHis;
          }
        });
        const juInfoList = [];
        let seq = 0;
        if (congInfo && Object.keys(congInfo).length > 0) {
          Object.keys(congInfo).sort().forEach(key => {
            if (congInfo[key]) {
              seq += 1;
              juInfoList.push({ ...congInfo[key], seq});
            }
          });
        }
        if (cangKuCongInfo && Object.keys(cangKuCongInfo).length > 0) {
          Object.keys(cangKuCongInfo).sort().forEach(key => {
            if (cangKuCongInfo[key]) {
              seq += 1;
              juInfoList.push({ ...cangKuCongInfo[key], seq});
            }
          });
        }
        if (shuInfo && Object.keys(shuInfo).length > 0) {
          Object.keys(shuInfo).sort().forEach(key => {
            if (shuInfo[key]) {
              seq += 1;
              juInfoList.push({ ...shuInfo[key], seq });
            }
          });
        }
        congShuInfo.juInfoList = juInfoList;
      }
      return congShuInfo;
    },
    saveGuiJi(state, { payload }) {
      const congShuGuiJi = { ...state, congShuGuiJiList: [], sanGuiJiList: [], juGuiJiList: [] };
      if (payload && payload.length > 0) {
        const guiJiList = [...payload];
        const guiJi = {};
        guiJiList.forEach(dataInfo => {
          let addrInfo = guiJi[dataInfo.zhangJieTitle];
          if (!addrInfo) {
            addrInfo = {};
          }
          let congShuList = addrInfo[dataInfo.addrFullName];
          if (!congShuList) {
            congShuList = [];
          }
          congShuList.push(dataInfo);
          addrInfo[dataInfo.addrFullName] = congShuList;
          guiJi[dataInfo.zhangJieTitle] = addrInfo;
        });
        if (guiJi && Object.keys(guiJi).length > 0) {
          const result = [];
          for(const zhangJieTitle in guiJi) {
            const zhangJieInfo = {};
            zhangJieInfo.zhangJieTitle = zhangJieTitle;
            const addrFullNames = [];
            for(const addrFullName in guiJi[zhangJieTitle]) {
              const addrFullNameInfo = {};
              addrFullNameInfo.addrFullName = addrFullName;
              const congShuList = guiJi[zhangJieTitle][addrFullName];
              if (congShuList && congShuList.length > 0) {
                addrFullNameInfo.congShuList = congShuList.map((congShu, congShuIndex) => {
                  return { ...congShu, seq: congShuIndex + 1 };
                })
              } else {
                addrFullNameInfo.congShuList = [];
              }
              addrFullNames.push(addrFullNameInfo);
              zhangJieInfo.addrFullNames = addrFullNames;
            }
            result.push(zhangJieInfo);
          }
          congShuGuiJi.sanGuiJiList = result;
          congShuGuiJi.congShuGuiJiList = result;
        }
      }
      if (payload && payload.length > 0) {
        const guiJiList = [...payload];
        const congGuiJi = {};
        const shuGuiJi = {};
        const cangKuCongGuiJi = {};
        guiJiList.forEach(dataInfo => {
          if (dataInfo.congShuType === '从') {
            let congHis = congGuiJi[dataInfo.congShuHisId];
            if (!congHis) {
              congHis = {...dataInfo};
            }
            if (!(congHis.fullNames && congHis.fullNames.length > 0)) {
              congHis.fullNames = [];
            }
            if (!congHis.fullNames.includes(dataInfo.addrFullName)) {
              congHis.fullNames.push(dataInfo.addrFullName);
            }
            if (!(congHis.zhangJieTitles && congHis.zhangJieTitles.length > 0)) {
              congHis.zhangJieTitles = [];
            }
            if (!congHis.zhangJieTitles.includes(dataInfo.zhangJieTitle)) {
              congHis.zhangJieTitles.push(dataInfo.zhangJieTitle);
            }
            congGuiJi[dataInfo.congShuHisId] = congHis;
          } else if (dataInfo.congShuType === '属') {
            let shuHis = shuGuiJi[dataInfo.congShuHisId];
            if (!shuHis) {
              shuHis = {...dataInfo};
            }
            if (!(shuHis.fullNames && shuHis.fullNames.length > 0)) {
              shuHis.fullNames = [];
            }
            if (!shuHis.fullNames.includes(dataInfo.addrFullName)) {
              shuHis.fullNames.push(dataInfo.addrFullName);
            }
            if (!(shuHis.zhangJieTitles && shuHis.zhangJieTitles.length > 0)) {
              shuHis.zhangJieTitles = [];
            }
            if (!shuHis.zhangJieTitles.includes(dataInfo.zhangJieTitle)) {
              shuHis.zhangJieTitles.push(dataInfo.zhangJieTitle);
            }
            shuGuiJi[dataInfo.congShuHisId] = shuHis;
          } else if (dataInfo.congShuType === '仓从') {
            let cangKuCongHis = cangKuCongGuiJi[dataInfo.congShuHisId];
            if (!cangKuCongHis) {
              cangKuCongHis = {...dataInfo};
            }
            if (!(cangKuCongHis.fullNames && cangKuCongHis.fullNames.length > 0)) {
              cangKuCongHis.fullNames = [];
            }
            if (!cangKuCongHis.fullNames.includes(dataInfo.addrFullName)) {
              cangKuCongHis.fullNames.push(dataInfo.addrFullName);
            }
            if (!(cangKuCongHis.zhangJieTitles && cangKuCongHis.zhangJieTitles.length > 0)) {
              cangKuCongHis.zhangJieTitles = [];
            }
            if (!cangKuCongHis.zhangJieTitles.includes(dataInfo.zhangJieTitle)) {
              cangKuCongHis.zhangJieTitles.push(dataInfo.zhangJieTitle);
            }
            cangKuCongGuiJi[dataInfo.congShuHisId] = cangKuCongHis;
          }
        });
        const juGuiJiList = [];
        let seq = 0;
        if (congGuiJi && Object.keys(congGuiJi).length > 0) {
          Object.keys(congGuiJi).sort().forEach(key => {
            if (congGuiJi[key]) {
              seq += 1;
              juGuiJiList.push({ ...congGuiJi[key], seq});
            }
          });
        }
        if (cangKuCongGuiJi && Object.keys(cangKuCongGuiJi).length > 0) {
          Object.keys(cangKuCongGuiJi).sort().forEach(key => {
            if (cangKuCongGuiJi[key]) {
              seq += 1;
              juGuiJiList.push({ ...cangKuCongGuiJi[key], seq});
            }
          });
        }
        if (shuGuiJi && Object.keys(shuGuiJi).length > 0) {
          Object.keys(shuGuiJi).sort().forEach(key => {
            if (shuGuiJi[key]) {
              seq += 1;
              juGuiJiList.push({ ...shuGuiJi[key], seq });
            }
          });
        }
        congShuGuiJi.juGuiJiList = juGuiJiList;
      }
      return congShuGuiJi;
    },
  },
};
const metaModel = createModel(Model.namespace);
Model.state = { ...metaModel.state, ...Model.state};
Model.reducers = { ...metaModel.reducers, ...Model.reducers};
Model.effects = { ...metaModel.effects, ...Model.effects};
export default Model;
