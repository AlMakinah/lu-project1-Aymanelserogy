import React, { Component } from 'react';
import '../styles.css'
import Main from './landingPage';
import Dpage from './designersPa';
import GeneresPage from './generesPage';
import { Route,  BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={Main} />
          <Route path="/Designers" component={Dpage} />
          <Route path="/Urls" component={GeneresPage} />
        </>
      </Router>
    );
  }
}

export default App;
