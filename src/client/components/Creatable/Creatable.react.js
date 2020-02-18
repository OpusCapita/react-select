/* eslint-disable react/prop-types */
import React from 'react';
import ReactCreatable from 'react-select/lib/Creatable';
import '../Select/SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';
import defaultStyles from '../defaultStyles';

export default ({ innerRef = () => {}, className = '', isClearable = true, ...restProps }) => (
  <ReactCreatable
    ref={innerRef}
    isClearable={isClearable}
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    {...defaultStyles}
    {...restProps}
  />
);
