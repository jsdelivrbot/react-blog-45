import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Simple blog application
        {this.props.children}
      </div>
    );
  }
}
