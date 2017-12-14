import React from 'react';

const HeaderPage = (props) => {
  return (
    <div className="content-wrapper-1 content-wrapper-1-is-last">
      <div className="content-component-1">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

HeaderPage.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default HeaderPage;
