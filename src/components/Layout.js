'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="img/boiler-room-logo.jpg"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            Here are my top three Boiler Room sets, in no particular order. Click on the links to find more details.
          </p>
        </footer>
      </div>
    );
  }
}
