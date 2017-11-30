import React from 'react';

const NavBarListItem = (props) => {
  return (
    <div className="nav-bar-above-item-b">
      <a href={props.path} className="div-block-13 nav-bar-above-link w-inline-block">
        <div>{props.title}</div>
      </a>
    </div>
  );
};

NavBarListItem.propTypes = {
  path: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
};

export default NavBarListItem;
