const lingWuHis = {
  "id": "29",
  "icon": null,
  "funcCode": "lingWuHis",
  "funcName": "灵物操作记录",
  "state": "A",
  "comments": null,
  "stateTime": "2020-07-18 06:54:04",
  "seq": 29,
  "indexUrl": null,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "71",
      "funcId": "29",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "72",
      "funcId": "29",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "73",
      "funcId": "29",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "29",
      "parentModelId": null,
      "relationship": null,
      "modelName": "灵物操作记录",
      "modelCode": "lingWuHis",
      "funcModelCode": "lingWuHis",
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
          "id": "277",
          "modelId": "29",
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
          "id": "278",
          "modelId": "29",
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
          "id": "279",
          "modelId": "29",
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
          "id": "280",
          "modelId": "29",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLei",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
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
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "281",
          "modelId": "29",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLeiName",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": null,
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "282",
          "modelId": "29",
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
          "renderList": "renderMiaoShu",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": "300px",
          "titleFlag": "N"
        },
        {
          "id": "283",
          "modelId": "29",
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
          "requiredFlag": "N",
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
          "id": "284",
          "modelId": "29",
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
          "requiredFlag": "N",
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
          "id": "127",
          "modelId": "29",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "29",
          "servAction": "query",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 1,
          "displayType": null,
          "icon": null
        },
        {
          "id": "128",
          "modelId": "29",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "29",
          "servAction": "get",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 2,
          "displayType": null,
          "icon": null
        },
        {
          "id": "129",
          "modelId": "29",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "29",
          "servAction": "add",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 3,
          "displayType": "primary",
          "icon": null
        },
        {
          "id": "130",
          "modelId": "29",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "29",
          "servAction": "update",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 5,
          "displayType": null,
          "icon": null
        },
        {
          "id": "131",
          "modelId": "29",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "29",
          "servAction": "delete",
          "defaultFlag": "Y",
          "disableRule": null,
          "propFlag": "Y",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 6,
          "displayType": null,
          "icon": null
        }
      ]
    }
  ]
};

export function lingWuHisMetaModel() {
  return lingWuHis;
}