import React, { Component, Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <AppBar 
          title='mbc portfolio' 
          titleStyle={{ textAlign: 'center' }}
          zDepth={0}
          showMenuIconButton={false}
        />
      </Fragment>
    );
  }
}