import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactAsyncCreatable from 'react-select/lib/AsyncCreatable';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';

export default
class AsyncCreatable extends Component {
  render() {
    const { className, ...restProps } = this.props;

    return (
      <ReactAsyncCreatable
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        components={{ MenuPortal }}
        {...restProps}
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
