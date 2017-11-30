import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../ui/App';
import Faq from '../ui/pages/Faq';
import NotFound from '../ui/pages/NotFound';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/faq" component={Faq}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
