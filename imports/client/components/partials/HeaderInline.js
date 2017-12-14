import React from 'react';

const HeaderInline = (props) => {
  return (
    <div className="content-wrapper-1">
      <div className="content-component-1">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

HeaderInline.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default HeaderInline;
