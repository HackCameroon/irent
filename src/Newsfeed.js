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
                    text: "Issue with fridge.",
                    date: "1 day ago",
                    action: "Resolve",
                    link: "/maintenance",
                },
                {
                    text: "Tax returns completed.",
                    date: "3 days ago",
                    action: "View"
                },
                {
                    text: "Julia has not paid her rent for 1 Terrace.",
                    date: "5 days ago",
                    action: "View"
                },
                {
                    text: "Insurance needs to be renewed.",
                    date: "12/02/2019",
                    action: "View"
                },
                {
                    text: "Price alert for your property, 1 Terrace.",
                    date: "05/02/2019",
                    action: "View"
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Properties</h1>
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
