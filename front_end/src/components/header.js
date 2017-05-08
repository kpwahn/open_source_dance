import React, {Component} from 'react';
import '../../static/css/header.css';

class DanceHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <header className="header">
          <div className="header-container">
            <h1 className='header-title'> Open Source Dance </h1>
            <nav className="header-nav">
              <ul>
                <li>Contact Us</li>
                <li>
                  <a className="loginButton"> Login </a>
                </li>
                <li>
                  <a className="signUpButton"> Sign Up </a>
                </li>
              </ul>
            </nav>
            <div className="topMenuNav">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </header>
    );
  }
}

export default DanceHeader;
