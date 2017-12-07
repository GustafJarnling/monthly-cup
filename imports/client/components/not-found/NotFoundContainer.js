import React from 'react';
import { Tracker } from 'meteor/tracker';

import { NotFounds } from '../../../api/not-founds';
import NotFoundList from './NotFoundList';

export default class NotFoundContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notFounds: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const notFounds = NotFounds.find().fetch();
      this.setState({ notFounds });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <NotFoundList notFounds={this.state.notFounds}/>;
  }
}
