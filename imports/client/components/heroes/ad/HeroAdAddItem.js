import React from 'react';

import { HeroAds } from '../../../../api/hero-ads';

export default class HeroAdAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();
    const button_buy_text = this.refs.button_buy_text.value.trim();
    const button_subscription_text = this.refs.button_subscription_text.value.trim();
    const price_buy = this.refs.price_buy.value.trim();
    const price_subscription = this.refs.price_buy.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const image_srcSet = this.refs.image_srcSet.value.trim();

    e.preventDefault();

    if(title && description && button_buy_text && button_subscription_text && price_buy && price_subscription && image_src && image_srcSet) {
      HeroAds.insert({ title, description, button_buy_text, button_subscription_text, price_buy, price_subscription, image_src, image_srcSet });
      this.refs.title.value = '';
      this.refs.description.value = '';
      this.refs.button_buy_text = '';
      this.refs.button_subscription_text = '';
      this.refs.price_buy = '';
      this.refs.price_subscription = '';
      this.refs.image_src.value = '';
      this.refs.image_srcSet.value = '';
    }
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <form className="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="title" placeholder="Title"/><br/>
                <input type="text" ref="description" placeholder="Description"/><br/>
                <input type="text" ref="button_buy_text" placeholder="Buy Button Text"/><br/>
                <input type="text" ref="price_buy" placeholder="Price Buy"/><br/>
                <input type="text" ref="button_subscription_text" placeholder="Subscription Button Text"/><br/>
                <input type="text" ref="price_subscription" placeholder="Price Subscription"/><br/>
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="image_srcSet" placeholder="Image Source Set"/><br/>
                <button>Add Hero</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
