/* eslint-disable react/prop-types */
import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';
import defaultStyles from '../defaultStyles';

export default ({ innerRef = () => {}, className = '', isClearable = true, ...restProps }) => (
  <AsyncSelect
    ref={innerRef}
    isClearable={isClearable}
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...defaultStyles}
    {...restProps}
  />
);
