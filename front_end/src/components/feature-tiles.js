import React, {Component} from 'react';
import '../../static/css/feature-tiles.css';

class FeatureTiles extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "feature-tiles">
          <div className="featureTile">
            <div className= "text-content">
                <h2 className="text-content-heading">Heading</h2>
                <div className="text-content-article"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
            </div>
            <div className= "image">
              <img className="image-content" src="/static/images/lindy_flip.jpg" />
            </div>
          </div>

          <div className="featureTile">
            <div className= "text-content">
                <h2 className="text-content-heading">Heading</h2>
                <div className="text-content-article"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
            </div>
            <div className= "image">
              <img className="image-content" src="/static/images/lindy_flip.jpg" />
            </div>
          </div>

          <div className="featureTile">
            <div className= "text-content">
                <h2 className="text-content-heading">Heading</h2>
                <div className="text-content-article"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
            </div>
            <div className= "image">
              <img className="image-content" src="/static/images/lindy_flip.jpg" />
            </div>
          </div>

      </div>
    );
  }
}

export default FeatureTiles;
