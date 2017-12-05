import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import SimpleHeader from '../components/partials/SimpleHeader';
import FaqsListContainer from '../components/faqs/FaqsListContainer';
import Seperator from '../components/partials/Seperator';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

export default () => {
  return (
    <div>
      <NavBar/>
      <SimpleHeader title="Frequently Asked Questions"/>
      <FaqsListContainer/>
      <Seperator/>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};
