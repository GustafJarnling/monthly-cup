import React from 'react';

const ReviewsListItem = (props) => {
  return (
    <div className="box-2">
      <div className="box-2-component-1">
        <div className="box-2-component-2">
          <div className="box-2-component-3">
            <h4>{props.name}</h4>
            <div>{props.job_title}</div>
          </div>
          <div className="box-2-component-4">
            <div className="box-2-component-5">
              <img src={props.image_src}/>
            </div>
          </div>
        </div>
        <div className="box-2-component-6">
          <div className="p-big">{props.review_text}</div>
        </div>
      </div>
      <div className="box-2-component-7">
        <div className="stars-wrapper">
          <div className="star-box">
            <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
          </div>
          <div className="star-box">
            <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
          </div>
          <div className="star-box">
            <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
          </div>
          <div className="star-box">
            <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
          </div>
          <div className="star-box">
            <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewsListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  job_title: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  review_text: React.PropTypes.string.isRequired,
  rating: React.PropTypes.number.isRequired
};

export default ReviewsListItem;
