import React from 'react';

import NavBarAbove from '../menus/NavBarAbove';
import NavBarBelow from '../menus/NavBarBelow';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavBarAbove/>
        <NavBarBelow/>
      </div>
    );
  }
}
