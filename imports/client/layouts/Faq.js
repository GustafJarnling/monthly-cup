import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import HeaderPage from '../components/partials/HeaderPage';
import FaqsListContainer from '../components/faqs/FaqsListContainer';
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
          <HeaderPage title="Frequently Asked Questions"/>
        </div>
      </div>
      <FaqsListContainer/>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};
