import React from 'react';

import ProductSingle from './ProductSingle';

const ProductSingleList = (props) => {
  return (
    <div>
      {props.products.map((product) => {
        return <ProductSingle key={product._id} {...product}/>
      })}
    </div>
  );
};

export default ProductSingleList;
