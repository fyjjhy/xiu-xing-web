import {PlusOutlined, LoadingOutlined} from '@ant-design/icons';
import React, {PureComponent, Fragment} from 'react';
import {Form, Select, TreeSelect, DatePicker, Upload, message, Checkbox, Radio, AutoComplete, Input} from 'antd';
import {stringify} from 'qs';
import moment from 'moment';
import {getValueList, getDictData, getQueryData, makeCancelable} from '../../../services/loadData';
// import Ellipsis from '../../Ellipsis';

const {TextArea} = Input;
const {Group: RadioGroup} = Radio;
const {Item: FormItem} = Form;
const {Option} = Select;
const {RangePicker} = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';
const monthFormat = 'YYYY年MM月';


// const typeMap = { S: 'string', E: 'email', O: 'object', A: 'array', T: 'object' };

export default class AutoFormRow extends PureComponent {
  state = {
    uploadLoading: false,
    valueListData: null,
    previewImage: '',
    fileList: [],
  };

  UNSAFE_componentWillMount() {
    this.handleData();
  }

  handleData() {
    const {column} = this.props;
    const [valueType, ...rest] = getValueList(column);
    this.makeCancelableLoadData = makeCancelable(this.loadData(valueType, rest));
    if (valueType) {
      this.makeCancelableLoadData.promise.then(valueListData => {
        this.setState({
          valueListData,
        });
      }).catch(e => {
        if (!e.isCanceled) {
          throw e;
        }
      });
    }
  }

  onMultipleSelectChange = (value, column) => {
    const {columnCode} = column;
    const {onExtraValueChange} = this.props;
    if (onExtraValueChange) {
      let transValue = '';
      if (value && value.length > 0) {
        transValue = value.join(',');
      }
      onExtraValueChange({[`${columnCode}Values`]: transValue});
    }
  }

  // 获取表单域规则
  getFormItemRules = (column, currentModel) => {
    const rules = [];
    const errorMessage = column.errorText || '请填写正确的信息';
    // if (column.validateRule) {
    //   rules = column.validateRule.split(';').map((rule) => {
    //     const rs = rule.split('|');
    //     if (rs[0] === 'validator') {
    //       if (rs.length > 1) {
    //         const { form } = this.props;
    //         const validator = this.props[rs[1]].bind(null, currentModel, form);
    //         if (validator) {
    //           return { validator };
    //         }
    //       }
    //     }
    //     const r = { message: errorMessage };
    //     r[rs[0]] = rs.length > 1 ? rs[1] : rs[0];
    //     return r;
    //   });
    // }
    if ((currentModel === 'add' || currentModel === 'edit' || currentModel === 'listEdit') && column.requiredFlag === 'Y') {
      rules.push({ required: column.requiredFlag === 'Y', message: errorMessage });
    }
    return rules;
  }

  getPlaceHolder = column => {
    const {columnName, columnCode} = column;
    const {[`${columnCode}Placeholder`]: placeholder} = this.props;
    if (column.placeholder) {
      return column.placeholder;
    }
    if (placeholder) {
      return placeholder;
    }

    switch (column.displayType) {
      case 'S':
      case 'C':
      case 'TS':
      case 'MT':
      case 'MS':
      case 'R':
        return `请选择${columnName}`;
      default:
        return `请输入${columnName}`;
    }
  }

  formatValue = (column, initialValue) => {
    const {defaultValue, displayType, columnCode} = column;
    if (displayType === 'D') {
      const {taskOrder} = this.props;
      if (taskOrder) {
        if (taskOrder[columnCode] === 'day') {
          return [moment(new Date(), dateFormat), moment(new Date(), dateFormat)];
        }
        if (taskOrder[columnCode] === 'default') {
          return [];
        }
        if (taskOrder[columnCode] === 'tomorrow') {
          return [moment(new Date(), dateFormat).add(1, 'days'), moment(new Date(), dateFormat).add(1, 'days')];
        }
      }
      return [moment(moment().startOf('month'), dateFormat), moment(new Date(), dateFormat)];
    }
    if (displayType === 'MS') {
      const msValue = initialValue || defaultValue;
      return msValue ? msValue.split(',') : [];
    }
    if (displayType === 'C') {
      return initialValue ? initialValue.split(',') : [];
    }
    if (displayType === 'DP') {
      return initialValue ? moment(new Date(initialValue), dateTimeFormat) : null;
    }
    if (displayType === 'S') {
      if (defaultValue) {
        return initialValue || defaultValue;
      }
    }
    if (displayType === 'TS') {
      return initialValue || defaultValue;
    }
    if (displayType === 'SD') {
      return initialValue || {timeSelect: defaultValue, timeDatePicker: moment(new Date(), monthFormat)};
    }
    if (column.valueType !== 'N') {
      return initialValue;
    }
    return initialValue === undefined ? '' : `${initialValue}`;
  }

