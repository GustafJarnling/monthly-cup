import React from 'react';

import ProductSingleInfo from './ProductSingleInfo';
import ProductSingleDescription from './ProductSingleDescription';

const ProductSingle = (props) => {
  return (
    <div>
      <ProductSingleInfo
        title={props.title}
        images={props.images}
        currency={props.price[0].currency_short}
        price_single={props.price[0].price_single}
        price_subscription={props.price[0].price_subscription}
        properties={props.properties}
        rating={props.rating}
        reviews={props.reviews}
      />
      <ProductSingleDescription
        title="Product description"
        description={props.description}
        details={props.details}
      />
    </div>
  );
};

export default ProductSingle;