/*
   What is a SCOPE file. See documentation here:
   https://github.com/OpusCapitaBES/js-react-showroom-client/blob/master/docs/scope-component.md
*/

import React, { Component, PropTypes } from 'react';
import { showroomScopeDecorator } from 'opuscapita-showroom-client';

@showroomScopeDecorator
export default
class SelectScope extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        {this._renderChildren()}
      </div>
    );
  }
}

SelectScope.contextTypes = {
  i18n: PropTypes.object
};
SelectScope.childContextTypes = {
  i18n: PropTypes.object
};
