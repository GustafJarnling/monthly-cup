import React from 'react';
import { Tracker } from 'meteor/tracker';

import { HeroInfos } from '../../../../api/hero-infos';
import HeroInfoList from './HeroInfoList';

export default class HeroInfoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroInfos: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const heroInfos = HeroInfos.find().fetch();
      this.setState({ heroInfos });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <HeroInfoList heroInfos={this.state.heroInfos}/>;
  }
}
