import React from 'react';

import NavBar from '../partials/NavBar';
import HeroAd from '../partials/HeroAd';
import ActionBig from '../partials/ActionBig';
import Products from '../partials/Products';
import Reviews from '../partials/Reviews';
import Seperator from '../partials/Seperator';
import HeroInfo from '../partials/HeroInfo';
import ActionTwoSmall from '../partials/ActionTwoSmall';
import Footer from '../partials/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <HeroAd/>
        <ActionBig/>
        <Products/>
        <Reviews/>
        <Seperator/>
        <HeroInfo/>
        <ActionTwoSmall/>
        <Footer/>
      </div>
    );
  }
}
