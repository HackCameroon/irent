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
                    text: <span className="text-danger"><i className="mdi mdi-alert-circle-outline" /> 32 Killarney St. Washing machine issue: not starting anymore</span>,
                    date: "Yesterday at 17:25",
                    action: "Resolve",
                    backgroundColor: "#ff9999",
                    link: "/property",
                },
                {
                    text1: "Accounting",
                    text2: "Tax returns due next week",
                    date: "3 days ago",
                    action: "View",
                    backgroundColor: "#ffbf80",
                    link: "/property",
                },
                {
                    text1: "62 Castlefield Woods",
                    text2: "Missing rent from Julia",
                    date: "5 days ago",
                    action: "View",
                    backgroundColor: "#ffbf80",
                    link: "/property",
                },
                {
                    text1: "32 Killarney St.",
                    text2: "Insurance renewal due in three weeks",
                    date: "12/02/2019",
                    action: "View",
                    backgroundColor: "#adebad",
                    link: "/property",
                },
                {
                    text1: "62 Castlefield Woods",
                    text2: "Price alert",
                    date: "05/02/2019",
                    action: "View",
                    backgroundColor: "#adebad",
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
                <div className="offset-md-2 mb-4">
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
                <div className="offset-md-2 mb-4 mt-4 col-md-8">
                    <h1>Feed</h1>
                </div>
                <div class="col-md-8 offset-md-2">
                    {this.state.news.map((news) => (
                        <NewsCard data={news} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Newsfeed;
