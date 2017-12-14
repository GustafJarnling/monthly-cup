import React from 'react';

const ProductDescriptionItem = (props) => {
  return (
    <div className="box-6">
      <div className="box-6-component-1">
        <h4>{props.title}</h4>
      </div>
      <div className="box-6-component-1">
        <div className="p-big">{props.description}</div>
      </div>
    </div>
  );
};

export default ProductDescriptionItem;
