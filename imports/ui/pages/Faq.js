import React from 'react';

import NavBarAbove from '../partials/NavBarAbove';
import SimpleHeader from '../partials/SimpleHeader';
// import FaqsAddItem from '../faq/FaqsAddItem';
import FaqsList from '../faq/FaqsList';

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        <NavBarAbove/>
        <SimpleHeader title="Frequently Asked Questions"/>
        {/* <FaqsAddItem/> */}
        <FaqsList/>
      </div>
    );
  }
}
