import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import './SelectCustom.less';

export default
class Select extends Component {
  render() {
    let { className, ...restProps } = this.props;

    return (
      <ReactSelect
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        { ...restProps }
      />
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  isClearable: PropTypes.bool
};
Select.defaultProps = {
  className: '',
  isClearable: true
};
