import React from 'react';

import NavBar from '../components/menus/nav-bar/NavBar';
import WrapperSection from '../components/partials/WrapperSection';
import HeaderWithSubtitle from '../components/partials/HeaderWithSubtitle';
import ActionsBigButtonContainer from '../components/actions/big/button/ActionsBigButtonContainer';
import ActionsSmallContainer from '../components/actions/small/ActionsSmallContainer';
import Footer from '../components/menus/footer/Footer';

const Contact = (props) => {
  return (
    <div>
      <NavBar/>
      <WrapperSection>
        <HeaderWithSubtitle
          title="Contact"
          subtitle="Stop the taboo of menstruation, ensuring future schooling and education."
        />
      </WrapperSection>
      <WrapperSection>
        {/* If logged in, insert user Name and Email */}
        <div>
          <div className="w-form">
            <form id="email-form" name="email-form" data-name="Email Form">
              <div className="form-component-5">
                <div className="form-component-4">
                  <div className="form-component-3">
                    <div className="form-component-2">
                      <div className="form-component-1">
                        <label htmlFor="name-2" className="p-tag">Name</label>
                        <input type="text" className="form-input-1 w-input" maxLength="256" name="name" data-name="name" placeholder="Enter your name" id="name-2" required=""/>
                      </div>
                    </div>
                  </div>
                  <div className="form-component-3">
                    <div className="form-component-2">
                      <label htmlFor="email-2" className="p-tag">Email</label>
                    </div>
                    <div className="form-component-2">
                      <input type="email" className="form-input-1 w-input" maxLength="256" name="email" data-name="email" placeholder="Enter your email" id="email"/>
                    </div>
                  </div>
                </div>
                <div className="form-component-7">
                  <div className="form-component-3">
                    <div className="form-component-2">
                      <label htmlFor="email-2" className="p-tag">Message</label>
                    </div>
                    <div className="form-component-6">
                      <textarea id="Message" name="Message" placeholder="Message" maxLength="5000" data-name="Message" className="form-input-2 w-input"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-component-8">
                <input type="submit" value="Submit" data-wait="Please wait..." className="button-1 w-button"/>
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
      </WrapperSection>
      <ActionsBigButtonContainer/>
      <ActionsSmallContainer/>
      <Footer/>
    </div>
  );
};

export default Contact;
