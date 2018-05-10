import React, { Component } from 'react';
import NavBar from './../navbar/index.js';
import ProjectGrid from './../project-grid/index.js';

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProjectGrid />
      </div>
    );
  }
}