import React from 'react';

import ProductsSingleDescriptionList from './ProductsSingleDescriptionList';

const ProductsSingleDescription = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <div className="content-wrapper-2">
          <div className="content-wrapper-3">
            <h3>{props.title}</h3>
          </div>
          <div className="content-wrapper-3">
            <div className="content-component-2"></div>
          </div>
          <div className="content-wrapper-3">
            <div className="p-big">{props.description}</div>
          </div>
        </div>
        <ProductsSingleDescriptionList details={props.details}/>
      </div>
    </div>
  );
};

export default ProductsSingleDescription;
