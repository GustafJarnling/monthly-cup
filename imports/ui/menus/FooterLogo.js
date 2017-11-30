import React from 'react';

const FooterLogo = (props) => {
  return (
    <a href="/" className="footer-logo-link-box w-inline-block">
      <img src={props.src} className="footer-logo-pic"/>
    </a>
  );
};

FooterLogo.propTypes = {
  src: React.PropTypes.string.isRequired
};

export default FooterLogo;
