import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Newsfeed from './Newsfeed';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <Route path="/" exact component={Newsfeed} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
