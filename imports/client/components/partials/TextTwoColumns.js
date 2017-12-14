import React from 'react';

const TextTwoColumns = (props) => {
  return (
    <div className="div-block-148">
      <div className="div-block-164">
        <div className="content-component-5">
          <div className="p-big">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

TextTwoColumns.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default TextTwoColumns;
