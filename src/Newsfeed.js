import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Property from './Property';
import NewsCard from './NewsCard';

class Newsfeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [
                {
                    text: "32 Killarney St.\nWashing machine issue: not starting anymore",
                    date: "Yest. at 17:25",
                    action: "Resolve",
                    link: "/maintenance",
                },
                {
                    text: "Accounting\nTax returns due next week",
                    date: "3 days ago",
                    action: "View"
                },
                {
                    text: "62 Castlefield Woods\nMissing rent from Julia",
                    date: "5 days ago",
                    action: "View"
                },
                {
                    text: "32 Killarney St.\nInsurance renewal due in three weeks",
                    date: "12/02/2019",
                    action: "View"
                },
                {
                    text: "62 Castlefield Woods\nPrice alert",
                    date: "05/02/2019",
                    action: "View"
                },
            ],
            properties: [
                {
                    name: "62 Castlefield Woods, Clonsilla",
                    image: "a.jpg",
                    alerts: 0
                },
                {
                    name: "32 Killarney St, Dublin",
                    image: "b.jpg",
                    alerts: 3
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Properties</h1>
                <div className="row">
                    {this.state.properties.map((property) => (
                        <Property data={property} />
                    ))}
                </div>
                <h1>Feed</h1>
                <div class="col-md-6 offset-md-3">
                    {this.state.news.map((news) => (
                        <NewsCard data={news} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Newsfeed;
