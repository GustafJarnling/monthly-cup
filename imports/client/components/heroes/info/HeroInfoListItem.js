import React from 'react';

const HeroInfoListItem = (props) => {
  return (
    <div className="box-3-component-2">
      <div className="box-3-component-3">
        <h4>{props.title}</h4>
      </div>
      <div className="box-3-component-3">
        <div className="p-big">{props.description}</div>
      </div>
      <div className="box-3-component-3">
        <a href={props.link_url} className="link-1 w-inline-block">
          <div>{props.link_text}</div>
        </a>
      </div>
    </div>
  );
};

HeroInfoListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  link_text: React.PropTypes.string.isRequired,
  link_url: React.PropTypes.string.isRequired
};

export default HeroInfoListItem;
