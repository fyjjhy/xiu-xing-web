const zhenFa = {
  "id": "8",
  "icon": null,
  "funcCode": "zhenFa",
  "funcName": "阵法",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-13 14:04:54",
  "seq": 8,
  "indexUrl": null,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "13",
      "funcId": "8",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "14",
      "funcId": "8",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "15",
      "funcId": "8",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "8",
      "parentModelId": null,
      "relationship": null,
      "modelName": "阵法",
      "modelCode": "zhenFa",
      "funcModelCode": "zhenFa",
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
          "id": "46",
          "modelId": "8",
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
          "id": "47",
          "modelId": "8",
          "columnName": "阵法代码",
          "columnCode": "zhenFaCode",
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
          "id": "48",
          "modelId": "8",
          "columnName": "阵法名称",
          "columnCode": "zhenFaName",
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
          "id": "49",
          "modelId": "8",
          "columnName": "阵法属性",
          "columnCode": "zhenFaShuXing",
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
          "id": "50",
          "modelId": "8",
          "columnName": "阵法描述",
          "columnCode": "zhenFaMiaoShu",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "T",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
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
          "renderList": "renderMiaoShu",
          "renderProfile": null,
          "renderEdit": null,
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "51",
          "modelId": "8",
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
          "seq": 11,
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
          "id": "52",
          "modelId": "8",
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
          "seq": 13,
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
          "id": "53",
          "modelId": "8",
          "columnName": "更新时间",
          "columnCode": "updateTime",
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
          "columnWidth": "160px",
          "titleFlag": "N"
        }
      ],
      "actionList": [
        {
          "id": "28",
          "modelId": "8",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "8",
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
          "id": "29",
          "modelId": "8",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "8",
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
          "id": "30",
          "modelId": "8",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "8",
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
          "id": "31",
          "modelId": "8",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "8",
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
          "id": "32",
          "modelId": "8",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "8",
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

export function zhenFaMetaModel() {
  return zhenFa;
}
