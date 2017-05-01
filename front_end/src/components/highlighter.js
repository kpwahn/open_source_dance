import React, {Component} from 'react';
import '../../static/css/highlighter.css';

class Highlighter extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="showcase">
          <p className="imageContent">
            <span className="contentTitle">Dance Rhythm</span>
              Dance and let Dance. Welcome to the exiciting exclusive dance community.
            <a>Know more</a>
          </p>
      </section>
    );
  }
}

export default Highlighter;
