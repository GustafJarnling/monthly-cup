import React from 'react';

import ProductThumbsItem from './ProductThumbsItem';

const ProductThumbs = (props) => {
  return (
    <div className="box-4-component-19">
      <div className="box-4-component-20">
        {props.images.map((image) => {
          return (
            <ProductThumbsItem
              key={props.images.indexOf(image)}
              {...image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductThumbs;
