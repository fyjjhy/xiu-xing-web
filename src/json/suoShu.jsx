const suoShu = {
  "id": "22",
  "icon": null,
  "funcCode": "suoShu",
  "funcName": "所属",
  "state": "A",
  "comments": null,
  "stateTime": "2020-06-25 02:02:09",
  "seq": 22,
  "indexUrl": null,
  "dictList": [
    {
      "id": "16",
      "funcId": "22",
      "dictName": "所属分类",
      "dictCode": "suoShuFenLei",
      "comments": null,
      "category": null,
      "modifyFlag": null,
      "visiableFlag": null,
      "seq": 1,
      "spId": null,
      "version": 0,
      "dictDataList": [
        {
          "id": "060f14d421b08b3b32ffa297231b8229",
          "dictId": "16",
          "dataName": "修行者",
          "dataCode": "xiuXingZhe",
          "seq": 6,
          "spId": null,
          "version": 0
        },
        {
          "id": "147",
          "dictId": "16",
          "dataName": "宗门",
          "dataCode": "zongMen",
          "seq": 1,
          "spId": null,
          "version": 0
        },
        {
          "id": "148",
          "dictId": "16",
          "dataName": "家族",
          "dataCode": "jiaZu",
          "seq": 2,
          "spId": null,
          "version": 0
        },
        {
          "id": "149",
          "dictId": "16",
          "dataName": "组织",
          "dataCode": "zuZhi",
          "seq": 3,
          "spId": null,
          "version": 0
        },
        {
          "id": "150",
          "dictId": "16",
          "dataName": "机构",
          "dataCode": "jiGou",
          "seq": 4,
          "spId": null,
          "version": 0
        },
        {
          "id": "151",
          "dictId": "16",
          "dataName": "地名",
          "dataCode": "diMing",
          "seq": 5,
          "spId": null,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "55",
      "funcId": "22",
      "name": "新增",
      "code": "add",
      "icon": null,
      "displayType": "primary",
      "comments": null
    },
    {
      "id": "56",
      "funcId": "22",
      "name": "编辑",
      "code": "update",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "57",
      "funcId": "22",
      "name": "删除",
      "code": "delete",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "a985187eb15c2041d3cb4723db885998",
      "funcId": "22",
      "name": "仓库",
      "code": "ck",
      "icon": null,
      "displayType": null,
      "comments": null
    },
    {
      "id": "ff90ad64eb0bc10be537937dd1cda0e3",
      "funcId": "22",
      "name": "操作记录",
      "code": "opt",
      "icon": null,
      "displayType": null,
      "comments": null
    }
  ],
  "metaModelList": [
    {
      "id": "22",
      "parentModelId": null,
      "relationship": null,
      "modelName": "所属",
      "modelCode": "suoShu",
      "funcModelCode": "suoShu",
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
          "id": "182",
          "modelId": "22",
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
          "id": "201",
          "modelId": "22",
          "columnName": "所属编码",
          "columnCode": "suoShuCode",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 2,
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
          "id": "184",
          "modelId": "22",
          "columnName": "所属名称",
          "columnCode": "suoShuName",
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
          "columnWidth": null,
          "titleFlag": "N"
        },
        {
          "id": "183",
          "modelId": "22",
          "columnName": "所属分类",
          "columnCode": "suoShuFenLei",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "S",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=suoShuFenLei",
          "seq": 5,
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
          "id": "bec3b7e10c4c92c9d0a01740ad25ac7c",
          "modelId": "22",
          "columnName": "所属分类",
          "columnCode": "suoShuFenLeiName",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "I",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": null,
          "seq": 5,
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
          "id": "185",
          "modelId": "22",
          "columnName": "所属描述",
          "columnCode": "suoShuMiaoShu",
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
          "id": "262",
          "modelId": "22",
          "columnName": "地址",
          "columnCode": "addrId",
          "valueType": "S",
          "defaultValue": null,
          "modifyFlag": "N",
          "displayType": "CF",
          "comments": null,
          "errorText": null,
          "validateRule": null,
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 8,
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
          "id": "263",
          "modelId": "22",
          "columnName": "地址",
          "columnCode": "addrFullName",
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
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
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
          "id": "186",
          "modelId": "22",
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
          "seq": 10,
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
          "id": "187",
          "modelId": "22",
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
          "seq": 11,
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
          "id": "261",
          "modelId": "22",
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
          "id": "98",
          "modelId": "22",
          "type": "N",
          "code": "query",
          "name": null,
          "servId": "22",
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
          "id": "99",
          "modelId": "22",
          "type": "N",
          "code": "get",
          "name": null,
          "servId": "22",
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
          "id": "105",
          "modelId": "22",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "22",
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
          "id": "15ac5269ed5395cefe65e46840bd8d47",
          "modelId": "22",
          "type": "L",
          "code": "ck",
          "name": "仓库",
          "servId": "22",
          "servAction": "ck",
          "defaultFlag": "N",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 3,
          "displayType": null,
          "icon": null
        },
        {
          "id": "8e76b04705e7abba77d0c6ea4e7c4028",
          "modelId": "22",
          "type": "L",
          "code": "opt",
          "name": "操作记录",
          "servId": "22",
          "servAction": "opt",
          "defaultFlag": "N",
          "disableRule": null,
          "propFlag": "N",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 4,
          "displayType": null,
          "icon": null
        },
        {
          "id": "106",
          "modelId": "22",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "22",
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
          "id": "107",
          "modelId": "22",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "22",
          "servAction": "delete",
          "defaultFlag": "Y",
          "disableRule": "(data, column) => data.suoShuHisCount > 0",
          "propFlag": "Y",
          "propMsg": null,
          "delErrorMsg": null,
          "servCode": null,
          "category": null,
          "seq": 7,
          "displayType": null,
          "icon": null
        }
      ]
    }
  ]
};

export function suoShuMetaModel() {
  return suoShu;
}
