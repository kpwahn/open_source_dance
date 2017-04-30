import React, { Component } from 'react';
import DanceHeader from './header';
import Highlighter from './highlighter';

export default class App extends Component {
  render() {
    return (
      <div>
        <DanceHeader />
        <Highlighter />
      </div>
    );
  }
}
