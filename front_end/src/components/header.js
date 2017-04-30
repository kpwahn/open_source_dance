import React, {Component} from 'react';
import '../../style/header.css';

class DanceHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
          <header>
            <div className="header-container">
              <h1 className='header-title'> Dance Rhythm </h1>
              <div className='header-elements header-userName'>Venkata Rakesh </div>
              <div className='header-elements header-phoneNumber'>Phone : 111 111 1111 </div>
            </div>
          </header>
          <div id="slider">
            <figure>
              <img src="/static/images/dance1.jpg" alt />
              <img src="/static/images/dance2.jpg" alt />
              <img src="/static/images/dance3.jpg" alt />
              <img src="/static/images/dance4.jpg" alt />
            </figure>
          </div>
      </div>

    );
  }
}

export default DanceHeader;
