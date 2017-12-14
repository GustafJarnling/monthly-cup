import React from 'react';

import ActionsWrapper from '../ActionsWrapper';
import ActionsWrapperTwoColumns from '../ActionsWrapperTwoColumns';
import ActionsSmallListItem from './ActionsSmallListItem';

const ActionsSmallList = (props) => {
  return (
    <ActionsWrapper>
      <ActionsWrapperTwoColumns>
        {props.actionsSmall.map((action) => {
          return <ActionsSmallListItem key={action._id} {...action}/>;
        })}
      </ActionsWrapperTwoColumns>
    </ActionsWrapper>
  );
};

export default ActionsSmallList;
