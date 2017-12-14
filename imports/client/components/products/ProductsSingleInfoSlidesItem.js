import React from 'react';

const ProductsSingleInfoSlidesItem = (props) => {
  return (
    <div className={props.classes}>
      <img src={props.image_src} srcSet={props.image_srcSet} sizes={props.sizes} className="slide-pic"/>
    </div>
  );
};

export default ProductsSingleInfoSlidesItem;
