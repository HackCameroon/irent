import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Property extends Component {
    render() {
        return (
            <div className="col-md-4">
                <h5>{this.props.data.name}</h5>
                <img class="card-img-top mb-4" src={`/${this.props.data.image}`} alt="Card image cap" />
                <div className="btn btn-outline-primary">Open</div>
            </div>
        );
    }
}

export default Property;
