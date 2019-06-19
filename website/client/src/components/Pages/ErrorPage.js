import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
    render() {
        return (
            <div id="notfound">
                <div class="notfound">
                    <div class="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Oops! This Page Could Not Be Found</h2>
                    <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                    <Link to="/" className="notfound-link">Go To Homepage</Link>
                </div>
            </div>
        )
    }
}
