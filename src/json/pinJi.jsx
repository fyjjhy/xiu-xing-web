const pinJi = {
  "id": "5",
  "funcCode": "pinJi",
  "funcName": "品级",
  "state": "A",
  "stateTime": "2020-06-12 15:07:52",
  "seq": 5,
  "dictList": [
    {
      "id": "15",
      "funcId": "5",
      "dictName": "品级分类",
      "dictCode": "pinJiFenLei",
      "seq": 1,
      "version": 0,
      "dictDataList": [
        {
          "id": "146",
          "dictId": "15",
          "dataName": "妖兽",
          "dataCode": "yaoShou",
          "seq": 1,
          "version": 0
        },
        {
          "id": "165",
          "dictId": "15",
          "dataName": "地名",
          "dataCode": "diMing",
          "seq": 2,
          "version": 0
        }
      ]
    }
  ],
  "configList": [],
  "funcComponentList": [
    {
      "id": "4",
      "funcId": "5",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "5",
      "funcId": "5",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "6",
      "funcId": "5",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "5",
      "modelName": "品级",
      "modelCode": "pinJi",
      "funcModelCode": "pinJi",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "27",
          "modelId": "5",
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
          "id": "fdb9f6f05999bba407fc75468f544734",
          "modelId": "5",
          "columnName": "品级编码",
          "columnCode": "pinJiCode",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 2,
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
          "id": "28",
          "modelId": "5",
          "columnName": "品级名称",
          "columnCode": "pinJiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "30",
          "modelId": "5",
          "columnName": "品级描述",
          "columnCode": "pinJiMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
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
          "renderList": "renderMiaoShu",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "29",
          "modelId": "5",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 9,
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
          "id": "31",
          "modelId": "5",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 11,
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
        }
      ],
      "actionList": [
        {
          "id": "13",
          "modelId": "5",
          "type": "N",
          "code": "query",
          "servId": "5",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "14",
          "modelId": "5",
          "type": "N",
          "code": "get",
          "servId": "5",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
        },
        {
          "id": "15",
          "modelId": "5",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "5",
          "servAction": "add",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
        },
        {
          "id": "16",
          "modelId": "5",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "5",
          "servAction": "update",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 5
        },
        {
          "id": "17",
          "modelId": "5",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "5",
          "servAction": "delete",
          "defaultFlag": "Y",
          "propFlag": "Y",
          "seq": 6
        }
      ]
    }
  ]
};

export function pinJiMetaModel() {
  return pinJi;
}
