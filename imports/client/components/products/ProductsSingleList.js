import React from 'react';

import ProductsSingle from './ProductsSingle';

const ProductsSingleList = (props) => {
  return (
    <div>
      {props.products.map((product) => {
        return <ProductsSingle key={product._id} {...product}/>
      })}
    </div>
  );
};

export default ProductsSingleList;
