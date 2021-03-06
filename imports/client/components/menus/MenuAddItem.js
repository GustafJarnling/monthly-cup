import React from 'react';

import { MenuItems } from '../../../../api/menuItems';

export default class MenuAddItem extends React.Component {
  onSubmit(e) {
    const name = this.refs.name.value.trim();
    const title = this.refs.title.value.trim();
    const path = this.refs.path.value.trim();

    e.preventDefault();

    if(name && title && path) {
      MenuItems.insert({ name, title, path });
      this.refs.name.value = '';
      this.refs.title.value = '';
      this.refs.path.value = '';
    }
  }
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <form className="form" onSubmit={this.onSubmit.bind(this)}>
                <input type="text" ref="name" placeholder="Link Name"/>
                <input type="text" ref="title" placeholder="Page Title"/>
                <input type="text" ref="path" placeholder="Path"/>
                <button>Add Menu Item</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
