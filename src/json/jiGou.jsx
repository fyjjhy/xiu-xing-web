const jiGou = {
  "id": "19",
  "icon": null,
  "funcCode": "jiGou",
  "funcName": "机构",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-16 14:20:13",
  "seq": 19,
  "indexUrl": null,
  "dictList": [
    {
      "id": "8",
      "funcId": "19",
      "dictName": "机构分类",
      "dictCode": "jiGouFenLei",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 1,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "44",
          "dictId": "8",
          "dataName": "亭",
          "dataCode": "亭",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "45",
          "dictId": "8",
          "dataName": "台",
          "dataCode": "台",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "46",
          "dictId": "8",
          "dataName": "楼",
          "dataCode": "楼",
          "seq": 3,
          "spId": null,
          "version": 0
        },
        {
          "id": "47",
          "dictId": "8",
          "dataName": "阁",
          "dataCode": "阁",
          "seq": 4,
          "spId": null,
          "version": 0
        },
        {
          "id": "48",
          "dictId": "8",
          "dataName": "殿",
          "dataCode": "殿",
          "seq": 5,
          "spId": null,
          "version": 0
        },
        {
          "id": "49",
          "dictId": "8",
          "dataName": "馆",
          "dataCode": "馆",
          "seq": 6,
          "spId": null,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "46",
      "funcId": "19",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "47",
      "funcId": "19",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "48",
      "funcId": "19",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "19",
      "parentModelId": null,
      "relationship": null,
      "modelName": "机构",
      "modelCode": "jiGou",
      "funcModelCode": "jiGou",
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
          "id": "142",
          "modelId": "19",
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
          "id": "143",
          "modelId": "19",
          "columnName": "机构代码",
          "columnCode": "jiGouCode",
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
          "id": "144",
          "modelId": "19",
          "columnName": "机构名称",
          "columnCode": "jiGouName",
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
          "id": "145",
          "modelId": "19",
          "columnName": "机构分类",
          "columnCode": "jiGouFenLei",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "dict|jiGouFenLei",
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
          "id": "146",
          "modelId": "19",
          "columnName": "机构描述",
          "columnCode": "jiGouMiaoShu",
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
          "id": "147",
          "modelId": "19",
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
          "id": "148",
          "modelId": "19",
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
          "id": "149",
          "modelId": "19",
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
          "id": "83",
          "modelId": "19",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "19",
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
          "id": "84",
          "modelId": "19",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "19",
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
          "id": "85",
          "modelId": "19",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "19",
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
          "id": "86",
          "modelId": "19",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "19",
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
          "id": "87",
          "modelId": "19",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "19",
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

export function jiGouMetaModel() {
  return jiGou;
}
