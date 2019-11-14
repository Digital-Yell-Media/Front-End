import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from './components/contactForm';
import Home from './components/home';
import Services from './components/services';
import Work from './components/work';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/services'} className="nav-link">Services</Link></li>
              <li><Link to={'/work'} className="nav-link">Work</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/work" component={Work}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
