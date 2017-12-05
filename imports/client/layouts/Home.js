import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import HeroAdContainer from '../components/heroes/ad/HeroAdContainer';
import ActionsBigContainer from '../components/actions/big/ActionsBigContainer';
import ProductsListContainer from '../components/products/ProductsListContainer';
import ReviewsListContainer from '../components/reviews/ReviewsListContainer';
import Seperator from '../components/partials/Seperator';
import HeroInfoContainer from '../components/heroes/info/HeroInfoContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <HeroAdContainer/>
      <ActionsBigContainer/>
      <ProductsListContainer/>
      <ReviewsListContainer/>
      <Seperator/>
      <HeroInfoContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
}
