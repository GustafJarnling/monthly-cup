import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import WrapperSection from '../components/partials/WrapperSection';
import HeaderPage from '../components/partials/HeaderPage';
import ProductsComparisonContainer from '../components/products/ProductsComparisonContainer';
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <WrapperSection>
        <HeaderPage title="Comparison"/>
      </WrapperSection>
      <WrapperSection>
        <ProductsComparisonContainer/>
      </WrapperSection>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
}
