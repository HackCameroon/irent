import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';
import NewsCard from './NewsCard';

class PropertyDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Link to="/" className="btn btn-light"><i className="mdi mdi-chevron-left" />Back</Link>
                <h1>1 Terrace Pl.</h1>
                <div className="container mt-4">
                    <div className="row">
                        <h2><i className="mdi mdi-bank" /> Maintenance <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row">
                        <h2><i className="mdi mdi-bank" /> Mortgage <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row">
                        <h2><i className="mdi mdi-bank" /> Tenants <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row">
                        <h2><i className="mdi mdi-bank" /> Bank statements <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default PropertyDetails;
