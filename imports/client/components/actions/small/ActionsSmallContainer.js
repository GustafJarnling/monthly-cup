import React from 'react';
import { Tracker } from 'meteor/tracker';

import { ActionsSmall } from '../../../../api/actions-small';
import ActionsSmallList from './ActionsSmallList';

export default class ActionsSmallContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsSmall: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const actionsSmall = ActionsSmall.find().fetch();
      this.setState({ actionsSmall });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ActionsSmallList actionsSmall={this.state.actionsSmall}/>;
  }
}
