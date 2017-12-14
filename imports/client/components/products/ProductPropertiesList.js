import React from 'react';

import ProductPropertiesListItem from './ProductPropertiesListItem';

const ProductPropertiesList = (props) => {
  return (
    <div className="box-4-component-9">
      <div className="box-4-component-15">
        {props.properties.map((property) => {
          return <ProductPropertiesListItem key={props.properties.indexOf(property)} {...property}/>
        })}
      </div>
    </div>
  );
};

export default ProductPropertiesList;
