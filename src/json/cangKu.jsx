const cangKu = {
  "id": "21",
  "funcCode": "cangKu",
  "funcName": "仓库",
  "state": "A",
  "stateTime": "2020-06-16 14:20:13",
  "seq": 21,
  "dictList": [],
  "configList": [],
  "funcComponentList": [
    {
      "id": "52",
      "funcId": "21",
      "name": "新增",
      "code": "add",
      "displayType": "primary"
    },
    {
      "id": "53",
      "funcId": "21",
      "name": "编辑",
      "code": "update"
    },
    {
      "id": "54",
      "funcId": "21",
      "name": "删除",
      "code": "delete"
    },
    {
      "id": "e36a2e94b41224718b4b3908f73c9028",
      "funcId": "21",
      "name": "操作记录",
      "code": "opt"
    }
  ],
  "metaModelList": [
    {
      "id": "21",
      "modelName": "仓库",
      "modelCode": "cangKu",
      "funcModelCode": "cangKu",
      "searchFlag": "Y",
      "multChooseFlag": "Y",
      "masterFlag": "Y",
      "treeTableFlag": "N",
      "position": "1",
      "columnList": [
        {
          "id": "158",
          "modelId": "21",
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
          "id": "188",
          "modelId": "21",
          "columnName": "从信息",
          "columnCode": "congInfo",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 2,
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
          "id": "07ddb991054c471c9b16aea428637d20",
          "modelId": "21",
          "columnName": "从标识",
          "columnCode": "congHisId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 3,
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
          "id": "fa04e29a51f4449d8b9ff38f94c89555",
          "modelId": "21",
          "columnName": "从标识",
          "columnCode": "congId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 3,
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
          "id": "b63ae108ffa94a969bfa81fe712180d2",
          "modelId": "21",
          "columnName": "从名称",
          "columnCode": "congName",
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
          "id": "7c6f8b16b8524b8bb7369a26e113104e",
          "modelId": "21",
          "columnName": "从分类",
          "columnCode": "congFenLeiName",
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
          "id": "8fc04f7494cc43f7b09ac62757f4a6fe",
          "modelId": "21",
          "columnName": "从分类",
          "columnCode": "congFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei",
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
          "id": "161",
          "modelId": "21",
          "columnName": "从属性",
          "columnCode": "congShuXing",
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
          "id": "162",
          "modelId": "21",
          "columnName": "从状态",
          "columnCode": "congState",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=state&fenLei=congShuState",
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
          "id": "86d7174f5f9a8bac6613093c6912148b",
          "modelId": "21",
          "columnName": "从状态",
          "columnCode": "congStateName",
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
          "id": "163",
          "modelId": "21",
          "columnName": "从数量",
          "columnCode": "congShuLiang",
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
          "id": "164",
          "modelId": "21",
          "columnName": "从单位",
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
          "id": "173",
          "modelId": "21",
          "columnName": "从境界",
          "columnCode": "congJingJieId",
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
          "id": "167",
          "modelId": "21",
          "columnName": "从境界",
          "columnCode": "congJingJieName",
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
          "id": "174",
          "modelId": "21",
          "columnName": "从品级",
          "columnCode": "congPinJiId",
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
          "id": "168",
          "modelId": "21",
          "columnName": "从品级",
          "columnCode": "congPinJiName",
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
          "id": "85a6e50541544a9eb953fb50ef431f29",
          "modelId": "21",
          "columnName": "从描述",
          "columnCode": "congMiaoShu",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "T",
          "seq": 22,
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
          "id": "189",
          "modelId": "21",
          "columnName": "属信息",
          "columnCode": "shuInfo",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 24,
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
          "id": "7ec1fc78a6744b588ffae05f78a97466",
          "modelId": "21",
          "columnName": "属标识",
          "columnCode": "shuId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 25,
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
          "id": "9800eea7b9af4cf397518aa85c219915",
          "modelId": "21",
          "columnName": "属标识",
          "columnCode": "shuHisId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 25,
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
          "id": "386d0dada65e4c72afeba16c6dcb13bc",
          "modelId": "21",
          "columnName": "属名称",
          "columnCode": "shuName",
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
          "id": "8bcf79f7eae54a608b5b97c2536e7fb4",
          "modelId": "21",
          "columnName": "属分类",
          "columnCode": "shuFenLei",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "S",
          "valueList": "service|/xiuXing/common/xiu-xing/fenLei?type=fenLei&fenLei=congShuFenLei",
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
          "id": "c086dc9a09ea41fbbc23ef01251a9393",
          "modelId": "21",
          "columnName": "属分类",
          "columnCode": "shuFenLeiName",
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
          "id": "176",
          "modelId": "21",
          "columnName": "属境界",
          "columnCode": "shuJingJieId",
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
          "id": "177",
          "modelId": "21",
          "columnName": "属境界",
          "columnCode": "shuJingJieName",
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
          "id": "178",
          "modelId": "21",
          "columnName": "属品级",
          "columnCode": "shuPinJiId",
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
          "id": "179",
          "modelId": "21",
          "columnName": "属品级",
          "columnCode": "shuPinJiName",
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
          "id": "5c519476ab10493ea218b6338d1af922",
          "modelId": "21",
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
          "extStr01": "Y"
        },
        {
          "id": "170",
          "modelId": "21",
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
          "id": "171",
          "modelId": "21",
          "columnName": "小说",
          "columnCode": "xiaoShuoName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 39,
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
          "id": "2a2e8197de246586781dd3aef6dcdb19",
          "modelId": "21",
          "columnName": "地点",
          "columnCode": "fullName",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 41,
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
          "id": "6334551e50b9fa0cb17dc29bef400e81",
          "modelId": "21",
          "columnName": "地点",
          "columnCode": "addrId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/address",
          "seq": 41,
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
          "id": "df8e176f209b4423a0073e6b89a8c4ba",
          "modelId": "21",
          "columnName": "章节",
          "columnCode": "zhangJieId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "valueList": "service|/xiuXing/common/xiu-xing/zhangJie",
          "seq": 42,
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
          "id": "4edd12a296013268d44f61ae517c2c85",
          "modelId": "21",
          "columnName": "痕迹信息",
          "columnCode": "henJiInfo",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 43,
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
          "id": "f13a1191da731635aa9e0f2747924d22",
          "modelId": "21",
          "columnName": "痕迹信息",
          "columnCode": "henJiId",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "CF",
          "seq": 43,
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
          "id": "24c58ea7b26a0e9b5ad273e3feb09bfa",
          "modelId": "21",
          "columnName": "修行时间",
          "columnCode": "xiuXingShiJian",
          "valueType": "S",
          "modifyFlag": "N",
          "displayType": "I",
          "seq": 45,
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
          "id": "7e064d18439f9ca8c9ae681d79d8b9a4",
          "modelId": "21",
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
        }
      ],
      "actionList": [
        {
          "id": "93",
          "modelId": "21",
          "type": "N",
          "code": "query",
          "servId": "21",
          "servAction": "query",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 1
        },
        {
          "id": "94",
          "modelId": "21",
          "type": "N",
          "code": "get",
          "servId": "21",
          "servAction": "get",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 2
        },
        {
          "id": "95",
          "modelId": "21",
          "type": "T",
          "code": "add",
          "name": "新增",
          "servId": "21",
          "servAction": "add",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 3,
          "displayType": "primary"
        },
        {
          "id": "a3f3db2ce04af1501d9bf1f66a3c247f",
          "modelId": "21",
          "type": "L",
          "code": "opt",
          "name": "操作记录",
          "servId": "21",
          "servAction": "opt",
          "defaultFlag": "N",
          "propFlag": "N",
          "seq": 4
        },
        {
          "id": "96",
          "modelId": "21",
          "type": "L",
          "code": "update",
          "name": "编辑",
          "servId": "21",
          "servAction": "update",
          "defaultFlag": "Y",
          "propFlag": "N",
          "seq": 5
        },
        {
          "id": "97",
          "modelId": "21",
          "type": "L",
          "code": "delete",
          "name": "删除",
          "servId": "21",
          "servAction": "delete",
          "defaultFlag": "Y",
          "disableRule": "(data, column) => data.cangKuHisCount > 0",
          "propFlag": "Y",
          "seq": 6
        }
      ]
    }
  ]
};

export function cangKuMetaModel() {
  return cangKu;
}
