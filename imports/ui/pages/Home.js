import React from 'react';

import NavBar from '../partials/menus/nav-bar/NavBar';
import HeroAd from '../partials/heroes/HeroAd';
import ActionBigSocial from '../partials/actions/ActionBigSocial';
import Products from '../partials/Products';
import Reviews from '../partials/Reviews';
import Seperator from '../partials/Seperator';
import HeroInfo from '../partials/heroes/HeroInfo';
import ActionTwoSmall from '../partials/actions/ActionTwoSmall';
import Footer from '../partials/menus/footer/Footer';

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
