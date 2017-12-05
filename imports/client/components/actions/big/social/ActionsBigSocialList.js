import React from 'react';

import ActionsBigSocialListItem from './ActionsBigSocialListItem';

const ActionsBigSocialList = (props) => {
  return (
    <div className="call-of-action-section">
      <div className="container w-container">
        <div className="call-of-action-component-1">
          {props.actionsBigSocial.map((action) => {
            return <ActionsBigSocialListItem key={action._id} {...action}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionsBigSocialList;
