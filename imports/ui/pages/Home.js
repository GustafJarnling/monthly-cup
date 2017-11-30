import React from 'react';

import NavBar from '../partials/NavBar';
import HeroAd from '../partials/HeroAd';
import ActionBigSocial from '../partials/ActionBigSocial';
import Products from '../partials/Products';
import Reviews from '../partials/Reviews';
import Seperator from '../partials/Seperator';
import HeroInfo from '../partials/HeroInfo';
import ActionTwoSmall from '../partials/ActionTwoSmall';
import Footer from '../partials/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <HeroAd/>
      <ActionBigSocial/>
      <Products/>
      <Reviews/>
      <Seperator/>
      <HeroInfo/>
      <ActionTwoSmall/>
      <Footer/>
    </div>
  );
}
