import React from 'react';

import ProductSlidesItem from './ProductSlidesItem';

const ProductSlides = (props) => {
  return (
    <div className="box-4-component-18">
      {props.images.map((image) => {
        let index = props.images.indexOf(image);
        if (index === 0) {
          return (
            <ProductSlidesItem
              key={index}
              classes="div-block-255 slide-1"
              {...image}
            />
          );
        } else if (index === 1) {
          return (
            <ProductSlidesItem
              key={index}
              classes="div-block-255 slide-2"
              {...image}
            />
          );
        } else {
          return (
            <ProductSlidesItem
              key={index}
              classes="slide-3 slide-wrapper"
              {...image}
            />
          );
        }
      })}
    </div>
  );
};

export default ProductSlides;
