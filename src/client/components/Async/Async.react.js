import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import '../Select/SelectCustom.less';

export default
class Async extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <AsyncSelect
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        { ...restProps }
      />
    );
  }
}

Async.propTypes = {
  className: PropTypes.string,
  isClearable: PropTypes.bool
};
Async.defaultProps = {
  className: '',
  isClearable: true
};
