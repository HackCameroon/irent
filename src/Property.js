import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Property extends Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4">
                    <img class="card-img-top" src={`/${this.props.image}.jpg`} alt="Card image cap" />
                    <div className="card-body">
                        <h4>Jensen McCallister</h4>
                        <a href="#" class="btn btn-primary">Open</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Property;
