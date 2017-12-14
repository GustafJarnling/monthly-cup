import React from 'react';

import ProductsSingleInfoThumbsItem from './ProductsSingleInfoThumbsItem';

const ProductsSingleInfoThumbs = (props) => {
  return (
    <div className="box-4-component-19">
      <div className="box-4-component-20">
        {props.images.map((image) => {
          return (
            <ProductsSingleInfoThumbsItem
              key={props.images.indexOf(image)}
              {...image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsSingleInfoThumbs;
