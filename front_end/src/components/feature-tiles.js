import React, {Component} from 'react';
import '../../static/css/feature-tiles.css';

class FeatureTiles extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tileContainer">
        <div className="tileBox">
          <h1>Show your style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius. </p>
        </div>

        <div className="tileBox">
          <h1>Add to collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius. </p>
        </div>

        <div className="tileBox">
          <h1>Idols</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius. </p>
        </div>

      </section>
    );
  }
}

export default FeatureTiles;
