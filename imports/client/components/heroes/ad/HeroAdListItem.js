import React from 'react';

import HeroAddItem from './HeroAddItem';

const HeroAdListItem = (props) => {
  return (
    <div className="hero-section-component-2">
      <div className="hero-section-component-3">
        <div className="hero-section-component-4">
          <h1>{props.title}</h1>
          <div className="hero-section-component-5">
            <div>{props.description}</div>
          </div>
        </div>
        <div className="hero-section-component-6">
          <div className="hero-section-component-5">
            <div className="hero-section-component-7">
              <div className="box-5-component-2">
                <div className="box-5-component-3">
                  <a href="#" className="button-1 button-expand button-outlined w-button">
                    {props.button_buy_text} <span className="w-hidden-tiny">({props.price_buy})</span>
                  </a>
                </div>
              </div>
              <div className="box-5-component-5">
                <div className="box-5-component-6"></div>
                <div className="p-tag">Or</div>
                <div className="box-5-component-6"></div>
              </div>
              <div className="box-5-component-2">
                <div className="box-5-component-3">
                  <a href="#" className="button-1 button-expand w-button">
                    {props.button_subscription_text} <span className="w-hidden-tiny">({props.price_subscription})</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-section-component-5">
            <div className="div-block-22">
              <div className="div-block-23">
                <div className="div-block-24">
                  <div className="icon-wrapper-1">
                    <img src="images/-Size3x.png" className="icon-pic-1"/>
                  </div>
                </div>
                <div className="p-small">Size Warranty</div>
              </div>
              <div className="div-block-23">
                <div className="div-block-24">
                  <div className="icon-wrapper-1">
                    <img src="images/-Size-Copy3x.png" className="icon-pic-1"/>
                  </div>
                </div>
                <div className="p-small">Free shipping</div>
              </div>
              <div className="div-block-23">
                <div className="div-block-24">
                  <div className="icon-wrapper-1">
                    <img src="images/-a3x.png" className="icon-pic-1"/>
                  </div>
                </div>
                <div className="p-small">Made in Sweden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-component-8">
        <img src={props.image_src} srcSet={props.image_srcSet} sizes="(max-width: 479px) 100vw, (max-width: 991px) 282.046875px, 46vw" className="hero-section-component-9"/>
      </div>
    </div>
  );
};

HeroAdListItem.propTypes = {
  _id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  button_buy_text: React.PropTypes.string.isRequired,
  button_subscription_text: React.PropTypes.string.isRequired,
  price_buy: React.PropTypes.string.isRequired,
  price_subscription: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  image_srcSet: React.PropTypes.string.isRequired
};

export default HeroAdListItem;
