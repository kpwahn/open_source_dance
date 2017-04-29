import React, {Component} from 'react';
import '../../style/header.css';

class DanceHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
        <header>
          <h1 className='headerText'> Dance Rhythm </h1>
            <div>Phone : 111 111 1111 </div>
            <div>Venkata Rakesh </div>
        </header>

    );
  }
}

export default DanceHeader;
