import React from 'react';

const BoxIcon = (props) => {
  return (
    <div className="box-6">
      <div className="content-component-1">
        <div className="box-6-component-1">
          <img src={props.image_src} className="icon-pic-c"/>
        </div>
        <div className="box-6-component-1">
          <h4>{props.title}</h4>
        </div>
        <div className="box-6-component-1">
          <div className="p-big">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default BoxIcon;
