import React from 'react';
import { Tracker } from 'meteor/tracker';

import { ActionsBig } from '../../../../api/actions-big';
import ActionsBigList from './ActionsBigList';

export default class ActionsBigContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsBig: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const actionsBig = ActionsBig.find().fetch();
      this.setState({ actionsBig });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ActionsBigList actionsBig={this.state.actionsBig}/>;
  }
}
