import React from 'react';

import ActionsBigButtonListItem from './ActionsBigButtonListItem';

const ActionsBigButtonList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        {props.actionsBigButton.map((action) => {
          return <ActionsBigButtonListItem key={action._id} {...action}/>
        })}
      </div>
    </div>
  );
};

export default ActionsBigButtonList;
