import React, { PureComponent, Fragment } from 'react';
import { Row, Col } from 'antd';

import StandardPager from './StandardPager';

export default class LeftRightPager extends PureComponent {
  state = {
    rowInfo: {},
  }

  setCurrentRowInfo = (rowInfo = {}) => {
    this.setState({
      rowInfo,
    });
  }

  renderLeft() {
    const { props } = this;
    return (
      <StandardPager
        getCurrentRowInfo={this.setCurrentRowInfo}
        unlock={this.props.leftUnlock}
        pref="left_"
        {...props}
      />
    );
  }
  renderRight() {
    const { props } = this;
    const { rowInfo } = this.state;
    return (
      <StandardPager
        rowInfo={rowInfo}
        pref="right_"
        {...props}
      />
    );
  }
  renderPage() {
    return (
      <Row gutter={4}>
        <Col md={12} sm={12}>
          {this.renderLeft()}
        </Col>
        <Col md={12} sm={12}>
          {this.renderRight()}
        </Col>
      </Row>
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
