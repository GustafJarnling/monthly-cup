import React from 'react';

import ComparisonsListItem from './ComparisonsListItem';

// import ComparisonsListAddItem from './ComparisonsListAddItem';

const ComparisonsList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        {/* <div>
          <ComparisonsListAddItem/>
        </div> */}
        <div className="box-9">
          {props.comparisons.map((comparison) => {
            return <ComparisonsListItem key={comparison._id} {...comparison}/>
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparisonsList;
