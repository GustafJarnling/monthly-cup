import React from 'react';

export default class NavBarListItem extends React.Component {
  render() {
    return (
      <div className="nav-bar-component-5 w-hidden-medium w-hidden-small w-hidden-tiny">
        <div className="nav-bar-above-item-b">
          <a href={this.props.path} className="div-block-13 nav-bar-above-link w-inline-block">
            <div>{this.props.title}</div>
          </a>
        </div>
      </div>
    );
  }
}
