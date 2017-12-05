import React from 'react';

const ActionsBigButtonListItem = (props) => {
  return (
    <div className="call-of-action-component-2">
      <div className="call-of-action-component-3">
        <div className="call-of-action-component-4">
          <h2>{props.title}</h2>
        </div>
        <div className="call-of-action-component-5 w-hidden-medium w-hidden-small w-hidden-tiny"></div>
      </div>
      <div className="call-of-action-component-3">
        <div className="call-of-action-component-4">
          <div className="p-big">{props.description}</div>
        </div>
        <div className="call-of-action-component-5">
          <a href={props.link_url} className="button-1 button-small w-button">{props.link_text}</a>
        </div>
      </div>
    </div>
  );
};

ActionsBigButtonListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  link_text: React.PropTypes.string.isRequired,
  link_url: React.PropTypes.string.isRequired
};

export default ActionsBigButtonListItem;
