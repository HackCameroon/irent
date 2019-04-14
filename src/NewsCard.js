import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';

class NewsCard extends Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body" style={{backgroundColor: this.props.data.backgroundColor}}>
                    <p><strong>{this.props.data.date}</strong></p>
                    <p><i>{this.props.data.text1}</i></p>
                    <p>{this.props.data.text2}</p>
                    <Link to={this.props.data.link} className="btn btn-outline-primary">{this.props.data.action}</Link>
                </div>
            </div>
        );
    }
}

export default NewsCard;
