import React from 'react';

const ComparisonsListItem = (props) => {
  return (
    <div className={props.position}>
      <div className="box-9-component-2">
        <div className="box-9-component-3 box-9-component-3-is-first">
          <h4>{props.size}</h4>
        </div>
        <div className="box-9-component-3 box-9-component-3-is-second">
          <img src={props.image_src} srcset={props.image_srcSet} sizes="(max-width: 479px) 100vw, (max-width: 767px) 212px, 21vw" className="box-9-component-6"/>
        </div>
        <div className="box-9-component-3 box-9-component-3-is-third">
          <div className="p-big">{props.description}</div>
          {/* Store as array and iterate over with this pattern
          <div className="p-big">Under 30 years old</div> */}
        </div>
        <div className="box-9-component-3 box-9-component-3-is-fourth">
          <div className="box-9-component-5">
            <div>{props.properties}</div>
          </div>
          {/* Store as array and iterate over with this pattern
          <div className="box-9-component-5">
            <div>55 mm without stem</div>
          </div> */}
        </div>
        <div className="box-9-component-4">
          <a href={props.button_url} className="button-1 button-small w-button">{props.button_text}</a>
        </div>
      </div>
    </div>
  );
};

ComparisonsListItem.propTypes = {
  size: React.PropTypes.string.isRequired,
  image_src: React.PropTypes.string.isRequired,
  image_srcSet: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  properties: React.PropTypes.string.isRequired,
  button_text: React.PropTypes.string.isRequired,
  button_url: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired
};

export default ComparisonsListItem;
