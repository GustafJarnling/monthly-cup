import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import HeroAdContainer from '../components/heroes/ad/HeroAdContainer';
import ActionsBigSocialContainer from '../components/actions/big/social/ActionsBigSocialContainer';
import WrapperSection from '../components/partials/WrapperSection';
import ProductsListContainer from '../components/products/ProductsListContainer';
import HeaderInline from '../components/partials/HeaderInline';
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
      <ActionsBigSocialContainer/>
      <WrapperSection>
          <HeaderInline title="Products"/>
          <ProductsListContainer/>
      </WrapperSection>
      <ReviewsListContainer/>
      <Seperator/>
      <HeroInfoContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
}
