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
                    name: "Tiernan Higgs",
                    image: "plumber1.jpeg",
                    price: "€32",
                    star: "3stars.png"
                },
                {
                    name: "Richard McGill",
                    image: "plumber2.png",
                    price: "€40",
                    star: "4stars2.png"
                },
                {
                    name: "Ricardo O'Dwyer",
                    image: "plumber3.png",
                    price: "€42",
                    star: "3stars.png"
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
                                            <img className="icon" src={plumber.image} /> {plumber.name} <span className="text-muted ml-5">{plumber.price}</span>
                                            <img width='100' src={plumber.star} />
                                            <div className="btn btn-outline-dark mb-4 ml-3"><i />Send message</div>
                                            <div className="btn btn-outline-dark mb-4 ml-3"><i />Make payment</div>
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
                                        <div> <img height="90" width="90" src="washingmachine.jpg" /> We found you an exact replacement</div>
                                        <div> <img height="90" width="180" src="amazon_logo.png" className="amazon-logo" /> <h1><strong>500€</strong></h1></div>
                                    </div>
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <img src="/ulsterbank-logo.gif" className="ub-logo" />
                                            <div><i className="mdi mdi-check" />You're preapproved for an Ulster Bank loan</div>
                                            <div style={{ backgroundColor: '#c6ffb3' }}> <h1><strong> 4% APR </strong> </h1></div>
                                            <div className="btn btn-outline-dark mt-4">Purchase Now</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="normal-text"><strong>Savings fund</strong></h5>
                                            <div><i className="mdi mdi-check" />You have the following amount in your account</div>
                                            <div ><h3>€252.92</h3></div>
                                            <div className="btn btn-outline-dark mt-4">Top up savings</div>
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
                <h1>32 Killarney St.</h1>
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
