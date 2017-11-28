import React from 'react';

import FooterAbove from '../menus/FooterAbove';
import FooterBelow from '../menus/FooterBelow';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterAbove/>
        <FooterBelow/>
      </div>
    );
  }
}
