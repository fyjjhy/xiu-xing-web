const lingWu = {
  "id": "23",
  "icon": null,
  "funcCode": "lingWu",
  "funcName": "灵物",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-25 11:29:35",
  "seq": 22,
  "indexUrl": null,
  "dictList": [
    {
      "id": "17",
      "funcId": "23",
      "dictName": "灵物分类",
      "dictCode": "lingWuFenLei",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 1,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "152",
          "dictId": "17",
          "dataName": "妖兽",
          "dataCode": "yaoShou",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "153",
          "dictId": "17",
          "dataName": "符箓",
          "dataCode": "fuLu",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "154",
          "dictId": "17",
          "dataName": "功法",
          "dataCode": "gongFa",
          "seq": 3,
          "spId": null,
          "version": 0
        },
        {
          "id": "155",
          "dictId": "17",
          "dataName": "灵材",
          "dataCode": "lingCai",
          "seq": 4,
          "spId": null,
          "version": 0
        },
        {
          "id": "156",
          "dictId": "17",
          "dataName": "傀儡",
          "dataCode": "kuiLei",
          "seq": 5,
          "spId": null,
          "version": 0
        },
        {
          "id": "157",
          "dictId": "17",
          "dataName": "法术",
          "dataCode": "faShu",
          "seq": 6,
          "spId": null,
          "version": 0
        },
        {
          "id": "158",
          "dictId": "17",
          "dataName": "法器",
          "dataCode": "faQi",
          "seq": 7,
          "spId": null,
          "version": 0
        },
        {
          "id": "159",
          "dictId": "17",
          "dataName": "其他灵物",
          "dataCode": "qiTaLingWu",
          "seq": 8,
          "spId": null,
          "version": 0
        },
        {
          "id": "160",
          "dictId": "17",
          "dataName": "灵丹",
          "dataCode": "lingDan",
          "seq": 9,
          "spId": null,
          "version": 0
        },
        {
          "id": "161",
          "dictId": "17",
          "dataName": "阵法",
          "dataCode": "zhenFa",
          "seq": 10,
          "spId": null,
          "version": 0
        },
        {
          "id": "162",
          "dictId": "17",
          "dataName": "人物",
          "dataCode": "renWu",
          "seq": 11,
          "spId": null,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "58",
      "funcId": "23",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "59",
      "funcId": "23",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "60",
      "funcId": "23",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "23",
      "parentModelId": null,
      "relationship": null,
      "modelName": "灵物",
      "modelCode": "lingWu",
      "funcModelCode": "lingWu",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "title": null,
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "childColumnCode": null,
      "parentColumnCode": null,
      "position": "1",
      "state": null,
      "stateTime": null,
      "columnList": [
        {
          "id": "190",
          "modelId": "23",
          "columnName": "id",
          "columnCode": "id",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "Y",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "191",
          "modelId": "23",
          "columnName": "灵物代码",
          "columnCode": "lingWuCode",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "192",
          "modelId": "23",
          "columnName": "灵物名称",
          "columnCode": "lingWuName",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "200",
          "modelId": "23",
          "columnName": "灵物状态",
          "columnCode": "lingWuState",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 6,
          "requiredFlag": "N",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "193",
          "modelId": "23",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLei",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "dict|lingWuFenLei",
          "seq": 7,
          "requiredFlag": "N",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "194",
          "modelId": "23",
          "columnName": "灵物属性",
          "columnCode": "lingWuShuXing",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 9,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderLingWuShuXing",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "195",
          "modelId": "23",
          "columnName": "灵物描述",
          "columnCode": "lingWuMiaoShu",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "T",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": "renderLingWuMiaoShu",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "196",
          "modelId": "23",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 13,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "N",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "197",
          "modelId": "23",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 15,
          "requiredFlag": "Y",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": "110px",
          "titleFlag": "N"
        }
      ],
      "actionList": [
        {
          "id": "100",
          "modelId": "23",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "23",
          "servAction": "query",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": null,
          "displayType": null,
          "icon": null
        },
        {
          "id": "101",
          "modelId": "23",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "23",
          "servAction": "get",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": null,
          "displayType": null,
          "icon": null
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
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": null,
          "displayType": "primary",
          "icon": null
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
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": null,
          "displayType": null,
          "icon": null
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
          "disableRule": null,
          "propFlag": "Y",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": null,
          "displayType": null,
          "icon": null
        }
      ]
    }
  ]
};

export function lingWuMetaModel() {
  return lingWu;
}
