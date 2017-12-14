import React from 'react';

const TextRichBlock = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <div>
          <div className="rich-text-block w-richtext">
            <p>{props.text_above}</p>
            <br/>
            <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
              <div><img src={props.image_src}/></div>
            </figure>
            <br/>
            <p>{props.text_below}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextRichBlock;
