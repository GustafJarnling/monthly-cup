import React from 'react';

const FaqsListItem = (props) => {
  return (
    <div className="box-8">
      <div className="box-8-component-1">
        <div className="box-8-component-3">
          <div className="box-8-component-4">
            <div className="p-tag">{props.index}</div>
          </div>
        </div>
        <div className="box-8-component-2">
          <h4>{props.question}</h4>
        </div>
      </div>
      <div className="box-8-component-5">
        <div className="box-8-component-6"></div>
        <div className="box-8-component-2">
          <div>{props.reply}</div>
        </div>
      </div>
    </div>
  );
};

FaqsListItem.propTypes = {
  index: React.PropTypes.number.isRequired,
  question: React.PropTypes.string.isRequired,
  reply: React.PropTypes.string.isRequired
};

export default FaqsListItem;
