import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Property extends Component {
    render() {
        let content = null
        if (this.props.data.image == "p-3") {
            content = <i className="mdi mdi-folder-open-outline" />
        }
        let badge = null
        if (this.props.data.alerts > 0) {
            badge = <span class="badge badge-pill badge-danger">{this.props.data.alerts}</span>
        }
        return (
            <div className="col-md-2">
                <h5>{this.props.data.name}</h5>
                <div class={`property mb-4 ${this.props.data.image}`}>{content}</div>
                <div class="text-center d-block">

                    <Link to="/general" className="btn btn-outline-primary">Open {badge}</Link>
                </div>
            </div>
        );
    }
}

export default Property;
