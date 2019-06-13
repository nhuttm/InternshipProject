import React from 'react'
import "./Field.scss";

export default class TextField extends React.Component {
    render() {
        return (
            <React.Fragment>
                <label className={this.props.classNameLabel}>{this.props.title}</label>
                <input type='text' placeholder={this.props.placeholder} className={this.props.classNameInput} value={this.props.value} name={this.props.name} onChange={this.props.onChange}></input>
            </React.Fragment>
        )
    }
}