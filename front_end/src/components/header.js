import React, {Component} from 'react';
import '../../static/css/header.css';

class DanceHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <header>
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
          </div>
        </header>
    );
  }
}

export default DanceHeader;