  handleUpChange = info => {
    let {fileList} = info;
    fileList = fileList.slice(-1);
    const [file] = fileList;
    if (file.status === 'uploading') {
      this.setState({uploadLoading: true, fileList});
      return;
    }
    if (file.status !== 'done') {
      return;
    }
    this.setState({
      uploadLoading: false,
      fileList,
      // previewImage: file.response ? file.response.length > 0 ? config.aliYunOss.imageOpenUrl + file.response[0].key : '' : '',
    });
  }

  beforeUpload = file => {
    if (!['image/jpeg', 'image/jpeg', 'image/gif', 'image/png'].includes(file.type)) {
      message.error('支持扩展名：jpg/png/gif/jpeg!');
      return false;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('图片必须小于2MB!');
      return false;
    }
    return isLt2M;
  }

  handleUpload = () => {
    const {initialValue} = this.props;
    const {previewImage, uploadLoading} = this.state;
    const uploadButton = (
      <div>
        {uploadLoading ? <LoadingOutlined/> : <PlusOutlined/>}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      previewImage || initialValue ?
        <img alt="" style={{width: '180px'}} src={previewImage || initialValue}/> : uploadButton
    );
  }

  // 自动完成，查询搜索方法
  handleAutoCompleteSearch = value => {
    let {column: {columnCode}} = this.props;
    const {valueListData} = this.state;
    if (valueListData && valueListData.length > 0) {
      const [url, paramCode] = valueListData[0].split('?');
      if (url) {
        if (paramCode) {
          columnCode = paramCode;
        }
        const queryParam = {url, columnCode, queryParam: {current: 1, pageSize: 5, [columnCode]: value}};
        const {autoCompleteSearch} = this.props;
        if (autoCompleteSearch) {
          autoCompleteSearch(queryParam);
        }
      }
    }
  }

  // normFile = (displayType, e) => {
  //   const { initialValue } = this.props;
  //   if (displayType === 'U') {
  //     const { previewImage } = this.state;
  //     return previewImage || initialValue;
  //   } if (displayType === 'DP') {
  //     const beginDateStr = moment(e).format(dateTimeFormat).toString();
  //     return beginDateStr;
  //   } if (displayType === 'C') {
  //     if (e.length === 1) {
  //       return e[0];
  //     }
  //     return '';
  //   }
  // }

  loadData = async (type, params = []) => {
    const [first, ...rest] = params;
    let head = first;
    if (rest.length > 0) {
      const {rowInfo} = this.props;
      const values = {};
      rest.forEach(key => {
        const row = rowInfo[key];
        if (row) {
          values[key] = row;
        }
      });
      head = `${head}?${stringify(values)}`;
    }
    let valueListData;
    switch (type) {
      // case 'metaService':
      //   valueListData = await loadMetaData(head);
      //   break;
      case 'service':
        valueListData = await getQueryData(head);
        break;
      case 'dict':
        valueListData = getDictData(head, this.props.dictList);
        break;
      case 'AC':
        valueListData = params;
        break;
      case 'constant':
        valueListData = JSON.parse(params);
        break;
      default:
    }
    return valueListData;
  }

  // headers = { Authorization: `bearer ${getAccessToken()}` };

  // DatePickerDisabledTime = date => {
  //   const { column: { columnCode }, form: { getFieldsValue } } = this.props;
  //   const { adBeginTime, adEndTime } = getFieldsValue();
  //   return (columnCode === 'adBeginTime' ? date.isAfter(adEndTime) : columnCode === 'adEndTime' ? date.isBefore(adBeginTime) : false);
  // }

  // renderPopupEdit() {
  //   const { column, form, addDefaultParam, rowInfo, initData, currentModel } = this.props;
  //   const { columnCode } = column;
  //   // popup组件编辑时显示默认值
  //   const { [`${columnCode}DisplayCode`]: displayCode } = this.props;
  //   const { [displayCode]: displayName } = initData;
  //   const { valueListData } = this.state;
  //   let renderFlag;
  //   if (currentModel === 'add') {
  //     renderFlag = 'Y';
  //   }
  //   if (currentModel === 'edit') {
  //     if (initData && Object.keys(initData).length > 0) {
  //       renderFlag = 'Y';
  //     }
  //   }
  //   return (
  //     <Fragment>
  //       {valueListData && renderFlag === 'Y' ? <PopupEdit {...valueListData} displayName={displayName} leftSelectedTableRow={rowInfo} addDefaultParam={addDefaultParam} column={column} form={form} placeholder={this.getPlaceHolder(column)} /> : ''}
  //     </Fragment>
  //   );
  // }

