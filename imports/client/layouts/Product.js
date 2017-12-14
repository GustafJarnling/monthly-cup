import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import ProductsSingleContainer from '../components/products/ProductsSingleContainer'
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div className="section-4">
      <NavBar/>
      <ProductsSingleContainer/>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <Footer/>
    </div>
  );
};
