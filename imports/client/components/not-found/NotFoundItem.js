import React from 'react';

const NotFoundItem = (props) => {
  return (
    <div className="grid-wrapper-7">
      <div className="content-component-6">
        <h1>{props.title}</h1>
      </div>
      <div className="content-component-6">
        <img src={props.image_src} srcSet={props.image_srcSet} sizes={props.image_sizes} className="content-component-7"/>
      </div>
      <div className="content-component-6">
        <div>{props.description}</div>
      </div>
    </div>
  );
};

NotFoundItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  image_srcSet: React.PropTypes.string.isRequired,
  image_sizes: React.PropTypes.string.isRequired
};

export default NotFoundItem;
