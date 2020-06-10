import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';

import StandardPager from './StandardPager';

export default class UpDownPager extends PureComponent {
  state = {
    rowInfo: {},
  }

  setCurrentRowInfo = (rowInfo = {}) => {
    this.setState({
      rowInfo,
    });
    const { getTemplateSelectedRowInfo } = this.props;
    if (getTemplateSelectedRowInfo) {
      getTemplateSelectedRowInfo(rowInfo);
    }
  }

  renderUp() {
    const { props } = this;
    return (
      <StandardPager
        getCurrentRowInfo={this.setCurrentRowInfo}
        unlock={this.props.leftUnlock}
        pref="up_"
        {...props}
      />
    );
  }
  renderDown() {
    const { props } = this;
    const { rowInfo } = this.state;
    return (
      <StandardPager
        rowInfo={rowInfo}
        pref="down_"
        {...props}
      />
    );
  }
  renderPage() {
    return (
      <Fragment>
        <Row style={{ marginBottom: '24px' }}>
          <Col md={24} sm={12}>
            {this.renderUp()}
          </Col>
        </Row>
        <Row>
          <Col md={24} sm={12}>
            {this.renderDown()}
          </Col>
        </Row>
      </Fragment>
    );
  }
  render() {
    return (
      <Fragment>
        {this.renderPage()}
      </Fragment>
    );
  }
}
