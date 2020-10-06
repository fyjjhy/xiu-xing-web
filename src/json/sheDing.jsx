const sheDing = {
  "id": "17",
  "funcCode": "sheDing",
  "funcName": "设定",
  "state": "A",
  "stateTime": "2020-06-15 14:40:52",
  "seq": 17,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "40",
      "funcId": "17",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "41",
      "funcId": "17",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "42",
      "funcId": "17",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "17",
      "modelName": "设定",
      "modelCode": "sheDing",
      "funcModelCode": "sheDing",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "126",
          "modelId": "17",
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
          "id": "127",
          "modelId": "17",
          "columnName": "设定代码",
          "columnCode": "sheDingCode",
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
          "id": "128",
          "modelId": "17",
          "columnName": "设定名称",
          "columnCode": "sheDingName",
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
          "id": "129",
          "modelId": "17",
          "columnName": "设定分类",
          "columnCode": "sheDingFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=sheDingFenLei",
          "seq": 7,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "N",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "2129daa0ba61a555e1df2da86dc45821",
          "modelId": "17",
          "columnName": "设定分类",
          "columnCode": "sheDingFenLeiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 7,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "N",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "N",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "130",
          "modelId": "17",
          "columnName": "设定描述",
          "columnCode": "sheDingMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "131",
          "modelId": "17",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 11,
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
          "id": "132",
          "modelId": "17",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 13,
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
        }
      ],
      "actionList": [
        {
          "id": "73",
          "modelId": "17",
          "type": "N",
          "code": "query",
          "servId": "17",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "74",
          "modelId": "17",
          "type": "N",
          "code": "get",
          "servId": "17",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
        },
        {
          "id": "75",
          "modelId": "17",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "17",
          "servAction": "add",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
        },
        {
          "id": "76",
          "modelId": "17",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "17",
          "servAction": "update",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 5
        },
        {
          "id": "77",
          "modelId": "17",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "17",
          "servAction": "delete",
          "defaultFlag": "Y",
          "propFlag": "Y",
          "seq": 6
        }
      ]
    }
  ]
};

export function sheDingMetaModel() {
  return sheDing;
}
