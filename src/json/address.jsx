const address = {
  "id": "27",
  "funcCode": "address",
  "funcName": "地址",
  "state": "A",
  "stateTime": "2020-06-29 15:01:19",
  "seq": 27,
  "dictList": [
    {
      "id": "24",
      "funcId": "27",
      "dictName": "地址级别",
      "dictCode": "addrType",
      "seq": 1,
      "version": 0,
      "dictDataList": [
        {
          "id": "247",
          "dictId": "24",
          "dataName": "1",
          "dataCode": "1",
          "seq": 1,
          "version": 0
        },
        {
          "id": "248",
          "dictId": "24",
          "dataName": "2",
          "dataCode": "2",
          "seq": 2,
          "version": 0
        },
        {
          "id": "250",
          "dictId": "24",
          "dataName": "4",
          "dataCode": "4",
          "seq": 4,
          "version": 0
        },
        {
          "id": "272",
          "dictId": "24",
          "dataName": "6",
          "dataCode": "6",
          "seq": 6,
          "version": 0
        },
        {
          "id": "274",
          "dictId": "24",
          "dataName": "8",
          "dataCode": "8",
          "seq": 8,
          "version": 0
        },
        {
          "id": "276",
          "dictId": "24",
          "dataName": "10",
          "dataCode": "10",
          "seq": 10,
          "version": 0
        },
        {
          "id": "278",
          "dictId": "24",
          "dataName": "12",
          "dataCode": "12",
          "seq": 12,
          "version": 0
        },
        {
          "id": "280",
          "dictId": "24",
          "dataName": "14",
          "dataCode": "14",
          "seq": 14,
          "version": 0
        },
        {
          "id": "282",
          "dictId": "24",
          "dataName": "16",
          "dataCode": "16",
          "seq": 16,
          "version": 0
        },
        {
          "id": "284",
          "dictId": "24",
          "dataName": "18",
          "dataCode": "18",
          "seq": 18,
          "version": 0
        },
        {
          "id": "286",
          "dictId": "24",
          "dataName": "20",
          "dataCode": "20",
          "seq": 20,
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
      "displayType": "primary"
    },
    {
      "id": "65",
      "funcId": "27",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "66",
      "funcId": "27",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "27",
      "modelName": "地址",
      "modelCode": "address",
      "funcModelCode": "address",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "253",
          "modelId": "27",
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
          "id": "04943b7f1d0a717c4010f7fa23677ac6",
          "modelId": "27",
          "columnName": "地址级别",
          "columnCode": "addrType",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "columnWidth": "100px",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "254",
          "modelId": "27",
          "columnName": "地址编码",
          "columnCode": "addrCode",
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
          "columnWidth": "100px",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "f143ef6f56cea95041547c62b848eb6a",
          "modelId": "27",
          "columnName": "父级地址",
          "columnCode": "pId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/address|addrType",
          "seq": 4,
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
          "id": "255",
          "modelId": "27",
          "columnName": "地址名称",
          "columnCode": "addrName",
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
          "id": "256",
          "modelId": "27",
          "columnName": "地址全称",
          "columnCode": "fullName",
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
          "id": "257",
          "modelId": "27",
          "columnName": "地址描述",
          "columnCode": "addrMiaoShu",
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
          "id": "259",
          "modelId": "27",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "260",
          "modelId": "27",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "258",
          "modelId": "27",
          "columnName": "更新时间",
          "columnCode": "updateTime",
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
          "columnWidth": "160px",
          "titleFlag": "N",
          "state": "A"
        }
      ],
      "actionList": [
        {
          "id": "117",
          "modelId": "27",
          "type": "N",
          "code": "query",
          "servId": "27",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "118",
          "modelId": "27",
          "type": "N",
          "code": "get",
          "servId": "27",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
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
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
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
          "propFlag": "N",
          "seq": 5
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
          "propFlag": "Y",
          "seq": 6
        }
      ]
    }
  ]
};

export function addressMetaModel() {
  return address;
}
