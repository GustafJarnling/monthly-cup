import React from 'react';

import HeaderInline from '../partials/HeaderInline';
import ReviewsListItem from './ReviewsListItem';

const ReviewsList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <HeaderInline title="Happy customers"/>
        <div className="content-wrapper-1">
          <div className="grid-wrapper-1">
            {props.reviews.map((review) => {
              return <ReviewsListItem key={review._id} {...review}/>
            })}
          </div>
        </div>
        <div className="content-wrapper-1 content-wrapper-1-is-last">
          <div className="content-component-1">
            <a href="#" className="link-1 w-inline-block">
              <div>Meet them all</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsList;