  renderItem(column) {
    const renderMap = {
      I: this.renderInput,
      T: this.renderTextArea,
      S: this.renderSelect,
      MS: this.renderMultipleSelect,
      C: this.renderCheckbox,
      CA: this.renderCascader,
      D: this.renderDatePicker,
      // DP: this.renderDateTimePicker,
      N: this.renderInputNumber,
      M: this.renderMention,
      RA: this.renderRate,
      R: this.renderRadio,
      SW: this.renderSwitch,
      TS: this.renderTreeSelect,
      MT: this.renderMultipleTreeSelect,
      TR: this.renderTransfer,
      TI: this.renderTimePicker,
      U: this.renderUpload,
      // PE: this.renderPopupEdit,
      P: this.renderPassword,
      AC: this.renderAutoComplete,
      // SD: this.renderSelectDate,
    };

    const renderFn = renderMap[column.displayType];
    if (renderFn) {
      return renderFn.call(this, column);
    }
    return this.renderInput().call(this, column);
  }

  renderCustomFormItem() {
    const {customFormItem, column} = this.props;
    if (customFormItem) {
      if (customFormItem[column.columnCode]) {
        return customFormItem[column.columnCode](FormItem, this.props);
      }
    }
    return this.renderFormItemText(column);
  }

  renderAutoComplete() {
    const {column} = this.props;
    const {columnCode} = column;
    const {metaModel: {funcModelCode}} = this.props;
    const {[funcModelCode]: {[`${columnCode}AutoCompleteSource`]: dataSource}} = this.props;
    let source = [];
    if (dataSource && dataSource.length > 0) {
      source = dataSource;
    }

    return (
      <AutoComplete
        allowClear
        placeholder={this.getPlaceHolder(column)}
        dataSource={source.map(this.renderAutoOption)}
        onSearch={this.handleAutoCompleteSearch}
        optionLabelProp="value"
      />
    );
  }

  renderAutoOption = item => {
    const {column: {columnCode}} = this.props;
    let code = columnCode;
    const {valueListData} = this.state;
    if (valueListData && valueListData.length > 0) {
      const [, paramCode] = valueListData[0].split('?');
      if (paramCode) {
        code = paramCode;
      }
    }
    const {id, [code]: text} = item;
    return (
      <AutoComplete.Option value={text} key={id}>
        {/* <Ellipsis tooltip length={30} >{text}</Ellipsis> */}
      </AutoComplete.Option>
    );
  }

  renderRadio() {
    const {valueListData} = this.state;
    return (
      <RadioGroup>
        {valueListData ? valueListData.map((data, index) => {
          const key = index + 1;
          return (
            <Fragment key={key}>
              <Radio value={data.dataCode}>{data.dataName}</Radio>
            </Fragment>
          );
        }) : ''}
      </RadioGroup>
    );
  }

  renderPassword() {
    const {column} = this.props;
    return (
      <Input type="password" placeholder={this.getPlaceHolder(column)}/>
    );
  }

  renderCheckbox() {
    const {valueListData} = this.state;
    return (
      <Checkbox.Group>
        {valueListData ? this.renderCheck() : ''}
      </Checkbox.Group>
    );
  }

  renderCheck() {
    const {valueListData} = this.state;
    return valueListData.map((data, index) => {
      let newLine;
      if (index > 0) {
        newLine = (<br/>);
      }
      return (
        <Fragment key={data.dataCode}>
          {newLine}
          <Checkbox key={data.dataCode} value={data.dataCode}>{data.dataName}</Checkbox>
        </Fragment>
      );
    });
  }

  // renderSelectDate = () => (
  //     <SelectDate />
  //   )

  renderDatePicker = () => (
    <RangePicker
      format={dateFormat}
    />
  );

