import React, { Component, PropTypes } from 'react';
import { AsyncCreatable as ReactAsyncCreatable } from 'react-select';
import '../Select/SelectDefault.less';
import '../Select/SelectCustom.less';

export default
class AsyncCreatable extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactAsyncCreatable
        className={`opuscapita_react-select--1-0-0-rc-5-oc-1 ${className}`}
        { ...restProps }
      />
    );
  }
}

AsyncCreatable.propTypes = {
  className: PropTypes.string
};
AsyncCreatable.defaultProps = {
  className: ''
};
