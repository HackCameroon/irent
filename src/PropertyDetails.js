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
            expanded: true,
            plumbers: [
                {
                    name: "Mario Higgs",
                    image: "plumber1.jpeg"
                },
                {
                    name: "Richard McGill",
                    image: "plumber2.png"
                },
                {
                    name: "Ricardo O'Dwyer",
                    image: "plumber3.png"
                }
            ]
        }
    }
    expand() {
        this.setState({
            expanded: !this.state.expanded
        })
    }
    render() {
        let details = null
        if (this.state.expanded) {
            details = <div className="card">
                <div className="card-body issue">
                    <strong><i className="mdi mdi-undo-variant" /> Issue from an email sent to you</strong>
                    <h3 className="normal-font"><i className="mdi mdi-cancel" /> Issue with washing machine</h3>
                </div>
                <div className="card-body">
                    <div className="btn btn-outline-dark mb-4 mr-3"><i className="mdi mdi-check" /> Mark issue as resolved</div>
                    <div className="btn btn-outline-dark mb-4"><i className="mdi mdi-clock" /> Remind me later</div>
                    <div className="btn btn-outline-dark mb-4 ml-3"><i className="mdi mdi-dots-horizontal" /></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body issue-resolve">
                                    <h4 className="normal-font">Schedule a repair</h4>
                                </div>
                                <div className="card-body">
                                    {this.state.plumbers.map((plumber) => (
                                        <div className="row plumber-row">
                                            <img className="icon" src={plumber.image} /> {plumber.name} <span className="text-muted ml-4">€45</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body issue-resolve">
                                    <h4 className="normal-font">Replace</h4>
                                </div>
                                <div className="card-body">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <img src="/ulsterbank-logo.gif" className="ub-logo" />
                                            <div><i className="mdi mdi-check" />You're preapproved for an Ulster Bank loan at 4% APR.</div>
                                            <div className="btn btn-outline-dark mt-4">Continue</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="normal-text">Use savings</h5>
                                            <div>You can use your rainy day savings to finance this purchase.</div>
                                            <div className="btn btn-outline-dark mt-4">Continue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        }
        return (
            <div>
                <Link to="/" className="btn btn-light"><i className="mdi mdi-chevron-left" />Back</Link>
                <h1>32 Killarney St.  </h1>
                <div className="container mt-4">
                    <div className="row clickable" onClick={this.expand.bind(this)}>
                        <h2><i className="mdi mdi-wrench" /> Maintenance <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    {details}
                    <div className="row clickable">
                        <h2><i className="mdi mdi-currency-usd" /> Mortgage <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-account-multiple" /> Tenants <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-bank" /> Bank statements <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default PropertyDetails;
