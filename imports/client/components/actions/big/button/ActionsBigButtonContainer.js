import React from 'react';
import { Tracker } from 'meteor/tracker';

import { ActionsBigButton } from '../../../../../api/actions-big-button';
import ActionsBigButtonList from './ActionsBigButtonList';

export default class ActionsBigButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsBigButton: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const actionsBigButton = ActionsBigButton.find().fetch();
      this.setState({ actionsBigButton });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ActionsBigButtonList actionsBigButton={this.state.actionsBigButton}/>;
  }
}
