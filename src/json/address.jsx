const address = {
  "id": "27",
  "icon": null,
  "funcCode": "address",
  "funcName": "地址",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-29 15:01:19",
  "seq": 27,
  "indexUrl": null,
  "dictList": [
    {
      "id": "24",
      "funcId": "27",
      "dictName": "地址级别",
      "dictCode": "addrType",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 1,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "247",
          "dictId": "24",
          "dataName": "1",
          "dataCode": "1",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "248",
          "dictId": "24",
          "dataName": "2",
          "dataCode": "2",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "250",
          "dictId": "24",
          "dataName": "4",
          "dataCode": "4",
          "seq": 4,
          "spId": null,
          "version": 0
        },
        {
          "id": "272",
          "dictId": "24",
          "dataName": "6",
          "dataCode": "6",
          "seq": 6,
          "spId": null,
          "version": 0
        },
        {
          "id": "274",
          "dictId": "24",
          "dataName": "8",
          "dataCode": "8",
          "seq": 8,
          "spId": null,
          "version": 0
        },
        {
          "id": "276",
          "dictId": "24",
          "dataName": "10",
          "dataCode": "10",
          "seq": 10,
          "spId": null,
          "version": 0
        },
        {
          "id": "278",
          "dictId": "24",
          "dataName": "12",
          "dataCode": "12",
          "seq": 12,
          "spId": null,
          "version": 0
        },
        {
          "id": "280",
          "dictId": "24",
          "dataName": "14",
          "dataCode": "14",
          "seq": 14,
          "spId": null,
          "version": 0
        },
        {
          "id": "282",
          "dictId": "24",
          "dataName": "16",
          "dataCode": "16",
          "seq": 16,
          "spId": null,
          "version": 0
        },
        {
          "id": "284",
          "dictId": "24",
          "dataName": "18",
          "dataCode": "18",
          "seq": 18,
          "spId": null,
          "version": 0
        },
        {
          "id": "286",
          "dictId": "24",
          "dataName": "20",
          "dataCode": "20",
          "seq": 20,
          "spId": null,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "64",
      "funcId": "27",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "65",
      "funcId": "27",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "66",
      "funcId": "27",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "27",
      "parentModelId": null,
      "relationship": null,
      "modelName": "地址",
      "modelCode": "address",
      "funcModelCode": "address",
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
          "id": "253",
          "modelId": "27",
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
          "id": "04943b7f1d0a717c4010f7fa23677ac6",
          "modelId": "27",
          "columnName": "地址级别",
          "columnCode": "addrType",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "CF",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "dict|addrType",
          "seq": 2,
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
          "id": "254",
          "modelId": "27",
          "columnName": "地址编码",
          "columnCode": "addrCode",
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
          "id": "f143ef6f56cea95041547c62b848eb6a",
          "modelId": "27",
          "columnName": "父级地址",
          "columnCode": "pId",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "CF",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "service|/xiuXing/address|addrType",
          "seq": 4,
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
          "id": "255",
          "modelId": "27",
          "columnName": "地址名称",
          "columnCode": "addrName",
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
          "id": "256",
          "modelId": "27",
          "columnName": "地址全称",
          "columnCode": "fullName",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "T",
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
          "id": "257",
          "modelId": "27",
          "columnName": "地址描述",
          "columnCode": "addrMiaoShu",
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
          "columnWidth": "300px",
          "titleFlag": "N"
        },
        {
          "id": "259",
          "modelId": "27",
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
          "id": "260",
          "modelId": "27",
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
          "id": "258",
          "modelId": "27",
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
          "id": "117",
          "modelId": "27",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "27",
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
          "id": "118",
          "modelId": "27",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "27",
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
          "id": "119",
          "modelId": "27",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "27",
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
          "id": "120",
          "modelId": "27",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "27",
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
          "id": "121",
          "modelId": "27",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "27",
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

export function addressMetaModel() {
  return address;
}