import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactCreatable from 'react-select/lib/Creatable';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';

export default ({ className = '', isClearable = true, ...restProps }) => (
  <ReactCreatable
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...restProps}
  />
);
