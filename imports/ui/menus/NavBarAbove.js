import React from 'react';

import NavBarAboveLeft from './NavBarAboveLeft';
import NavBarAboveRight from './NavBarAboveRight';

export default class NavBarAbove extends React.Component {
  render() {
    return (
      <div className="nav-bar-above">
        <div className="container w-container">
          <div className="nav-bar-component-2">
            <NavBarAboveLeft/>
            <NavBarAboveRight/>
          </div>
        </div>
        <div className="floating-nav-bar-trigger"></div>
      </div>
    );
  }
}
