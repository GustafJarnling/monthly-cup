import React from 'react';

import FaqsListItem from './FaqsListItem';

const FaqsList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <div className="grid-wrapper-4">
          {props.faqs.map((faq) => {
            return <FaqsListItem key={faq._id} index={props.faqs.indexOf(faq) + 1} {...faq}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqsList;
