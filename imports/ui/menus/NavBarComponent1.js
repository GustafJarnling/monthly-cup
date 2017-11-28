import React from 'react';

export default class NavBarComponent1 extends React.Component {
  render() {
    return (
      <div className="nav-bar-component-1">
        <a href="/" className="nav-bar-logo-wrapper w-inline-block">
          <img src="images/master3x.png" className="nav-bar-logo"/>
        </a>
        <div className="nav-bar-component-5 w-hidden-medium w-hidden-small w-hidden-tiny">
          <div className="nav-bar-above-item-b">
            <a href="/faq" className="div-block-13 nav-bar-above-link w-inline-block">
              <div>FAQ</div>
            </a>
          </div>
          <div className="nav-bar-above-item-b">
            <a href="#" className="div-block-13 nav-bar-above-link w-inline-block">
              <div>Comparison</div>
            </a>
          </div>
          <div className="nav-bar-above-item-b">
            <a href="#" className="div-block-13 nav-bar-above-link w-inline-block">
              <div>A new cup every 2yrs </div>
            </a>
            <div className="tag-1">€2,99/Mo</div>
          </div>
        </div>
      </div>
    );
  }
}
