import React from 'react';

import ActionsBigListItem from './ActionsBigListItem';

const ActionsBigList = (props) => {
  return (
    <div className="call-of-action-section">
      <div className="container w-container">
        <div className="call-of-action-component-1">
          {props.actionsBig.map((action) => {
            return <ActionsBigListItem key={action._id} {...action}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionsBigList;
