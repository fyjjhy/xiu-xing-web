const shu = {
  "id": "22",
  "funcCode": "shu",
  "funcName": "属",
  "state": "A",
  "stateTime": "2020-06-25 02:02:09",
  "seq": 22,
  "dictList": [
    {
      "id": "eda9be6acdd74271836319711dd002d8",
      "funcId": "22",
      "dictName": "属类型",
      "dictCode": "shuType",
      "seq": 1,
      "version": 0,
      "dictDataList": [
        {
          "id": "d0989401aa6845d5970ef0093efbe994",
          "dictId": "eda9be6acdd74271836319711dd002d8",
          "dataName": "从",
          "dataCode": "从",
          "seq": 1,
          "version": 0
        },
        {
          "id": "f302a7cc4702489380b5d35772c51918",
          "dictId": "eda9be6acdd74271836319711dd002d8",
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
      "id": "55",
      "funcId": "22",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "56",
      "funcId": "22",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "57",
      "funcId": "22",
      "name": "删除",
      "code": "delete"
    },
    {
      "id": "5fb2b9d935954779853b2a3f09b90e9e",
      "funcId": "22",
      "name": "轨迹",
      "code": "guiJi"
    },
    {
      "id": "7282f55c94304d58a07a89115afdc8a7",
      "funcId": "22",
      "name": "合并",
      "code": "heBing"
    },
    {
      "id": "a985187eb15c2041d3cb4723db885998",
      "funcId": "22",
      "name": "仓库",
      "code": "ck"
    },
    {
      "id": "ff90ad64eb0bc10be537937dd1cda0e3",
      "funcId": "22",
      "name": "操作记录",
      "code": "opt"
    }
  ],
  "metaModelList": [
    {
      "id": "22",
      "modelName": "属",
      "modelCode": "shu",
      "funcModelCode": "shu",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "182",
          "modelId": "22",
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
          "id": "201",
          "modelId": "22",
          "columnName": "属编码",
          "columnCode": "shuCode",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 3,
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
          "id": "184",
          "modelId": "22",
          "columnName": "属名称",
          "columnCode": "shuName",
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "09527dde8ef241768e6532733617424c",
          "modelId": "22",
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
          "renderList": "renderCengYongMingList",
          "renderProfile": "renderCengYongMingInfo",
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "59b86fd60d7945e7adbe3b9f40a90f5a",
          "modelId": "22",
          "columnName": "属类型",
          "columnCode": "shuType",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "dict|shuType",
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "8c32b36e3afa4136b56839b19fa7ff9e",
          "modelId": "22",
          "columnName": "属状态",
          "columnCode": "shuState",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=state&fenLei=congShuState",
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "f10de3e316c74805bceea908d4e46bdc",
          "modelId": "22",
          "columnName": "属状态",
          "columnCode": "shuStateName",
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
          "id": "183",
          "modelId": "22",
          "columnName": "属分类",
          "columnCode": "shuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei",
          "seq": 15,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "bec3b7e10c4c92c9d0a01740ad25ac7c",
          "modelId": "22",
          "columnName": "属分类",
          "columnCode": "shuFenLeiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 17,
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
          "id": "132649820550462a8773c4a8000e2316",
          "modelId": "22",
          "columnName": "属境界",
          "columnCode": "shuJingJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/jingJie",
          "seq": 19,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "bef862f3c3c647bebdfc8baf16bcac36",
          "modelId": "22",
          "columnName": "属境界",
          "columnCode": "shuJingJieName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 21,
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
          "id": "5f1696d1b3d94b04ab60dc21fced9e88",
          "modelId": "22",
          "columnName": "属品级",
          "columnCode": "shuPinJiId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/pinJi",
          "seq": 23,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "f66ff50911e94e778cfd7468aa0dc9a0",
          "modelId": "22",
          "columnName": "属品级",
          "columnCode": "shuPinJiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 25,
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
          "id": "aa67f59587d74b9cbe0dcf05ae87fa70",
          "modelId": "22",
          "columnName": "属修行",
          "columnCode": "shuXiuXing",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 27,
          "requiredFlag": "N",
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "186",
          "modelId": "22",
          "columnName": "属小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 29,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "187",
          "modelId": "22",
          "columnName": "属小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 31,
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
          "id": "262",
          "modelId": "22",
          "columnName": "属地址",
          "columnCode": "addrId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 35,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "c4b8521c81d34175ac5501ca90dcc5b7",
          "modelId": "22",
          "columnName": "属章节",
          "columnCode": "zhangJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/zhangJie",
          "seq": 39,
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "185",
          "modelId": "22",
          "columnName": "属描述",
          "columnCode": "shuMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 41,
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
          "extStr01": "Y",
          "extStr02": "24"
        }
      ],
      "actionList": [
        {
          "id": "98",
          "modelId": "22",
          "type": "N",
          "code": "query",
          "servId": "22",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "99",
          "modelId": "22",
          "type": "N",
          "code": "get",
          "servId": "22",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
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
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
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
          "propFlag": "N",
          "seq": 3
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
          "propFlag": "N",
          "seq": 4
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
          "propFlag": "N",
          "seq": 5
        },
        {
          "id": "6152a932c5eb45f8ba594ec6100522a8",
          "modelId": "22",
          "type": "L",
          "code": "guiJi",
          "name": "轨迹",
          "servId": "22",
          "servAction": "guiJi",
          "defaultFlag": "N",
          "propFlag": "N",
          "seq": 6
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
          "disableRule": "(data, column) => data.shuHisCount > 0",
          "propFlag": "Y",
          "seq": 7
        }
      ]
    }
  ]
};

export function shuMetaModel() {
  return shu;
}
