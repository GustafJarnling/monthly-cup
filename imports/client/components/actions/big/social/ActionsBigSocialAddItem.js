import React from 'react';

import { ActionsBigSocial } from '../../../../api/actions-big-social';

export default class ActionsBigSocialAddItem extends React.Component {
  onSubmit(e) {
    const title = this.refs.title.value.trim();
    const description = this.refs.description.value.trim();

    e.preventDefault();

    if(title && description) {
      ActionsBigSocial.insert({ title, description });
      this.refs.title.value = '';
      this.refs.description.value = '';
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
                <button>Add Action</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
