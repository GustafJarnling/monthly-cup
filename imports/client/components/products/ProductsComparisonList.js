import React from 'react';

import ProductsComparisonListItem from './ProductsComparisonListItem';

const ProductsComparisonList = (props) => {
  return (
    <div className="box-9">
      {props.products.map((product) => {
        let index = props.products.indexOf(product);
        if (index === 0) {
          return (
            <ProductsComparisonListItem
              key={product._id}
              classes="box-9-component-1"
              {...product}
            />
          );
        } else if (index === 1) {
          return (
            <ProductsComparisonListItem
              key={product._id}
              classes="div-block-142"
              {...product}
            />
          );
        } else {
          return (
            <ProductsComparisonListItem
              key={product._id}
              classes="div-block-143"
              {...product}
            />
          );
        }
      })}
    </div>
  );
};

export default ProductsComparisonList;
