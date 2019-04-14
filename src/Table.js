import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';
import NewsCard from './NewsCard';
import Chart from 'react-google-charts';

class Table extends Component {
    render() {

        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Person</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Bank Acc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((row) => (
                            <tr>
                                <th scope="row"><i className="mdi mdi-check" /></th>
                                <td>{row.person ? <img className="icon icon-small" src={row.person} /> : null}Mark Otto</td>
                                <td>450</td>
                                <td>{row.num}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="btn btn-outline-primary">View more</div>
            </div>
        );
    }
}

export default Table;
