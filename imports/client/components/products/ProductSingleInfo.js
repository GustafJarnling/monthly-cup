import React from 'react';

import ProductPropertiesList from './ProductPropertiesList';
import ProductSlides from './ProductSlides';
import ProductThumbs from './ProductThumbs';

const ProductSingleInfo = (props) => {
  return (
    <div className="section-2">
      <div className="container w-container">
        <div className="box-4">
          <div className="box-4-component-1">
            <div className="box-4-component-2">
              <h3>{props.title}</h3>
            </div>
            {/* Heart product */}
            <div className="box-4-component-3">
              <a href="#" className="icon-wrapper-1 w-inline-block">
                <img src="images/Heart3x_1.png" className="icon-pic-1"/>
                <img src="images/Heart3x.png" className="icon-pic-2"/>
              </a>
            </div>
          </div>
          <div className="box-4-component-4">
            <div className="box-4-component-5">
              <div className="box-4-component-6">
                <div className="box-5">
                  <div className="box-4-component-8">
                    <div className="box-4-component-9">
                      <div className="box-4-component-12">
                        <div className="box-4-component-13">
                          <h2>{props.currency}{props.price_single}</h2>
                        </div>
                        {/* List of stars based on reviews */}
                        <div className="box-4-component-13">
                          <div className="stars-wrapper">
                            <div className="star-box">
                              <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
                            </div>
                            <div className="star-box">
                              <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
                            </div>
                            <div className="star-box">
                              <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
                            </div>
                            <div className="star-box">
                              <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
                            </div>
                            <div className="star-box">
                              <img src="images/filled-yellow-Copy-43x_1.png" className="star-pic-1"/>
                            </div>
                          </div>
                        </div>
                        <div className="box-4-component-13">
                          <div className="p-small">{props.reviews}</div>
                        </div>
                      </div>
                    </div>
                    {/* Three details */}
                    <div className="box-4-component-9">
                      <div className="box-4-component-10">
                        <div className="box-4-component-11">
                          <div className="box-4-component-14">
                            <a href="#" className="icon-wrapper-1 w-inline-block">
                              <img src="images/-Size3x.png" width="23" className="icon-pic-1"/>
                            </a>
                          </div>
                          <div>
                            <div>Size Warranty</div>
                          </div>
                        </div>
                        <div className="box-4-component-11">
                          <div className="box-4-component-14">
                            <a href="#" className="icon-wrapper-1 w-inline-block">
                              <img src="images/-Size-Copy3x.png" width="23" className="icon-pic-1"/>
                            </a>
                          </div>
                          <div>
                            <div>Free shipping</div>
                          </div>
                        </div>
                        <div className="box-4-component-11">
                          <div className="box-4-component-14">
                            <a href="#" className="icon-wrapper-1 w-inline-block">
                              <img src="images/-a3x.png" width="23" className="icon-pic-1"/>
                            </a>
                          </div>
                          <div>
                            <div>Made in Sweden</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ProductPropertiesList properties={props.properties}/>
                </div>
                {/* Button to buy and amount toggle */}
                <div className="box-5">
                  <div className="box-5-component-2">
                    <div className="box-5-component-3">
                      <a href="#" className="button-1 button-expand button-small w-inline-block">
                        <div className="button-component-1">
                          <div className="button-component-2">
                            <div className="icon-wrapper-1 w-hidden-tiny">
                              <img src="images/Bag-3x.png" className="icon-pic-1"/>
                            </div>
                            <div className="text-block">   Add to cart</div>
                          </div>
                          <div className="button-component-3 w-hidden-tiny">
                            <div>{props.currency}{props.price_single}</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="box-5-component-4">
                      <div className="button-3">
                        <div className="button-3-component-1"></div>
                        <div className="button-3-component-3">
                          <div className="p-tag">1</div>
                        </div>
                        <div className="button-3-component-2"></div>
                      </div>
                    </div>
                  </div>
                  <div className="box-5-component-5">
                    <div className="box-5-component-6"></div>
                    <div className="p-tag">Or</div>
                    <div className="box-5-component-6"></div>
                  </div>
                  <div className="box-5-component-2">
                    <div className="box-5-component-3">
                      <a href="#" className="button-1 button-expand button-small w-inline-block">
                        <div className="button-component-1 div-90-block-a">
                          <div className="button-component-2">
                            <div><span className="w-hidden-tiny">Get a </span>new cup every 2yrs</div>
                          </div>
                          <div className="button-component-3 w-hidden-tiny">
                            <div>{props.currency}{props.price_subscription}/Mo</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-4-component-17">
                <ProductSlides images={props.images}/>
                <ProductThumbs images={props.images}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingleInfo;
