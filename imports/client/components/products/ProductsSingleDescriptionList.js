import React from 'react';

import ProductsSingleDescriptionListItem from './ProductsSingleDescriptionListItem';

const ProductsSingleDescriptionList = (props) => {
  return (
    <div className="content-wrapper-2 content-wrapper-2-is-last">
      <div className="grid-wrapper-2">
        {props.details.map((detail) => {
          return <ProductsSingleDescriptionListItem key={props.details.indexOf(detail)} {...detail}/>
        })}
      </div>
    </div>
  );
};

export default ProductsSingleDescriptionList;
