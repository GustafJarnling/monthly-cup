import React from 'react';

import NavBar from '../partials/menus/nav-bar/NavBar';
import SimpleHeader from '../partials/SimpleHeader';
import FaqsList from '../partials/faq/FaqsList';
import Seperator from '../partials/Seperator';
import Footer from '../partials/menus/footer/Footer';

// import FaqsAddItem from '../faq/FaqsAddItem';

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
