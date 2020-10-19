import React, { PureComponent } from 'react';
import { Table, Alert } from 'antd';
import styles from './index.less';

function initTotalList(columns) {
  const totalList = [];
  columns.forEach(column => {
    if (column.needTotal) {
      totalList.push({ ...column, total: 0 });
    }
  });
  return totalList;
}

class StandardTable extends PureComponent {
  constructor(props) {
    super(props);
    const { columns } = props;
    const needTotalList = initTotalList(columns);

    this.state = {
      selectedRowKeys: [],
      needTotalList,
      // expandedRow: [],
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // clean state
    if (nextProps.selectedRows.length === 0) {
      const needTotalList = initTotalList(nextProps.columns);
      this.setState({
        selectedRowKeys: [],
        needTotalList,
      });
    }
    else if (nextProps.selectedRows.length > 0) {
      this.setState({
        selectedRowKeys: nextProps.selectedRows.map(row => row.id),
      });
    }
  }

  handleRowSelectChange = (selectedRowKeys, selectedRows) => {
    const { state } = this;
    let needTotalList = [...state.needTotalList];
    needTotalList = needTotalList.map(item => ({
        ...item,
        total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
      }));

    const { onSelectRow } = this.props;
    if (onSelectRow) {
      onSelectRow(selectedRows);
    }

    this.setState({ selectedRowKeys, needTotalList });
  };

  handleTableChange = (pagination, filters, sorter) => {
    this.props.onChange(pagination, filters, sorter);
  }

  cleanSelectedKeys = () => {
    this.handleRowSelectChange([], []);
  }

  // handleOnExpandedRowsChange = expandedRows => {
  //   const row = expandedRows.slice(-1);
  //   this.setState({ expandedRow: row });
  // }

  render() {
    const { selectedRowKeys, needTotalList } = this.state;
    const { data: { list, pagination }, loading, columns, metaModel, tableSelectType } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      ...pagination,
      ...(this.props.showTotal ? this.props.showTotal(metaModel) : ''),
    };

    const rowSelection = {
      type: tableSelectType || 'checkbox',
      fixed: true,
      selectedRowKeys,
      onChange: this.handleRowSelectChange,
      getCheckboxProps: record => ({
        disabled: record.disabled === 'Y',
      }),
    };

    return (
      <div className={styles.standardTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={(
              <div>
                已选择 <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> 项&nbsp;&nbsp;
                {
                  needTotalList.map(item => (
                    <span style={{ marginLeft: 8 }} key={item.dataIndex}>{item.title}总计&nbsp;
                      <span style={{ fontWeight: 600 }}>
                        {item.render ? item.render(item.total) : item.total}
                      </span>
                    </span>
                    )
                  )
                }
                <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>清空</a>
              </div>
            )}
            type="info"
            showIcon
          />
        </div>
        <Table
          {...this.props}
          loading={loading}
          rowKey={record => record.id}
          rowSelection={rowSelection}
          dataSource={list}
          columns={columns}
          pagination={paginationProps}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default StandardTable;
