import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from './Header';

import LandingPage from './LandingPage';
import MainApp from './MainApp';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage}/>
          <Route path="/app" component={MainApp}/>
        </div>
      </Router>
    );
  }
}

export default App;
