import React from 'react';

import NavBar from '../partials/NavBar';
import SimpleHeader from '../partials/SimpleHeader';
import FaqsList from '../faq/FaqsList';
import Seperator from '../partials/Seperator';
import Footer from '../partials/Footer';

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
