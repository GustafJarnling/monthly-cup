import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../App';
import ChangeCup from '../client/layouts/ChangeCup';
import Comparison from '../client/layouts/Comparison';
import Contact from '../client/layouts/Contact';
import Faq from '../client/layouts/Faq';
import History from '../client/layouts/History';
import NotFound from '../client/layouts/NotFound';
import Product from '../client/layouts/Product';
import Products from '../client/layouts/Products';
import Projects from '../client/layouts/Projects';
import WhichCupShouldIHave from '../client/layouts/WhichCupShouldIHave';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/change-cup" component={ChangeCup}/>
    <Route path="/comparison" component={Comparison}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/faq" component={Faq}/>
    <Route path="/history" component={History}/>
    <Route path="/product" component={Product}/>
    <Route path="/products" component={Products}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/which-cup-should-i-have" component={WhichCupShouldIHave}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
