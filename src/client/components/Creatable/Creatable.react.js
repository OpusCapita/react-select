import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Creatable as ReactCreatable } from 'react-select';
import '../Select/SelectCustom.less';

export default
class Creatable extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactCreatable
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        { ...restProps }
      />
    );
  }
}

Creatable.propTypes = {
  className: PropTypes.string,
  isClearable: PropTypes.bool
};
Creatable.defaultProps = {
  className: '',
  isClearable: true
};
