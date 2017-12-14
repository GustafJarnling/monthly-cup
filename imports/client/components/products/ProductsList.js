import React from 'react';

import ProductsListItem from './ProductsListItem';

const ProductsList = (props) => {
  return (
    <div className="grid-wrapper-1">
      {props.products.map((product) => {
        return <ProductsListItem key={product._id} {...product}/>
      })}
    </div>
  );
};

export default ProductsList;
