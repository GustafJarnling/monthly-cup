import React from 'react';

import { Products } from '../../../api/products';

export default class ProductsAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const image_srcset = this.refs.image_srcset.value.trim();
    const description = this.refs.description.value.trim();
    const button_text = this.refs.button_text.value.trim();

    e.preventDefault();

    if(title && image_src && image_srcset && description) {
      Products.insert({ title, image_src, image_srcset, description });
      this.refs.title.value = '';
      this.refs.image_src.value = '';
      this.refs.image_srcset.value = '';
      this.refs.description.value = '';
      this.refs.button_text.value = '';
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
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="image_srcset" placeholder="Image Source Set"/><br/>
                <input type="text" ref="description" placeholder="Description"/><br/>
                <input type="text" ref="button_text" placeholder="Button Text"/><br/>
                <button>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
