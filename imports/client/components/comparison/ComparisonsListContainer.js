import React from 'react';
import { Tracker } from 'meteor/tracker';

import { Comparisons } from '../../../api/comparisons';
import ComparisonsList from './ComparisonsList';

export default class ComparisonsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comparisons: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const comparisons = Comparisons.find().fetch();
      this.setState({ comparisons });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ComparisonsList comparisons={this.state.comparisons}/>;
  }
}
