import React from 'react';

export default class NavBarLogo extends React.Component {
  render() {
    return (
      <a href="/" className="nav-bar-logo-wrapper w-inline-block">
        <img src={this.props.src} className="nav-bar-logo"/>
      </a>
    );
  }
}
