import React, { Component } from 'react';
import DanceHeader from './header';
import ShowCase from './show-case';
import FeatureTiles from './feature-tiles';

export default class App extends Component {
  render() {
    return (
      <div>
        <DanceHeader />
          <div className="row">
            <ShowCase />
            <FeatureTiles />
          </div>
      </div>
    );
  }
}
