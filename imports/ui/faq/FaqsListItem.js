import React from 'react';

export default class FaqsListItem extends React.Component {
  render() {
    return (
      <div className="box-8">
        <div className="box-8-component-1">
          <div className="box-8-component-3">
            <div className="box-8-component-4">
              <div className="p-tag">{this.props.index}</div>
            </div>
          </div>
          <div className="box-8-component-2">
            <h4>{this.props.question}</h4>
          </div>
        </div>
        <div className="box-8-component-5">
          <div className="box-8-component-6"></div>
          <div className="box-8-component-2">
            <div>{this.props.reply}</div>
          </div>
        </div>
      </div>
    );
  }
}
