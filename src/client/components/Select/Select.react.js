import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import './SelectDefault.less';
import './SelectCustom.less';

export default
class Select extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactSelect
        className={`opuscapita_react-select--1-0-0-oc-3 ${className}`}
        { ...restProps }
      />
    );
  }
}

Select.propTypes = {
  className: PropTypes.string
};
Select.defaultProps = {
  className: ''
};
