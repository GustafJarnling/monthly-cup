import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import NotFoundContainer from '../components/not-found/NotFoundContainer.js';
import FooterSimple from '../components/menus/footer/FooterSimple';

export default () => {
  return (
    <div className="section-4">
      <NavBar/>
      <NotFoundContainer/>
      <FooterSimple/>
    </div>
  );
};
