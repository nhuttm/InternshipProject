import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class AdminMenuItem extends Component {
    render() {
        return (
                <>
                    <img src={process.env.PUBLIC_URL + this.props.img} className="menu-item-img" alt="img-admin-item"/>
                    <Link className="admin-menu-item" to={this.props.link}>{this.props.name}</Link>
                </>
        )
    }
}
