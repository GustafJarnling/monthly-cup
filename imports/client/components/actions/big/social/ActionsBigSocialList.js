import React from 'react';

import ActionsWrapper from '../../ActionsWrapper';
import ActionsBigSocialListItem from './ActionsBigSocialListItem';

const ActionsBigSocialList = (props) => {
  return (
    <ActionsWrapper>
      {props.actionsBigSocial.map((action) => {
        return <ActionsBigSocialListItem key={action._id} {...action}/>
      })}
    </ActionsWrapper>
  );
};

export default ActionsBigSocialList;
