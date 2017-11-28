import React from 'react';

import NavBar from '../partials/NavBar';
import Footer from '../partials/Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}
