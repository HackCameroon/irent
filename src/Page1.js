import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';

class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>Page 1</h1>
                <div class="row">
                    {["a", "b", "c", "d"].map((letter) => (<Property image={letter} />))}
                </div>
            </div>
        );
    }
}

export default Page1;
