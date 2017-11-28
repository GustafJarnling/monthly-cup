import React from 'react';

import FaqsAddItem from './FaqsAddItem';
import SimpleHeader from '../partials/SimpleHeader';
import FaqsList from './FaqsList';

export default class Faq extends React.Component {
  render() {
    return (
      <div>
        <SimpleHeader title="Frequently Asked Questions"/>
        <FaqsAddItem/>
        <FaqsList/>
      </div>
    );
  }
}
