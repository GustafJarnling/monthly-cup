import React from 'react';

import NavBar from '../partials/NavBar';
import SimpleHeader from '../partials/SimpleHeader';
// import FaqsAddItem from '../faq/FaqsAddItem';
import FaqsList from '../faq/FaqsList';
import Footer from '../partials/Footer';

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SimpleHeader title="Frequently Asked Questions"/>
        {/* <FaqsAddItem/> */}
        <FaqsList/>
        <Footer/>
      </div>
    );
  }
}
