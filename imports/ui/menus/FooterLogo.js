import React from 'react';

export default class FooterLogo extends React.Component {
  render() {
    return (
      <a href="#" className="footer-logo-link-box w-inline-block">
        <img src={this.props.src} className="footer-logo-pic"/>
      </a>
    );
  }
}
