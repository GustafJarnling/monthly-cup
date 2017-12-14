import React from 'react';

const ProductsComparisonListItem = (props) => {
  return (
    <div className={props.classes}>
      <div className="box-9-component-2">
        <div className="box-9-component-3 box-9-component-3-is-first">
          <h4>{props.size}</h4>
        </div>
        <div className="box-9-component-3 box-9-component-3-is-second">
          <img src={props.images[0].image_src} srcSet={props.images[0].image_srcSet} sizes="(max-width: 479px) 100vw, (max-width: 767px) 212px, 21vw" className="box-9-component-6"/>
        </div>
        <div className="box-9-component-3 box-9-component-3-is-third">
          <div className="p-big">{props.target_group[0].value}</div>
          <div className="p-big">{props.target_group[1].value}</div>
        </div>
        <div className="box-9-component-3 box-9-component-3-is-fourth">
          <div className="box-9-component-5">
            <div>{props.properties[0].value}</div>
          </div>
          <div className="box-9-component-5">
            <div>{props.properties[1].value}</div>
          </div>
          <div className="box-9-component-5">
            <div>{props.properties[2].value}</div>
          </div>
          <div className="box-9-component-5">
            <div>{props.properties[3].value}</div>
          </div>
        </div>
        <div className="box-9-component-4">
          <a href={props.link_button_ref} className="button-1 button-small w-button">{props.link_button_text}</a>
        </div>
      </div>
    </div>
  );
};

export default ProductsComparisonListItem;
