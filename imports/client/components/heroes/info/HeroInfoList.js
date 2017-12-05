import React from 'react';

import HeroInfoListItem from './HeroInfoListItem';

const HeroInfoList = (props) => {
  return (
    <div className="section-1">
      <div className="container w-container">
        <div className="content-wrapper-1">
          <div className="content-component-1">
            <h2>Resources</h2>
          </div>
        </div>
        <div className="content-wrapper-1 content-wrapper-1-is-last">
          <div className="box-3">
            <div className="box-3-component-1">
              {props.heroInfos.map((hero) => {
                if (props.heroInfos.indexOf(hero) < 3)
                  return <HeroInfoListItem key={hero._id} {...hero}/>
              })}
            </div>
            <div className="box-3-component-6">
              <img src="images/2Group-193x.png" srcSet="images/2Group-193x-p-500.png 500w, images/2Group-193x-p-800.png 800w, images/2Group-193x-p-1080.png 1080w, images/2Group-193x.png 1575w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 169.078125px, 37vw" className="image-3"/>
            </div>
            <div className="box-3-component-4">
              <div className="box-3-component-5">
                {props.heroInfos.map((hero) => {
                  if (props.heroInfos.indexOf(hero) > 2)
                    return <HeroInfoListItem key={hero._id} {...hero}/>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroInfoList;
