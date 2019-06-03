import React from 'react'
import "./Field.scss";

export default class TextField extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label className="title-label">{this.props.title}</label>
                <input type='text' placeholder={this.props.placeholder} className="input-field"></input>
            </React.Fragment>
        )
    }
}