import React, {Component} from 'react';
import '../../static/css/header.css';

class DanceHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <header>
          <div className="header-container navbar-fixed-top">
            <h1 className='header-title'> Dance Rhythm </h1>
            <div className='header-elements header-userName'>Venkata Rakesh </div>
            <div className='header-elements header-phoneNumber'>Phone : 111 111 1111 </div>
          </div>
        </header>
    );
  }
}

export default DanceHeader;
