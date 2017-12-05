import React from 'react';

const ActionsBigSocialListItem = (props) => {
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
          <div className="call-of-action-component-6">
            <div className="box-26">
              <div className="p-big">Follow us !</div>
            </div>
            <div className="box-26">
              <a href="#" className="icon-wrapper-1 w-inline-block">
                <img src="images/-Facebook-3x.png" className="icon-pic-1"/>
              </a>
            </div>
            <div className="box-26">
              <a href="#" className="icon-wrapper-1 w-inline-block">
                <img src="images/-Twitter3x.png" className="icon-pic-1"/>
              </a>
            </div>
            <div className="box-26">
              <a href="#" className="icon-wrapper-1 w-inline-block">
                <img src="images/-G3x.png" className="icon-pic-1"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ActionsBigSocialListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default ActionsBigSocialListItem;
