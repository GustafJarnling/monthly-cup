import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Reviews } from '../../../api/reviews';
import ReviewsList from './ReviewsList';

export default class ReviewsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const reviews = Reviews.find().fetch();
      this.setState({ reviews });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ReviewsList reviews={this.state.reviews}/>;
  }
}
