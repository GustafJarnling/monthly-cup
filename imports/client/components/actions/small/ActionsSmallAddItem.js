import React from 'react';

import { ActionsSmall } from '../../../../api/actions-small';

export default class ActionsSmallAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const link_text = this.refs.link_text.value.trim();
    const link_url = this.refs.link_url.value.trim();
    const image_src = this.refs.image_src.value.trim();
    const image_srcSet = this.refs.image_srcSet.value.trim();

    e.preventDefault();

    if(title && link_text && link_url && image_src) {
      ActionsSmall.insert({ title, link_text, link_url, image_src, image_srcSet });
      this.refs.title.value = '';
      this.refs.link_text.value = '';
      this.refs.link_url.value = '';
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
                <input type="text" ref="link_text" placeholder="Link Text"/><br/>
                <input type="text" ref="link_url" placeholder="Link URL"/><br/>
                <input type="text" ref="image_src" placeholder="Image Source"/><br/>
                <input type="text" ref="image_srcSet" placeholder="Image Source Set"/><br/>
                <button>Add Action</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
