import React from 'react';

const ProductsSingleInfoThumbsItem = (props) => {
  return (
    <div className="div-block-102 slide-thumb-wrapper">
      <img src={props.image_src} srcSet={props.image_srcSet} sizes={props.sizes} className="slide-thumb-pic"/>
    </div>
  );
};

export default ProductsSingleInfoThumbsItem;
