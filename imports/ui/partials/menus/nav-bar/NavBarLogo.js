import React from 'react';

const NavBarLogo = (props) => {
  return (
    <a href="/" className="nav-bar-logo-wrapper w-inline-block">
      <img src={props.src} className="nav-bar-logo"/>
    </a>
  );
};

NavBarLogo.propTypes = {
  src: React.PropTypes.string.isRequired
}

export default NavBarLogo;
