import React from 'react';
import { Tracker } from 'meteor/tracker';

import { HeroAds } from '../../../../api/hero-ads';
import HeroAdList from './HeroAdList';

export default class HeroAdsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroAds: []
    };
  }
  componentDidMount() {
    this.tracker = Tracker.autorun(() => {
      const heroAds = HeroAds.find().fetch();
      this.setState({ heroAds });
    });
  }
  componentWillUnmount() {
    this.tracker.stop();
  }
  render() {
    return <HeroAdList heroAds={this.state.heroAds}/>;
  }
}
