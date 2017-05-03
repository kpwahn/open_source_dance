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
            <div className="header-nav">
              <div className='header-elements'>Venkata Rakesh</div>
                <div className='header-elements'>Mr Wahnschaffey</div>
              <div className='header-elements'> Link </div>
            </div>
          </div>
        </header>
    );
  }
}

export default DanceHeader;
