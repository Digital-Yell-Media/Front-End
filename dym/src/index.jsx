import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './components/contactForm';
import Home from './components/home';
import Services from './components/services';
import Work from './components/work';

import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/services" component={Services}/>
    <Route path="/work" component={Work}/>
    <Route path="/contact" component={Contact}/>
  </Router>,
  document.getElementById('app')
);