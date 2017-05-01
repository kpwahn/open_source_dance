import React, { Component } from 'react';
import DanceHeader from './header';
import Highlighter from './highlighter';
import KnowMore from './know-more';

export default class App extends Component {
  render() {
    return (
      <div>
        <DanceHeader />
        <Highlighter />
        <KnowMore />
      </div>
    );
  }
}
