import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';
import NewsCard from './NewsCard';
import Chart from 'react-google-charts';

class GeneralDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
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
                <div style={{backgroundColor: '#ffa31a'}} className="card-body issue">
                    <strong><h3><i className="mdi mdi-calendar-clock" /> Time to generate your annual tax return</h3></strong>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                          <div> <h3><strong> Historical Financial Summary </strong></h3></div>
                            <Chart
                                height={300}
                                chartType="ColumnChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Year', 'Income', 'Expenses', 'Tax'],
                                    ['2016', 14360, 8928, 3344],
                                    ['2017', 15680, 9114, 3414],
                                    ['2018', 16000, 9300, 3484],
                                ]}
                                options={{

                                    chartArea: { width: '50%' },
                                    colors: ["#03101E", '#1C5693', "#007bff"],
                                    isStacked: true
                                }}
                                legendToggle
                            />
                        </div>
                        <div className="col-md-6">
                          <div> <h3><strong> 2018 oveview </strong></h3></div>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h1>€550,000</h1>
                                    <h5>Portfolio value</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h1>€350,000</h1>
                                    <h5>Equity</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>€3,216</h1>
                                    <h5>Profit after tax</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>1.92%</h1>
                                    <h5>Renew your mortgage now</h5>
                                    <img src="/ulsterbank-logo.gif" className="ub-logo" />
                                </div>
                            </div>
                        </div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-file-document-box" /> Generate tax report</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-google-spreadsheet" /> Generate spreadsheet</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-clock" /> Compare</div>
                        <div className="btn btn-outline-dark mt-4 ml-3"><i className="mdi mdi-dots-horizontal" /></div>
                    </div>
                </div>

            </div>
        }
        return (
            <div>
                <Link to="/" className="btn btn-light"><i className="mdi mdi-chevron-left" />Back</Link>
                <h1>Property Portfolio</h1>
                <div className="container mt-4">
                    <div className="row clickable" onClick={this.expand.bind(this)}>
                        <h2><i className="mdi mdi-finance" /> Profitability <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    {details}
                    <div className="row clickable">
                        <h2><i className="mdi mdi-folder-alert" /> Risk assesment <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-clock" /> History <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                    <div className="row clickable">
                        <h2><i className="mdi mdi-currency-usd" /> Tax assesment <i className="mdi mdi-chevron-down float-right" /></h2>
                    </div>
                </div>

            </div>
        );
    }
}

export default GeneralDetails;
