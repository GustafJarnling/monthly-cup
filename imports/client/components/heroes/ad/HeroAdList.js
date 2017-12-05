import React from 'react';

import HeroAdListItem from './HeroAdListItem';

const HeroAdList = (props) => {
  return (
    <div className="hero-section-component-1">
      <div className="container w-container">
        {props.heroAds.map((hero) => {
          return <HeroAdListItem key={hero._id} {...hero}/>
        })}
      </div>
    </div>
  );
};

export default HeroAdList;
