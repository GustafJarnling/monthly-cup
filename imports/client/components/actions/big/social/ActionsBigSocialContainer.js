import React from 'react';
import { Tracker } from 'meteor/tracker';

import { ActionsBigSocial } from '../../../../../api/actions-big-social';
import ActionsBigSocialList from './ActionsBigSocialList';

export default class ActionsBigSocialContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsBigSocial: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const actionsBigSocial = ActionsBigSocial.find().fetch();
      this.setState({ actionsBigSocial });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <ActionsBigSocialList actionsBigSocial={this.state.actionsBigSocial}/>;
  }
}
