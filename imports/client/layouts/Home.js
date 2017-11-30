import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import HeroAd from '../components/heroes/HeroAd';
import ActionBigSocial from '../components/actions/ActionBigSocial';
import ProductsListContainer from '../components/products/ProductsListContainer';
import Reviews from '../components/partials/Reviews';
import Seperator from '../components/partials/Seperator';
import HeroInfo from '../components/heroes/HeroInfo';
import ActionTwoSmall from '../components/actions/ActionTwoSmall';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <HeroAd/>
      <ActionBigSocial/>
      <ProductsListContainer/>
      <Reviews/>
      <Seperator/>
      <HeroInfo/>
      <ActionTwoSmall/>
      <Footer/>
    </div>
  );
}
