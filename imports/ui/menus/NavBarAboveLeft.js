import React from 'react';

import NavBarLogo from './NavBarLogo';
import NavBarList from './NavBarList';

export default () => {
  return (
    <div className="nav-bar-component-1">
      <NavBarLogo src="images/master3x.png"/>
      <NavBarList/>
    </div>
  );
};
