import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Page1 from './Page1';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route path="/" exact component={Page1} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
