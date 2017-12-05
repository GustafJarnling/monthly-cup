import React from 'react';

import ActionsSmallListItem from './ActionsSmallListItem';

// import ActionsSmallAddItem from './ActionsSmallAddItem';

const ActionsSmallList = (props) => {
  return (
    <div className="call-of-action-section">
      <div className="container w-container">
        <div className="call-of-action-component-7">
          {/* <ActionsSmallAddItem/> */}
          {props.actionsSmall.map((action) => {
            return <ActionsSmallListItem key={action._id} {...action}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ActionsSmallList;
