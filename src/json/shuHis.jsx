const shuHis = {
  "id": "30",
  "funcCode": "shuHis",
  "funcName": "属操作记录",
  "state": "A",
  "stateTime": "2020-07-19 22:32:45",
  "seq": 30,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "4b0cf4ff9f78460ca6290cd407d74447",
      "funcId": "30",
      "name": "轨迹",
      "code": "guiJi"
    },
    {
      "id": "74",
      "funcId": "30",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "75",
      "funcId": "30",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "76",
      "funcId": "30",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "30",
      "modelName": "属操作记录",
      "modelCode": "shuHis",
      "funcModelCode": "shuHis",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "286",
          "modelId": "30",
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
          "id": "287",
          "modelId": "30",
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
          "id": "288",
          "modelId": "30",
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
          "id": "c7de648aa05641aeb4813f9be9ca782c",
          "modelId": "30",
          "columnName": "属状态",
          "columnCode": "shuStateName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "d047984c7e6d48459de6c91096f08edf",
          "modelId": "30",
          "columnName": "属状态",
          "columnCode": "shuState",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=state&fenLei=congShuState",
          "seq": 9,
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
          "id": "289",
          "modelId": "30",
          "columnName": "属分类",
          "columnCode": "shuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei",
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
          "id": "290",
          "modelId": "30",
          "columnName": "属分类",
          "columnCode": "shuFenLeiName",
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
          "id": "8ea8f81577667ab0c9f67b6b4ff55a38",
          "modelId": "30",
          "columnName": "属境界",
          "columnCode": "shuJingJieName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "e82afb0fee70ba5b9789d05ff03f66ba",
          "modelId": "30",
          "columnName": "属境界",
          "columnCode": "shuJingJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/jingJie",
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
          "state": "A",
          "extStr02": "12"
        },
        {
          "id": "329bd02cf9f6c69f211e5693828dfced",
          "modelId": "30",
          "columnName": "属品级",
          "columnCode": "shuPinJiName",
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
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "92b2ce11ace7a7d35fb16725528bcaf9",
          "modelId": "30",
          "columnName": "属品级",
          "columnCode": "shuPinJiId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|xiuXing/common/xiu-xing/pinJi",
          "seq": 21,
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
          "id": "294",
          "modelId": "30",
          "columnName": "属小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
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
          "id": "295",
          "modelId": "30",
          "columnName": "属小说",
          "columnCode": "xiaoShuoName",
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
          "id": "c688cfd9b5a348a48a6201be615c2763",
          "modelId": "30",
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
          "id": "296",
          "modelId": "30",
          "columnName": "更新时间",
          "columnCode": "updateTime",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "DTP",
          "seq": 29,
          "requiredFlag": "N",
          "searchFlag": "N",
          "profileDisplayFlag": "Y",
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
          "id": "292",
          "modelId": "30",
          "columnName": "属地址",
          "columnCode": "addrId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 31,
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
          "id": "06b2d2add8d448a8b8ab4cf7665e7640",
          "modelId": "30",
          "columnName": "属章节",
          "columnCode": "zhangJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/zhangJie",
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
          "id": "291",
          "modelId": "30",
          "columnName": "属描述",
          "columnCode": "shuMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 37,
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
          "id": "132",
          "modelId": "30",
          "type": "N",
          "code": "query",
          "servId": "30",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "133",
          "modelId": "30",
          "type": "N",
          "code": "get",
          "servId": "30",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 3
        },
        {
          "id": "e7c3ae642ed24d139058e763638aa284",
          "modelId": "30",
          "type": "L",
          "code": "guiJi",
          "name": "轨迹",
          "servId": "30",
          "servAction": "guiJi",
          "defaultFlag": "N",
          "propFlag": "N",
          "seq": 7
        },
        {
          "id": "135",
          "modelId": "30",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "30",
          "servAction": "update",
          "defaultFlag": "Y",
          "propFlag": "Y",
          "propMsg": "编辑属性值：\r\n1、从无值到有值；\r\n2、从有值到有值。",
          "seq": 9
        },
        {
          "id": "136",
          "modelId": "30",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "30",
          "servAction": "delete",
          "defaultFlag": "Y",
          "disableRule": "(data,column) => data.shuHisCount>0",
          "propFlag": "Y",
          "seq": 11
        }
      ]
    }
  ]
};

export function shuHisMetaModel() {
  return shuHis;
}
