import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactAsyncCreatable from 'react-select/lib/AsyncCreatable';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';

export default ({ className = '', isClearable = true, ...restProps }) => (
  <ReactAsyncCreatable
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...restProps}
  />
);
