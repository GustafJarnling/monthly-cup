import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
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
      {/* Change below to SimpleHeader, give it a type */}
      <div className="section-1">
        <div className="container w-container">
          <HeaderPage title="Comparison"/>
        </div>
      </div>
      <div className="section-1">
        <div className="container w-container">
          <ProductsComparisonContainer/>
        </div>
      </div>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
}
