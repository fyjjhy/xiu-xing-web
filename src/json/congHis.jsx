const congHis = {
  id: '29',
  funcCode: 'congHis',
  funcName: '从操作记录',
  state: 'A',
  stateTime: '2020-07-18 06:54:04',
  seq: 29,
  dictList: [],
  configList: [],
  funcComponentList: [
    {
      id: '1628104742114f16b4e639e7ab08a104',
      funcId: '29',
      name: '轨迹',
      code: 'guiJi',
    },
    {
      id: '71',
      funcId: '29',
      name: '新增',
      code: 'add',
      displayType: 'primary',
    },
    {
      id: '72',
      funcId: '29',
      name: '编辑',
      code: 'update',
    },
    {
      id: '73',
      funcId: '29',
      name: '删除',
      code: 'delete',
    },
    {
      id: 'bbb015879bb042359818138a6a205862',
      funcId: '29',
      name: '创新',
      code: 'chuangXin',
    },
  ],
  metaModelList: [
    {
      id: '29',
      modelName: '从操作记录',
      modelCode: 'congHis',
      funcModelCode: 'congHis',
      searchFlag: 'Y',
      multChooseFlag: 'Y',
      masterFlag: 'Y',
      treeTableFlag: 'N',
      position: '1',
      columnList: [
        {
          id: '277',
          modelId: '29',
          columnName: 'id',
          columnCode: 'id',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'I',
          seq: 1,
          requiredFlag: 'Y',
          searchFlag: 'N',
          profileDisplayFlag: 'N',
          addTable: 'N',
          editDisplayFlag: 'N',
          editable: 'N',
          listDisplayFlag: 'N',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'Y',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
        },
        {
          id: '278',
          modelId: '29',
          columnName: '从代码',
          columnCode: 'congCode',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'I',
          seq: 3,
          requiredFlag: 'Y',
          searchFlag: 'N',
          profileDisplayFlag: 'Y',
          addTable: 'N',
          editDisplayFlag: 'N',
          editable: 'N',
          listDisplayFlag: 'Y',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
        },
        {
          id: '279',
          modelId: '29',
          columnName: '从名称',
          columnCode: 'congName',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'I',
          seq: 5,
          requiredFlag: 'Y',
          searchFlag: 'Y',
          profileDisplayFlag: 'Y',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'Y',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr02: '24',
        },
        {
          id: '280',
          modelId: '29',
          columnName: '从分类',
          columnCode: 'congFenLei',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'S',
          valueList: 'service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei',
          seq: 7,
          requiredFlag: 'Y',
          searchFlag: 'Y',
          profileDisplayFlag: 'N',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'N',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr02: '12',
        },
        {
          id: 'd0f3e5f3980fb0285d0eef67074aa7b7',
          modelId: '29',
          columnName: '从分类',
          columnCode: 'congFenLeiName',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'I',
          seq: 9,
          requiredFlag: 'N',
          searchFlag: 'N',
          profileDisplayFlag: 'Y',
          addTable: 'N',
          editDisplayFlag: 'N',
          editable: 'N',
          listDisplayFlag: 'Y',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
        },
        {
          id: '232543c278d640b6a2f694397437aa3e',
          modelId: '29',
          columnName: '更新时间',
          columnCode: 'updateTime',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'DTP',
          seq: 13,
          requiredFlag: 'N',
          searchFlag: 'N',
          profileDisplayFlag: 'Y',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'N',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr02: '12',
        },
        {
          id: '52237f35b45947b68b3169b0bd3ddd4e',
          modelId: '29',
          columnName: '从地址',
          columnCode: 'addrId',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'CF',
          valueList: 'service|/xiuXing/common/xiu-xing/address',
          seq: 15,
          requiredFlag: 'N',
          searchFlag: 'N',
          profileDisplayFlag: 'N',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'N',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr02: '24',
        },
        {
          id: '284',
          modelId: '29',
          columnName: '从小说',
          columnCode: 'xiaoShuoName',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'I',
          seq: 17,
          requiredFlag: 'N',
          searchFlag: 'N',
          profileDisplayFlag: 'Y',
          addTable: 'N',
          editDisplayFlag: 'N',
          editable: 'N',
          listDisplayFlag: 'Y',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          columnWidth: '110px',
          titleFlag: 'N',
          state: 'A',
        },
        {
          id: 'fca01a9a8dfb4b04bbd942f5ce0d338d',
          modelId: '29',
          columnName: '从章节',
          columnCode: 'zhangJieId',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'CF',
          valueList: 'service|/xiuXing/common/xiu-xing/zhangJie',
          seq: 19,
          requiredFlag: 'N',
          searchFlag: 'N',
          profileDisplayFlag: 'N',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'N',
          exportDisplayFlag: 'N',
          sortable: 'N',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr02: '24',
        },
        {
          id: '282',
          modelId: '29',
          columnName: '从描述',
          columnCode: 'congMiaoShu',
          valueType: 'S',
          modifyFlag: 'N',
          displayType: 'T',
          seq: 21,
          requiredFlag: 'N',
          searchFlag: 'Y',
          profileDisplayFlag: 'Y',
          addTable: 'Y',
          editDisplayFlag: 'N',
          editable: 'Y',
          listDisplayFlag: 'Y',
          exportDisplayFlag: 'N',
          sortable: 'N',
          renderList: 'renderMiaoShu',
          primaryFlag: 'N',
          feignFlag: 'N',
          titleFlag: 'N',
          state: 'A',
          extStr01: 'Y',
          extStr02: '24',
        },
      ],
      actionList: [
        {
          id: '127',
          modelId: '29',
          type: 'N',
          code: 'query',
          servId: '29',
          servAction: 'query',
          defaultFlag: 'Y',
          propFlag: 'N',
          seq: 1,
        },
        {
          id: '128',
          modelId: '29',
          type: 'N',
          code: 'get',
          servId: '29',
          servAction: 'get',
          defaultFlag: 'Y',
          propFlag: 'N',
          seq: 3,
        },
        {
          id: 'c9da280778fe40a3a95ab54a23d8dd99',
          modelId: '29',
          type: 'L',
          code: 'chuangXin',
          name: '创新',
          servId: '29',
          servAction: 'chuangXin',
          defaultFlag: 'N',
          propFlag: 'Y',
          propMsg: '创新：创建新的从信息，并移除该信息。',
          seq: 7,
        },
        {
          id: '130',
          modelId: '29',
          type: 'L',
          code: 'update',
          name: '编辑',
          servId: '29',
          servAction: 'update',
          defaultFlag: 'Y',
          propFlag: 'Y',
          propMsg: '编辑属性值：\r\n1、从无值到有值；\r\n2、从有值到有值。',
          seq: 9,
        },
        {
          id: '15707a376a614f6f9076c9075e27770a',
          modelId: '29',
          type: 'L',
          code: 'guiJi',
          name: '轨迹',
          servId: '29',
          servAction: 'guiJi',
          defaultFlag: 'N',
          propFlag: 'N',
          seq: 11,
        },
        {
          id: '131',
          modelId: '29',
          type: 'L',
          code: 'delete',
          name: '删除',
          servId: '29',
          servAction: 'delete',
          defaultFlag: 'Y',
          disableRule: '(data,column) => data.congHisCount>0',
          propFlag: 'Y',
          seq: 13,
        },
      ],
    },
  ],
};

export function congHisMetaModel() {
  return congHis;
}
