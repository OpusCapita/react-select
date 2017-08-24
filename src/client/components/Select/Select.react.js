import React, { Component, PropTypes } from 'react';
import ReactSelect from 'react-select';
import './SelectCustom.less';

export default
class Select extends Component {
  render() {
    let { className, autosize, ...restProps } = this.props;

    return (
      <ReactSelect
        className={`opuscapita_react-select--1-0-0-rc-5 ${className}`}
        autosize={autosize}
        { ...restProps }
      />
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  autosize: PropTypes.bool
};
Select.defaultProps = {
  className: '',
  autosize: false
};
