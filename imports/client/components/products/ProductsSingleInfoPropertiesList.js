import React from 'react';

import ProductsSingleInfoPropertiesListItem from './ProductsSingleInfoPropertiesListItem';

const ProductsSingleInfoPropertiesList = (props) => {
  return (
    <div className="box-4-component-9">
      <div className="box-4-component-15">
        {props.properties.map((property) => {
          return <ProductsSingleInfoPropertiesListItem key={props.properties.indexOf(property)} {...property}/>
        })}
      </div>
    </div>
  );
};

export default ProductsSingleInfoPropertiesList;
