import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Creatable as ReactCreatable } from 'react-select';
import '../Select/SelectDefault.less';
import '../Select/SelectCustom.less';

export default
class Creatable extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactCreatable
        className={`opuscapita_react-select--1-0-0-oc-3 ${className}`}
        { ...restProps }
      />
    );
  }
}

Creatable.propTypes = {
  className: PropTypes.string
};
Creatable.defaultProps = {
  className: ''
};
