import React from 'react';

const SimpleHeader = (props) => {
  return (
    <div className="content-wrapper-1 content-wrapper-1">
      <div className="content-component-1">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

SimpleHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default SimpleHeader;
