import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import ProductsListContainer from '../components/products/ProductsListContainer'
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-2 content-wrapper-2-is-last">
            <div className="content-wrapper-3">
              <div className="content-component-1">
                <h2>Products</h2>
              </div>
            </div>
            <div className="content-wrapper-3">
              <div className="content-component-1">
                <div className="p-big">Easy to use, safe, and better alternative to pads and tampons. No strings attached.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="container w-container">
          <ProductsListContainer/>
        </div>
      </div>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};
