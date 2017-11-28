import React from 'react';

import NavBarComponent1 from '../menus/NavBarComponent1';
import NavBarComponent4 from '../menus/NavBarComponent4';

export default class NavBarAbove extends React.Component {
  render() {
    return (
      <div className="nav-bar-above">
        <div className="container w-container">
          <div className="nav-bar-component-2">
            <NavBarComponent1/>
            <NavBarComponent4/>
          </div>
        </div>
      </div>
    );
  }
}
