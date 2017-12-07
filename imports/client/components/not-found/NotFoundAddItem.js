import React from 'react';

import { NotFounds } from '../../../api/not-founds';

export default class NotFoundAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const image_srcSet = this.refs.image_srcSet.value.trim();
    const image_sizes = this.refs.image_sizes.value.trim();

    e.preventDefault();

    if(title && description && image_src && image_srcSet) {
      NotFounds.insert({ title, description, image_src, image_srcSet, image_sizes });
      this.refs.title.value = '';
      this.refs.description.value = '';
      this.refs.image_src.value = '';
      this.refs.image_srcSet.value = '';
      this.refs.image_sizes.value = '';
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
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="image_srcSet" placeholder="Image Source Set"/><br/>
                <input type="text" ref="image_sizes" placeholder="Image Sizes"/><br/>
                <button>Add NotFound</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
