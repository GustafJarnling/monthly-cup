import React from 'react';

export default class SimpleHeader extends React.Component {
  render() {
    return (
      <div className="section-1">
        <div className="container w-container">
          <div className="content-wrapper-1 content-wrapper-1-is-last">
            <div className="content-component-1">
              <h2>{this.props.title}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
