/* eslint-disable react/prop-types */
import React from 'react';
import ReactSelect from 'react-select';
import './SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';
import defaultStyles from '../defaultStyles';
import defaults from "lodash/defaults"

export default ({ innerRef = () => {}, className = '', isClearable = true, ...restProps }) => (
  <ReactSelect
    ref={innerRef}
    isClearable={isClearable}
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...defaults(restProps, defaultStyles)}
  />
);
