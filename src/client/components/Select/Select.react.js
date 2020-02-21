/* eslint-disable react/prop-types */
import React from 'react';
import ReactSelect from 'react-select';
import './SelectCustom.less';
import MenuPortal from '../MenuPortal__fix.react';
import { mergeDefaultStyles } from '../defaultStyles';

export default ({ innerRef = () => {}, className = '', isClearable = true, styles, ...restProps }) => (
  <ReactSelect
    ref={innerRef}
    isClearable={isClearable}
    className={`opuscapita_react-select--2-0-0 ${className}`}
    classNamePrefix="opuscapita_react-select"
    components={{ MenuPortal }}
    styles={mergeDefaultStyles(styles)}
    {...restProps}
  />
);
