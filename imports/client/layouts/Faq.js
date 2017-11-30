import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import SimpleHeader from '../components/partials/SimpleHeader';
import FaqsList from '../components/faqs/FaqsList';
import Seperator from '../components/partials/Seperator';
import Footer from '../components/menus/footer/Footer';

// import FaqsAddItem from '../components/faq/FaqsAddItem';

export default () => {
  return (
    <div>
      <NavBar/>
      <SimpleHeader title="Frequently Asked Questions"/>
      <FaqsList/>
      <Seperator/>
      <Footer/>
      {/* <FaqsAddItem/> */}
    </div>
  );
};
