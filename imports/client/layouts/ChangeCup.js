import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import Footer from '../components/menus/footer/Footer';

const ChangeCup = (props) => {
  return (
    <div>
      <NavBar/>
      <div className="section-2">
        <div className="container w-container">
          <div className="box-19">
            <h2>Change cup</h2>
            <div className="box-19-component-1">
              <img src="images/arrow-3x.png"/>
              <div className="html-embed w-embed">
                <a className="html-embed-3" href="javascript:history.back()"> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-1">
        <div className="container w-container">
          <div>
            <div className="w-form">
              <form id="email-form" name="email-form" data-name="Email Form">
                <div className="content-wrapper-6">
                  <div className="content-wrapper-8">
                    <h4>Why are you returning this product?</h4>
                  </div>
                  <div className="content-wrapper-8">
                    <div className="form-component-1">
                      <label htmlFor="Select-choice" className="p-tag">Pick a choice</label>
                      <select id="Select-choice" name="Select-choice" data-name="Select choice" className="form-input-4 w-select">
                        <option value="">Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="content-wrapper-6">
                  <div className="content-wrapper-8">
                    <h4>Which cup do you want to receive? </h4>
                  </div>
                  <div className="content-wrapper-8">
                    <div className="form-component-1">
                      <label htmlFor="Select-choice-2" className="p-tag">Pick a cup *</label>
                      <select id="Select-choice-2" name="Select-choice-2" data-name="Select Choice 2" className="form-input-4 w-select">
                        <option value="">Select one...</option>
                        <option value="First">First Choice</option>
                        <option value="Second">Second Choice</option>
                        <option value="Third">Third Choice</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="content-wrapper-6">
                  <div className="content-wrapper-8">
                    <div>* Terms and conditions lorem ipsum.</div>
                  </div>
                </div>
                <div className="content-wrapper-6">
                  <div className="content-wrapper-5">
                    <div className="box-24">
                      <div className="box-24-component-1">
                        <a href="#" className="button-1 button-small w-button">Return or replace cup</a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ChangeCup;
