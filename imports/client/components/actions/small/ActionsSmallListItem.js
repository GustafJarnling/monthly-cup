import React from 'react';

const ActionsSmallListItem = (props) => {
  return (
    <div className="call-of-action-component-8">
      <div className="call-of-action-component-10">
        <div className="call-of-action-component-11">
          <div className="call-of-action-component-12">
            <h4>{props.title}</h4>
          </div>
          <div>
            <a href={props.link_url} className="link-1 w-inline-block">
              <div>{props.link_text}</div>
            </a>
          </div>
        </div>
        <div className="call-of-action-component-13">
          <img src={props.image_src} srcSet={props.image_srcSet} sizes="(max-width: 479px) 100vw, (max-width: 767px) 49vw, (max-width: 991px) 51vw, 24vw"/>
        </div>
      </div>
    </div>
  );
};

ActionsSmallListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link_text: React.PropTypes.string.isRequired,
  link_url: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  image_srcSet: React.PropTypes.string
};

export default ActionsSmallListItem;
