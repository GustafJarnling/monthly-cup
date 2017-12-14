import React from 'react';

import ProductDescriptionListItem from './ProductDescriptionListItem';

const ProductDescriptionList = (props) => {
  return (
    <div className="content-wrapper-2 content-wrapper-2-is-last">
      <div className="grid-wrapper-2">
        {props.details.map((detail) => {
          return <ProductDescriptionListItem key={props.details.indexOf(detail)} {...detail}/>
        })}
      </div>
    </div>
  );
};

export default ProductDescriptionList;
