import React, {Component} from 'react';
import '../../static/css/highlighter.css';

class Highlighter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="slider">
        <figure>
          <img src="/static/images/dance1.jpg" alt />
          <img src="/static/images/dance2.jpg" alt />
          <img src="/static/images/dance3.jpg" alt />
          <img src="/static/images/dance4.jpg" alt />
          <img src="/static/images/dance5.jpg" alt />
        </figure>
      </div>
    );
  }
}

export default Highlighter;
