import React from 'react';

const ProductsListItem = (props) => {
  return (
    <div className="box-1">
      <div className="box-1-component-1">
        <a href="#" className="box-1-component-2 w-inline-block">
          <h3>{props.title}</h3>
        </a>
        <a href="#" className="box-1-component-2 w-inline-block">
          <img src={props.images[0].image_src} srcSet={props.images[0].image_srcset} sizes="(max-width: 991px) 148px, 19vw" className="image"/>
        </a>
        <a href="#" className="box-1-component-2 w-inline-block">
          <div className="p-big">{props.slogan}</div>
        </a>
        <div className="box-1-component-2">
          <a href="#" className="button-1 w-button">View product</a>
        </div>
      </div>
    </div>
  );
};

ProductsListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  slogan: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  image_srcset: React.PropTypes.string.isRequired
};

export default ProductsListItem;
