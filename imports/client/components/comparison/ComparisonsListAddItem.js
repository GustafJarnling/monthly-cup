import React from 'react';

import { Comparisons } from '../../../api/comparisons';

export default class ComparisonsListAddItem extends React.Component {
  onSubmit(e) {
    const size = this.refs.size.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const image_srcSet = this.refs.image_srcSet.value.trim();
    const description = this.refs.description.value.trim();
    const properties = this.refs.properties.value.trim();
    const button_text = this.refs.button_text.value.trim();
    const button_url = this.refs.button_url.value.trim();
    const position = this.refs.position.value.trim();

    e.preventDefault();

    if(size && image_src && image_srcSet && description && properties && button_text && button_url && position) {
      Comparisons.insert({ size, image_src, image_srcSet, description, properties, button_text, button_url, position });
      this.refs.size.value = '';
      this.refs.image_src.value = '';
      this.refs.image_srcSet.value = '';
      this.refs.description.value = '';
      this.refs.properties.value = '';
      this.refs.button_text.value = '';
      this.refs.button_url.value = '';
      this.refs.position.value = '';
    }
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <form className="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="size" placeholder="Size"/><br/>
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="image_srcSet" placeholder="Image Source Set"/><br/>
                <input type="text" ref="description" placeholder="Description"/><br/>
                <input type="text" ref="properties" placeholder="Properties"/><br/>
                <input type="text" ref="button_text" placeholder="Button Text"/><br/>
                <input type="text" ref="button_url" placeholder="Button URL"/><br/>
                <input type="text" ref="position" placeholder="Box Position"/><br/>
                <button>Add Comparison</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
