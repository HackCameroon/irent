import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#56CCDD'}}>
        <img src='irent_logo.png'/>
        <p><strong> Irent </strong></p>
      </div>
    );
  }
}

export default Header;
