import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import WrapperSection from '../components/partials/WrapperSection';
import HeaderWithSubtitle from '../components/partials/HeaderWithSubtitle';
import ProductsListContainer from '../components/products/ProductsListContainer'
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <WrapperSection>
          <HeaderWithSubtitle
            title="Products"
            subtitle="Easy to use, safe, and better alternative to pads and tampons. No strings attached."
          />
      </WrapperSection>
      <WrapperSection>
        <ProductsListContainer/>
      </WrapperSection>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};