  // renderDateTimePicker = () => {
  //   const { column: { columnCode }, form: { getFieldsValue } } = this.props;
  //   const { adValidFlag } = getFieldsValue();
  //   return (
  //     <DatePicker
  //       showTime
  //       format={dateTimeFormat}
  //       disabled={adValidFlag && adValidFlag.length > 0 && adValidFlag[0] === 'Y' && columnCode === 'adEndTime'} // 这边主要是为了对广告页面处理
  //       disabledDate={this.DatePickerDisabledTime}
  //       /* onChange={
  //         () => {
  //           this.props.form.setFieldsValue({
  //             adBeginTime: {},
  //             adEndTime: {},
  //           });
  //         }} */
  //     />
  //   );
  // }

  renderUpload = () => {
    const {initialValue} = this.props;
    const {fileList} = this.state;
    return (
      <Upload
        action="/v1/plat/configuration/resources/upload"
        // headers={this.headers}
        listType="picture-card"
        showUploadList={false}
        fileList={fileList}
        accept="image/jpg,image/jpeg,image/png,image/gif"
        beforeUpload={this.beforeUpload}
        onChange={this.handleUpChange}
        {...(this.props.upload ? this.props.upload() : '')}
      >
        {this.props.handleUpload ? this.props.handleUpload(initialValue) : this.handleUpload()}
      </Upload>
    );
  }

  renderInput() {
    const {column} = this.props;
    return (
      <Input disabled={column.addDisplayField === 'Y'} placeholder={this.getPlaceHolder(column)}/>
    );
  }

  renderTextArea() {
    const {column} = this.props;
    return (
      <TextArea disabled={column.addDisplayField === 'Y'} placeholder={this.getPlaceHolder(column)} autoSize/>
    );
  }

  renderSelect() {
    const {column} = this.props;
    const {valueListData} = this.state;
    return (
      <Select disabled={column.addDisplayField === 'Y'}  allowClear placeholder={this.getPlaceHolder(column)}>
        {valueListData ? this.renderOption() : ''}
      </Select>
    );
  }

  renderMultipleSelect() {
    const {column} = this.props;
    const {valueListData} = this.state;
    return (
      <Select
        tokenSeparators={[',']}
        mode="multiple"
        allowClear
        placeholder={this.getPlaceHolder(column)}
        onChange={value => {
          this.onMultipleSelectChange(value, column);
        }}
      >
        {valueListData ? this.renderOption() : ''}
      </Select>
    );
  }

  renderOption() {
    const {valueListData} = this.state;
    return valueListData.map(data => <Option key={data.dataCode} value={data.dataCode}>{data.dataName}</Option>);
  }

  renderTreeSelect() {
    const {column} = this.props;
    const {valueListData} = this.state;
    return (
      <TreeSelect
        allowClear
        treeData={valueListData || []}
        placeholder={this.getPlaceHolder(column)}
        dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
      />
    );
  }

  renderMultipleTreeSelect() {
    const {column} = this.props;
    const {valueListData} = this.state;
    return (
      <TreeSelect
        allowClear
        multiple
        treeData={valueListData || []}
        placeholder={this.getPlaceHolder(column)}
        dropdownStyle={{maxHeight: 200, overflow: 'auto'}}
      />
    );
  }

  renderFormItem = column => {
    const { currentModel, searchArea } = this.props;
    let rules;
    if (searchArea) {
      rules = [];
    } else {
      rules = this.getFormItemRules(column, currentModel);
    }
    const {columnName, columnCode} = column;
    // const options = {};
    // if (displayType === 'U') {
    //   options.getValueFromEvent = this.normFile.bind(null, displayType);
    //   options.validateTrigger = 'onBlur';
    // } else if (displayType === 'DP' || displayType === 'TS') {
    //   options.validateTrigger = 'onChange';
    // } else {
    //   options.validateTrigger = 'onBlur';
    // }
    // if (displayType === 'CF') {
    //   return this.renderCustomFormItem();
    // }
    const { formItemLayout } = this.props;
    return (
      <FormItem {...formItemLayout} label={columnName} name={columnCode} rules={rules}>
        {this.renderItem(column)}
      </FormItem>
    );
  }

  renderFormItemText = column => {
    const {props} = this;
    const {initialValue, formItemLayout} = props;
    return (
      <FormItem {...formItemLayout} style={{marginBottom: 0}} label={column.columnName} name={column.columnCode}>
        <span>{this.formatValue(column, initialValue)}</span>
      </FormItem>
    );
  }

  render() {
    const {column, currentModel} = this.props;
    const {editField} = column;
    if (currentModel === 'add') {
      return this.renderFormItem(column);
    }
    if (currentModel === 'edit') {
      return editField !== 'Y' ? this.renderFormItemText(column) : this.renderFormItem(column);
    }
    return this.renderFormItem(column);
  }
}
