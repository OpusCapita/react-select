import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Creatable as ReactCreatable } from 'react-select';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';

export default
class Creatable extends Component {
  render() {
    const { className, ...restProps } = this.props;

    return (
      <ReactCreatable
        className={`opuscapita_react-select--2-0-0 ${className}`}
        classNamePrefix="opuscapita_react-select"
        components={{ MenuPortal }}
        {...restProps}
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
