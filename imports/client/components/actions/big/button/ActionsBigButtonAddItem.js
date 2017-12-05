import React from 'react';

import { ActionsBigButton } from '../../../../../api/actions-big-button';

export default class ActionsBigButtonAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();
    const link_text = this.refs.link_text.value.trim();
    const link_url = this.refs.link_url.value.trim();

    e.preventDefault();

    if(title && description && link_text && link_url) {
      ActionsBigButton.insert({ title, description, link_text, link_url });
      this.refs.title.value = '';
      this.refs.description.value = '';
      this.refs.link_text.value = '';
      this.refs.link_url.value = '';
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
                <input type="text" ref="link_text" placeholder="Link Text"/><br/>
                <input type="text" ref="link_url" placeholder="Link URL"/><br/>
                <button>Add Action</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
