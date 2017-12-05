import React from 'react';

import { Reviews } from '../../../api/reviews';

export default class ReviewsAddItem extends React.Component {
  onSubmit(e) {
    const name = this.refs.name.value.trim();
    const job_title = this.refs.job_title.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const review_text = this.refs.review_text.value.trim();
    const rating = this.refs.rating.value.trim();

    e.preventDefault();

    if(name && job_title && image_src && review_text && rating) {
      Reviews.insert({ name, job_title, image_src, review_text, rating });
      this.refs.name.value = '';
      this.refs.job_title.value = '';
      this.refs.image_src.value = '';
      this.refs.review_text.value = '';
      this.refs.rating.value = '';
    }
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <form className="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="name" placeholder="Name"/><br/>
                <input type="text" ref="job_title" placeholder="Job Title"/><br/>
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="review_text" placeholder="Review"/><br/>
                <input type="text" ref="rating" placeholder="Rating"/><br/>
                <button>Add Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
