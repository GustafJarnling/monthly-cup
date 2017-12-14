import React from 'react';

const TextOneColumn = (props) => {
  return(
    <div className="div-block-148">
      <div className="div-block-167">
        <div className="p-big">{props.text}</div>
      </div>
    </div>
  );
};

TextOneColumn.propTypes = {
  text: React.PropTypes.string.isRequired
};

export default TextOneColumn;
