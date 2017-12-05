import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../App';
import Comparison from '../client/layouts/Comparison';
import Faq from '../client/layouts/Faq';
import NotFound from '../client/layouts/NotFound';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/comparison" component={Comparison}/>
    <Route path="/faq" component={Faq}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
