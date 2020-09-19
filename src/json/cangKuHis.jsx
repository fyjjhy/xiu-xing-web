const cangKuHis = {
  "id": "31",
  "funcCode": "cangKuHis",
  "funcName": "仓库操作记录",
  "state": "A",
  "stateTime": "2020-07-20 23:35:17",
  "seq": 31,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "79",
      "funcId": "31",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "80",
      "funcId": "31",
      "name": "删除",
      "code": "delete"
    }
  ],
  "metaModelList": [
    {
      "id": "31",
      "modelName": "仓库操作记录",
      "modelCode": "cangKuHis",
      "funcModelCode": "cangKuHis",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "346",
          "modelId": "31",
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
          "id": "347",
          "modelId": "31",
          "columnName": "灵物名称",
          "columnCode": "lingWuName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 4,
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
          "id": "348",
          "modelId": "31",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=lingWuFenLei",
          "seq": 5,
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
          "id": "374",
          "modelId": "31",
          "columnName": "灵物分类",
          "columnCode": "lingWuFenLeiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "349",
          "modelId": "31",
          "columnName": "灵物属性",
          "columnCode": "lingWuShuXing",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "350",
          "modelId": "31",
          "columnName": "灵物状态",
          "columnCode": "lingWuState",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=state&fenLei=lingWuState",
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
          "state": "A"
        },
        {
          "id": "373",
          "modelId": "31",
          "columnName": "灵物状态",
          "columnCode": "lingWuStateName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A"
        },
        {
          "id": "351",
          "modelId": "31",
          "columnName": "灵物数量",
          "columnCode": "lingWuShuLiang",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 11,
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
          "state": "A"
        },
        {
          "id": "352",
          "modelId": "31",
          "columnName": "单位",
          "columnCode": "danWei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 13,
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
          "state": "A"
        },
        {
          "id": "361",
          "modelId": "31",
          "columnName": "灵物境界",
          "columnCode": "jingJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/jingJie",
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
          "state": "A"
        },
        {
          "id": "355",
          "modelId": "31",
          "columnName": "灵物境界",
          "columnCode": "jingJieName",
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
          "id": "362",
          "modelId": "31",
          "columnName": "灵物品级",
          "columnCode": "pinJiId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/pinJi",
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
          "state": "A"
        },
        {
          "id": "356",
          "modelId": "31",
          "columnName": "灵物品级",
          "columnCode": "pinJiName",
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
          "id": "357",
          "modelId": "31",
          "columnName": "灵物描述",
          "columnCode": "lingWuMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 23,
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
          "id": "354",
          "modelId": "31",
          "columnName": "所属名称",
          "columnCode": "suoShuName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 26,
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
          "state": "A"
        },
        {
          "id": "353",
          "modelId": "31",
          "columnName": "所属分类",
          "columnCode": "suoShuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=suoShuFenLei",
          "seq": 27,
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
          "id": "372",
          "modelId": "31",
          "columnName": "所属分类",
          "columnCode": "suoShuFenLeiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 27,
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
          "id": "363",
          "modelId": "31",
          "columnName": "所属境界",
          "columnCode": "suoShuJingJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/jingJie",
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
          "state": "A"
        },
        {
          "id": "364",
          "modelId": "31",
          "columnName": "所属境界",
          "columnCode": "suoShuJingJieName",
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
          "id": "365",
          "modelId": "31",
          "columnName": "所属品级",
          "columnCode": "suoShuPinJiId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/pinJi",
          "seq": 33,
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
          "id": "366",
          "modelId": "31",
          "columnName": "所属品级",
          "columnCode": "suoShuPinJiName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 35,
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
          "id": "367",
          "modelId": "31",
          "columnName": "所属描述",
          "columnCode": "suoShuMiaoShu",
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
          "extStr01": "Y"
        },
        {
          "id": "358",
          "modelId": "31",
          "columnName": "小说",
          "columnCode": "xiaoShuoId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/xiaoShuo",
          "seq": 39,
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
          "id": "359",
          "modelId": "31",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 41,
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
          "id": "684e0e8b9a9937d15d79f0c626acc1bf",
          "modelId": "31",
          "columnName": "修行岁月",
          "columnCode": "xiuXingSuiYue",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 42,
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
          "state": "A"
        },
        {
          "id": "660c9cec6ad423124f279ad6d8366d9e",
          "modelId": "31",
          "columnName": "时间",
          "columnCode": "shiJian",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 43,
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
          "state": "A"
        },
        {
          "id": "0fc54f4acea66f44f0edc615480425fe",
          "modelId": "31",
          "columnName": "地点",
          "columnCode": "addrId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 45,
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
          "id": "5c6be45057666d996969a8efb8bce30e",
          "modelId": "31",
          "columnName": "地点",
          "columnCode": "fullName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 45,
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
          "primaryFlag": "N",
          "feignFlag": "N",
          "titleFlag": "N",
          "state": "A",
          "extStr01": "Y"
        },
        {
          "id": "55864d7613c0a0ec6c49946306e5c3d7",
          "modelId": "31",
          "columnName": "备注",
          "columnCode": "beiZhu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 47,
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
          "id": "360",
          "modelId": "31",
          "columnName": "更新时间",
          "columnCode": "updateTime",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 49,
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
          "id": "138",
          "modelId": "31",
          "type": "N",
          "code": "query",
          "servId": "31",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "139",
          "modelId": "31",
          "type": "N",
          "code": "get",
          "servId": "31",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
        },
        {
          "id": "142",
          "modelId": "31",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "31",
          "servAction": "delete",
          "defaultFlag": "Y",
          "propFlag": "Y",
          "seq": 6
        }
      ]
    }
  ]
};

export function cangKuHisMetaModel() {
  return cangKuHis;
}
