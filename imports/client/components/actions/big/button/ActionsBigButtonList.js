import React from 'react';

import WrapperSection from '../../../partials/WrapperSection';
import ActionsBigButtonListItem from './ActionsBigButtonListItem';

const ActionsBigButtonList = (props) => {
  return (
    <WrapperSection>
      {props.actionsBigButton.map((action) => {
        return <ActionsBigButtonListItem key={action._id} {...action}/>
      })}
    </WrapperSection>
  );
};

export default ActionsBigButtonList;
