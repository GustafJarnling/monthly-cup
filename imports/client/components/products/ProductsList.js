import React from 'react';

import ProductsListItem from './ProductsListItem';

const ProductsList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <div className="content-wrapper-1">
          <div className="content-component-1">
            <h2>Products</h2>
          </div>
        </div>
        <div className="grid-wrapper-1">
          {props.products.map((product) => {
            return <ProductsListItem key={product._id} {...product}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
