import React from 'react';

const ProductPropertiesListItem = (props) => {
  return (
    <div className="box-4-component-16">
      <div className="box-4-component-14">
        <a href="#" className="icon-wrapper-1 w-inline-block">
          <img src="images/Tick3x.png" width="23" className="tick-icon"/>
        </a>
      </div>
      <div>
        <div>{props.value}</div>
      </div>
    </div>
  );
};

export default ProductPropertiesListItem;
