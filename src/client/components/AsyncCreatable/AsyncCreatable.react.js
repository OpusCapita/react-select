import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncCreatable as ReactAsyncCreatable } from 'react-select';
import '../Select/SelectCustom.less';

export default
class AsyncCreatable extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactAsyncCreatable
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        { ...restProps }
      />
    );
  }
}

AsyncCreatable.propTypes = {
  className: PropTypes.string,
  isClearable: PropTypes.bool
};
AsyncCreatable.defaultProps = {
  className: '',
  isClearable: true
};
