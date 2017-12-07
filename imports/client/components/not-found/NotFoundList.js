import React from 'react';

import NotFoundItem from './NotFoundItem';

const NotFoundList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        {props.notFounds.map((notFound) => {
          return <NotFoundItem key={notFound._id} {...notFound}/>
        })}
      </div>
    </div>
  );
};

export default NotFoundList;
