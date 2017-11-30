import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Faqs } from '../../../api/faqs';
import FaqsList from './FaqsList';

export default class FaqsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const faqs = Faqs.find().fetch();
      this.setState({ faqs });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <FaqsList faqs={this.state.faqs}/>;
  }
}
