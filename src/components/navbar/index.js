import React, { Component, Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import { blue100 } from 'material-ui/styles/colors';

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <AppBar 
          title='mbc portfolio' 
          zDepth={0}
          style={{ background: blue100 }}
        />
      </Fragment>
    );
  }
}