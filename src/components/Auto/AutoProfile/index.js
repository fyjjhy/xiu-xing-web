/* eslint-disable no-eval */
import React, { PureComponent } from 'react';
import { Modal, Card, Button, Popconfirm, Descriptions } from 'antd';

import { getValueList, getDictData } from '../../../services/loadData';
import { linkButtonGroup } from '../../../utils/linkButtonGroup';

const ButtonGroup = Button.Group;
const { Item } = Descriptions;

export default class AutoProfile extends PureComponent {
  getDescription = (column, data) => {
    const { dictList } = this.props;
    const [valueType, ...rest] = getValueList(column);

    if (!!valueType && valueType === 'dict' && rest && rest.length > 0) {
      const [dictCode] = rest;
      const dictDataList = getDictData(dictCode, dictList);
      if (column.displayType === 'C' || column.displayType === 'MS') {
        const currentDictData = dictDataList.filter(dictData => {
          const { dataCode } = dictData;
          const text = data[column.columnCode];
          return text ? text.indexOf(dataCode) > -1 : text;
        });
        if (currentDictData.length > 0) {
          const dataName = [];
          currentDictData.forEach(dictData => {
            dataName.push(dictData.dataName);
          });
          return dataName.join(',');
        }
          return data[column.columnCode];

      }
        const [currentDictData] = dictDataList.filter(dictData => {
          const { dataCode } = dictData;
          return dataCode === data[column.columnCode];
        });
        if (currentDictData) {
          const { dataName } = currentDictData;
          return dataName;
        }
          return data[column.columnCode];


    } if (this.props[column.renderProfile]) {
      return this.props[column.renderProfile](data[column.columnCode], data);
    } if (valueType === 'service' && this.props.serviceTransferData && this.props.serviceTransferData.length > 0) {
      const serviceData = this.props.serviceTransferData.find(service => service.value === data[column.columnCode]);
      if (serviceData) {
        return serviceData.label;
      }
    } else {
      return data[column.columnCode];
    }
  }

  handleRowOperation = (record, action) => linkButtonGroup(record, action)

  renderProfile() {
    const { metaModel } = this.props;
    const { columnList } = metaModel;
    const { data } = this.props[metaModel.funcModelCode];
    if (data) {
      return (
        <Descriptions column={1}>
          {
                columnList.filter(column => (column.profileDisplayFlag === 'Y')).map(column => (
                  <Item key={column.columnCode} label={<strong>{column.columnName}</strong>}><span>{this.getDescription(column, data)}</span></Item>
                ))
                }
        </Descriptions>
      );
    }
    return '';
  }

  renderButtonGroup() {
    const { metaModel } = this.props;
    const { data } = this.props[metaModel.funcModelCode];
    const { actionList } = metaModel;
    if (actionList.length > 0) {
      return (
        <ButtonGroup>
          {actionList.filter(action => (action.type === 'L')).map(action => {
                    let fn = this.props[action.code];
                    if (!fn && action.servAction === 'update') {
                        fn = this.props.handleEditClick;
                    }

                    if (action.propFlag === 'Y') {
                      const propMsg = action.propMsg || `确定要${action.name}吗？`;
                      return (
                        <Popconfirm key={action.code} placement="top" title={propMsg} onConfirm={() => { if (fn) { fn(data); } }} okText="确定" cancelText="取消">
                          <Button disabled={this.handleRowOperation(data, action)} type={action.displayType} icon={action.icon}>{action.name || '操作'}</Button>
                        </Popconfirm>
                          );
                      }
                        return (
                          <Button key={action.code} onClick={() => (fn && fn(data))} type={action.displayType} icon={action.icon}>{action.name || '操作'}</Button>
                        );

                })}
        </ButtonGroup>
      );
    }
    return '';
  }

  render() {
    const { metaModel, visible, handleCancel } = this.props;
    const loading = this.props.loading.models[metaModel.funcModelCode];

    return (
      <Modal
        {...this.props}
        maskClosable={false}
        title={metaModel.modelName}
        visible={visible}
        confirmLoading={loading}
        onCancel={handleCancel}
        onOk={handleCancel}
        footer={null}
      >
        <Card bordered={false} loading={loading}>
          {this.renderProfile()}
        </Card>
      </Modal>
    );
  }
}
