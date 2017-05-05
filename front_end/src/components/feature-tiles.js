import React, {Component} from 'react';
import '../../static/css/feature-tiles.css';

class FeatureTiles extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      

      <div className="featureTile">
        <div className= "right-box">
          <div className="box-heading">
            <h2>Heading</h2>
           </div>
          <div className="box-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
        </div>
        <div className= "left-box">
          <img className="image-box" src="/static/images/lindy_flip.jpg" />
        </div>
      </div>

      <div className="featureTile">
        <div className= "left-box">
          <div className="box-heading">
            <h2>Heading</h2>
           </div>
          <div className="box-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
        </div>
        <div className= "right-box">
          <img className="image-box" src="/static/images/lindy_flip.jpg" />
        </div>
      </div>


      <div className="featureTile">
        <div className= "right-box">
          <div className="box-heading">
            <h2>Heading</h2>
           </div>
          <div className="box-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada felis nibh, at maximus ipsum finibus id. Pellentesque faucibus justo eget posuere placerat. Sed vel pharetra lectus, eget mattis ante. Nullam at ex a est finibus eleifend vel egestas erat. Sed fermentum tristique bibendum. Duis lacinia neque eu massa tincidunt varius.</div>
        </div>
        <div className= "left-box">
          <img className="image-box" src="/static/images/lindy_flip.jpg" />
        </div>
      </div>

      </div>
    );
  }
}

export default FeatureTiles;
