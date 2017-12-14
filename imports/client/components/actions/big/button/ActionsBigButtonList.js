import React from 'react';

import WrapperSection from '../../../partials/WrapperSection';
import Seperator from '../../../partials/Seperator';
import ActionsBigButtonListItem from './ActionsBigButtonListItem';

const ActionsBigButtonList = (props) => {
  return (
    <div>
      <Seperator/>
      <WrapperSection>
        {props.actionsBigButton.map((action) => {
          return <ActionsBigButtonListItem key={action._id} {...action}/>
        })}
      </WrapperSection>
    </div>
  );
};

export default ActionsBigButtonList;
