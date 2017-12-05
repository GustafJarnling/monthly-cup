import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import FooterSimple from '../components/menus/footer/FooterSimple';

export default () => {
  return (
    <div className="section-4">
      <NavBar/>
      <div className="section-1">
        <div className="container w-container">
          <div className="grid-wrapper-7">
            <div className="content-component-6">
              <h1>404</h1>
            </div>
            <div className="content-component-6">
              <img src="images/lost3x.png" srcSet="images/lost3x-p-500.png 500w, images/lost3x.png 717w" sizes="(max-width: 479px) 100vw, 210px" className="content-component-7"/>
            </div>
            <div className="content-component-6">
              <div>Wait, what? This page does not exist.</div>
            </div>
          </div>
        </div>
      </div>
      <FooterSimple/>
    </div>
  );
};
