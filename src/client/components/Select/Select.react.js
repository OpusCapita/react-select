import React, { Component, PropTypes } from 'react';
import ReactSelect from 'react-select';
import './SelectDefault.less';
import './SelectCustom.less';

export default
class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  handleChange(value) {
    console.log(value);
    this.setState({ value });
  }

  render() {
    let { className, ...restProps } = this.props;
    let element = React.createElement(ReactSelect);
    console.log(element);
    return (
      <ReactSelect
        className={`opuscapita_react-select--1-0-0-rc-3 ${className}`}
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
