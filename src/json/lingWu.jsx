const lingWu = {
  "id": "23",
  "funcCode": "lingWu",
  "funcName": "灵物",
  "state": "A",
  "stateTime": "2020-06-25 11:29:35",
  "seq": 23,
  "dictList": [
    {
      "id": "17",
      "funcId": "23",
      "dictName": "灵物分类",
      "dictCode": "lingWuFenLei",
      "seq": 1,
      "version": 0,
      "dictDataList": [
        {
          "id": "152",
          "dictId": "17",
          "dataName": "妖兽",
          "dataCode": "yaoShou",
          "seq": 1,
          "version": 0
        },
        {
          "id": "153",
          "dictId": "17",
          "dataName": "符箓",
          "dataCode": "fuLu",
          "seq": 2,
          "version": 0
        },
        {
          "id": "154",
          "dictId": "17",
          "dataName": "功法",
          "dataCode": "gongFa",
          "seq": 3,
          "version": 0
        },
        {
          "id": "155",
          "dictId": "17",
          "dataName": "灵材",
          "dataCode": "lingCai",
          "seq": 4,
          "version": 0
        },
        {
          "id": "156",
          "dictId": "17",
          "dataName": "傀儡",
          "dataCode": "kuiLei",
          "seq": 5,
          "version": 0
        },
        {
          "id": "157",
          "dictId": "17",
          "dataName": "法术",
          "dataCode": "faShu",
          "seq": 6,
          "version": 0
        },
        {
          "id": "158",
          "dictId": "17",
          "dataName": "法器",
          "dataCode": "faQi",
          "seq": 7,
          "version": 0
        },
        {
          "id": "159",
          "dictId": "17",
          "dataName": "其他灵物",
          "dataCode": "qiTaLingWu",
          "seq": 8,
          "version": 0
        },
        {
          "id": "160",
          "dictId": "17",
          "dataName": "灵丹",
          "dataCode": "lingDan",
          "seq": 9,
          "version": 0
        },
        {
          "id": "161",
          "dictId": "17",
          "dataName": "阵法",
          "dataCode": "zhenFa",
          "seq": 10,
          "version": 0
        },
        {
          "id": "162",
          "dictId": "17",
          "dataName": "人物",
          "dataCode": "renWu",
          "seq": 11,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "50975e7401234139eaf24745d89dd9ea",
      "funcId": "23",
      "name": "操作记录",
      "code": "opt"
    },
    {
      "id": "58",
      "funcId": "23",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "59",
      "funcId": "23",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "60",
      "funcId": "23",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "23",
      "modelName": "灵物",
      "modelCode": "lingWu",
      "funcModelCode": "lingWu",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "190",
          "modelId": "23",
          "columnName": "id",
          "columnCode": "id",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 1,
          "requiredFlag": "Y",
          "searchFlag": "N",
          "profileDisplayFlag": "N",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "Y",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "191",
          "modelId": "23",
          "columnName": "灵物代码",
          "columnCode": "lingWuCode",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 3,
          "requiredFlag": "Y",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "192",
          "modelId": "23",
          "columnName": "灵物名称",
          "columnCode": "lingWuName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 5,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "193",
          "modelId": "23",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=lingWuFenLei",
          "seq": 7,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "N",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "29ac9079dbf061a7d7f1e2e9ad08254a",
          "modelId": "23",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLeiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 7,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "0a0daf7905d2b0b61d427a6ea684229c",
          "modelId": "23",
          "columnName": "修行岁月",
          "columnCode": "xiuXingSuiYue",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 9,
          "requiredFlag": "N",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "195",
          "modelId": "23",
          "columnName": "灵物描述",
          "columnCode": "lingWuMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 11,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderMiaoShu",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "196",
          "modelId": "23",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 13,
          "requiredFlag": "N",
          "searchFlag": "Y",
          "profileDisplayFlag": "N",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "197",
          "modelId": "23",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 15,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": "110px",
          "titleFlag": "N",
          "state": "A"
        }
      ],
      "actionList": [
        {
          "id": "100",
          "modelId": "23",
          "type": "N",
          "code": "query",
          "servId": "23",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "101",
          "modelId": "23",
          "type": "N",
          "code": "get",
          "servId": "23",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
        },
        {
          "id": "102",
          "modelId": "23",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "23",
          "servAction": "add",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
        },
        {
          "id": "a8332b271c8fec908bf977fa92daf212",
          "modelId": "23",
          "type": "L",
          "code": "opt",
          "name": "操作记录",
          "servId": "23",
          "servAction": "opt",
          "defaultFlag": "N",
          "propFlag": "N",
          "seq": 5
        },
        {
          "id": "103",
          "modelId": "23",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "23",
          "servAction": "update",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 7
        },
        {
          "id": "104",
          "modelId": "23",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "23",
          "servAction": "delete",
          "defaultFlag": "Y",
          "disableRule": "(data,column) => data.lingWuHisCount > 0",
          "propFlag": "Y",
          "seq": 9
        }
      ]
    }
  ]
};

export function lingWuMetaModel() {
  return lingWu;
}
