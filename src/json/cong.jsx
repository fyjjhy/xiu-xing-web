const cong = {
  "id": "23",
  "funcCode": "cong",
  "funcName": "从",
  "state": "A",
  "stateTime": "2020-06-25 11:29:35",
  "seq": 23,
  "dictList": [
    {
      "id": "f6175c0dbc9b42a0a6f3464fcbdd13f3",
      "funcId": "23",
      "dictName": "从类型",
      "dictCode": "congType",
      "seq": 1,
      "version": 0,
      "dictDataList": [
        {
          "id": "0b37e3e89e29450d8840767971286295",
          "dictId": "f6175c0dbc9b42a0a6f3464fcbdd13f3",
          "dataName": "属",
          "dataCode": "属",
          "seq": 1,
          "version": 0
        },
        {
          "id": "7ab3c5e517a44a5cb05e58131dd02d8c",
          "dictId": "f6175c0dbc9b42a0a6f3464fcbdd13f3",
          "dataName": "从属",
          "dataCode": "从属",
          "seq": 2,
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
      "id": "58fbfca24a3845ea9f09cc8dda0c0b66",
      "funcId": "23",
      "name": "轨迹",
      "code": "guiJi"
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
      "modelName": "从",
      "modelCode": "cong",
      "funcModelCode": "cong",
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
          "columnName": "从代码",
          "columnCode": "congCode",
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
          "columnName": "从名称",
          "columnCode": "congName",
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
          "id": "38f6ba0ddeb24c7f90680165faed4215",
          "modelId": "23",
          "columnName": "曾用名",
          "columnCode": "cengYongMing",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 7,
          "requiredFlag": "N",
          "searchFlag": "Y",
          "profileDisplayFlag": "Y",
          "addTable": "N",
          "editDisplayFlag": "N",
          "editable": "N",
          "listDisplayFlag": "Y",
          "exportDisplayFlag": "N",
          "sortable": "N",
          "renderList": "renderCengYongMing",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "4036e5e4445b48cf827852c73f2c7205",
          "modelId": "23",
          "columnName": "从类型",
          "columnCode": "congType",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "dict|congType",
          "seq": 9,
          "requiredFlag": "N",
          "searchFlag": "N",
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
          "id": "193",
          "modelId": "23",
          "columnName": "从分类",
          "columnCode": "congFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "29ac9079dbf061a7d7f1e2e9ad08254a",
          "modelId": "23",
          "columnName": "从分类",
          "columnCode": "congFenLeiName",
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
        },
        {
          "id": "195",
          "modelId": "23",
          "columnName": "从描述",
          "columnCode": "congMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 15,
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
          "columnName": "从小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 17,
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
          "columnName": "从小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 19,
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
        },
        {
          "id": "0998f681cc2346289b7d393b3d5f8c40",
          "modelId": "23",
          "columnName": "从地址",
          "columnCode": "addrId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 21,
          "requiredFlag": "N",
          "searchFlag": "N",
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
          "id": "906a612875614278b80909fcee2e2cf3",
          "modelId": "23",
          "columnName": "从章节",
          "columnCode": "zhangJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/zhangJie",
          "seq": 23,
          "requiredFlag": "N",
          "searchFlag": "N",
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
          "id": "7c70a207d64e4c389d34a00f6665469c",
          "modelId": "23",
          "type": "L",
          "code": "guiJi",
          "name": "轨迹",
          "servId": "23",
          "servAction": "guiJi",
          "defaultFlag": "N",
          "propFlag": "N",
          "seq": 6
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
          "disableRule": "(data,column) => data.congHisCount > 0",
          "propFlag": "Y",
          "seq": 9
        }
      ]
    }
  ]
};

export function congMetaModel() {
  return cong;
}
