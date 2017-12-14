import React from 'react';

const HeaderWithSubtitle = (props) => {
  return (
    <div className="content-wrapper-2 content-wrapper-2-is-last">
      <div className="content-wrapper-3">
        <div className="content-component-1">
          <h2>{props.title}</h2>
        </div>
      </div>
      <div className="content-wrapper-3">
        <div className="content-component-1">
          <div className="p-big">{props.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

HeaderWithSubtitle.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export default HeaderWithSubtitle;
