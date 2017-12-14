import React from 'react';

const ActionsWrapper = (props) => {
  return (
    <div className="call-of-action-section">
      <div className="container w-container">
        {props.children}
      </div>
    </div>
  );
};

export default ActionsWrapper;
