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
                    date: "Yesterday at 17:25",
                    action: "Resolve",
                    link: "/property",
                },
                {
                    text: "Accounting\nTax returns due next week",
                    date: "3 days ago",
                    action: "View",

                    link: "/property",
                },
                {
                    text: "62 Castlefield Woods\nMissing rent from Julia",
                    date: "5 days ago",
                    action: "View",

                    link: "/property",
                },
                {
                    text: "32 Killarney St.\nInsurance renewal due in three weeks",
                    date: "12/02/2019",
                    action: "View",

                    link: "/property",
                },
                {
                    text: "62 Castlefield Woods\nPrice alert",
                    date: "05/02/2019",
                    action: "View",

                    link: "/property",
                },
            ],
            properties: [


                {
                    name: "Property Portfolio",
                    image: "p-3",
                    alerts: 0
                },
                {
                    name: "62 Castlefield Woods, Clonsilla",
                    image: "p-1",
                    alerts: 2
                },
                {
                    name: "32 Killarney St, Dublin",
                    image: "p-2",
                    alerts: 1
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <div className="offset-md-3 mb-4">
                    <h1>Properties</h1>
                </div>
                <div className="row">
                    <div className="arrow offset-md-2 col-md-1">
                        <i className="mdi mdi-chevron-left" />
                    </div>
                    {this.state.properties.map((property) => (
                        <Property data={property} />
                    ))}
                    <div className="arrow col-md-1">
                        <i className="mdi mdi-chevron-right" />
                    </div>
                </div>
                <div className="offset-md-3 mb-4 mt-4 col-md-8">
                    <h1>Feed</h1>
                </div>
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
