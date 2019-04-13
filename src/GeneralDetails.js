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
                <div className="card-body bg-success text-white">
                    <strong><i className="mdi mdi-check" /> Annual profit in good standing</strong>
                    <h3 className="normal-font">€5,344</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <Chart
                                height={300}
                                chartType="ColumnChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Year', 'Tax', 'Repair', 'Mortgage'],
                                    ['2017', 3544, 1205, 30125],
                                    ['2018', 4500, 1205, 30100],
                                    ['2019', 6000, 7502, 29000],
                                ]}
                                options={{
                                    title: 'Expenses per year',
                                    chartArea: { width: '50%' },
                                    colors: ["#03101E", '#1C5693', "#007bff"],
                                    isStacked: true
                                }}
                                legendToggle
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <h1>13%</h1>
                                    <h5>Increase in expenditues</h5>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <h1>2.3x</h1>
                                    <h5>Repair expenses change</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>€19,830</h1>
                                    <h5>Transactional volume</h5>
                                </div>
                                <div className="col-md-6">
                                    <h1>5/5</h1>
                                    <h5>Regulatory standards achieved</h5>
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
                <h1>1 Terrace Pl.</h1>
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
