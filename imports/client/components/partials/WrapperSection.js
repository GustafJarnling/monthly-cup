import React from 'react';

const WrapperSection = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        {props.children}
      </div>
    </div>
  );
};

export default WrapperSection;
