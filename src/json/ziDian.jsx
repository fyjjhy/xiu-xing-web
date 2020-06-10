const ziDian = {
  "id": "2",
  "icon": null,
  "funcCode": "ziDian",
  "funcName": "字典",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-10 14:31:23",
  "seq": 2,
  "indexUrl": null,
  "dictList": [
    {
      "id": "3",
      "funcId": "2",
      "dictName": "字级",
      "dictCode": "ziJi",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 1,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "22",
          "dictId": "3",
          "dataName": "一级字",
          "dataCode": "一级字",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "23",
          "dictId": "3",
          "dataName": "二级字",
          "dataCode": "二级字",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "24",
          "dictId": "3",
          "dataName": "三级字",
          "dataCode": "三级字",
          "seq": 3,
          "spId": null,
          "version": 0
        }
      ]
    },
    {
      "id": "4",
      "funcId": "2",
      "dictName": "声调",
      "dictCode": "shengDiao",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 2,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "25",
          "dictId": "4",
          "dataName": "轻声",
          "dataCode": "0",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "26",
          "dictId": "4",
          "dataName": "第一声",
          "dataCode": "1",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "27",
          "dictId": "4",
          "dataName": "第二声",
          "dataCode": "2",
          "seq": 3,
          "spId": null,
          "version": 0
        },
        {
          "id": "28",
          "dictId": "4",
          "dataName": "第三声",
          "dataCode": "3",
          "seq": 4,
          "spId": null,
          "version": 0
        },
        {
          "id": "29",
          "dictId": "4",
          "dataName": "第四声",
          "dataCode": "4",
          "seq": 5,
          "spId": null,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [],
  "metaModelList": [
    {
      "id": "2",
      "parentModelId": null,
      "relationship": null,
      "modelName": "字典",
      "modelCode": "ziDian",
      "funcModelCode": "ziDian",
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
          "id": "12",
          "modelId": "2",
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
          "id": "13",
          "modelId": "2",
          "columnName": "字名",
          "columnCode": "ziName",
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
          "columnWidth": "60px",
          "titleFlag": "N"
        },
        {
          "id": "14",
          "modelId": "2",
          "columnName": "字级",
          "columnCode": "ziJi",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "dict|ziJi",
          "seq": 5,
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
          "columnWidth": "80px",
          "titleFlag": "N"
        },
        {
          "id": "15",
          "modelId": "2",
          "columnName": "拼音",
          "columnCode": "pinYin",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 7,
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
          "columnWidth": "65px",
          "titleFlag": "N"
        },
        {
          "id": "16",
          "modelId": "2",
          "columnName": "声调",
          "columnCode": "shengDiao",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "dict|shengDiao",
          "seq": 9,
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
          "columnWidth": "65px",
          "titleFlag": "N"
        },
        {
          "id": "17",
          "modelId": "2",
          "columnName": "字义",
          "columnCode": "xinHuaZiDian",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "T",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 11,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderXinHuaZiDian",
          "renderProfile": "renderProfileXinHuaZiDian",
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "18",
          "modelId": "2",
          "columnName": "组词词头",
          "columnCode": "zuCiTou",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 13,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderZuCiTou",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "19",
          "modelId": "2",
          "columnName": "组词词中",
          "columnCode": "zuCiZhong",
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
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderZuCiZhong",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "20",
          "modelId": "2",
          "columnName": "组词词尾",
          "columnCode": "zuCiWei",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 17,
          "requiredFlag": "Y",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "Y",
          "editDisplayFlag": "N",
          "editable": "Y",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderZuCiWei",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        }
      ],
      "actionList": [
        {
          "id": "7",
          "modelId": "2",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "2",
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
          "id": "8",
          "modelId": "2",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "2",
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
        }
      ]
    }
  ]
};

export function ziDianMetaModel() {
  return ziDian;
}