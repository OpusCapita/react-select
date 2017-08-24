import React, { Component, PropTypes } from 'react';
import { Async as ReactAsync } from 'react-select';
import '../Select/SelectDefault.less';
import '../Select/SelectCustom.less';

export default
class Async extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactAsync
        className={`opuscapita_react-select--1-0-0-rc-5-oc-1 ${className}`}
        { ...restProps }
      />
    );
  }
}

Async.propTypes = {
  className: PropTypes.string
};
Async.defaultProps = {
  className: ''
};
