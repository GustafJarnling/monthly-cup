import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Faqs } from '../../../api/faqs';
import FaqsListItem from './FaqsListItem';

export default class FaqsList extends React.Component {
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
  renderFaqsListItem() {
    return this.state.faqs.map((faq) => {
      let index = this.state.faqs.indexOf(faq) + 1;
      return (
        <FaqsListItem key={faq._id} index={index} {...faq}/>
      );
    });
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="grid-wrapper-4">
            {this.renderFaqsListItem()}
          </div>
        </div>
      </div>
    );
  }
}
