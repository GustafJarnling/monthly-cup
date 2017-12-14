import React from 'react';

import ProductsSingleInfo from './ProductsSingleInfo';
import ProductsSingleDescription from './ProductsSingleDescription';

const ProductsSingle = (props) => {
  return (
    <div>
      <ProductsSingleInfo
        name={props.name}
        images={props.images}
        currency={props.price[0].currency_short}
        price_single={props.price[0].price_single}
        price_subscription={props.price[0].price_subscription}
        properties={props.properties}
      />
      <ProductsSingleDescription
        title="Product description"
        description={props.description}
        details={props.details}
      />
    </div>
  );
};

export default ProductsSingle;
