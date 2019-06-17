import React from 'react'
import "./Field.scss";

export default class TextField extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className={this.props.wrappedLabel}>
                    <label className={this.props.classNameLabel}>{this.props.title}</label>
                </div>
                <input type='text' placeholder={this.props.placeholder} className={this.props.classNameInput} value={this.props.value} name={this.props.name} onChange={this.props.onChange}></input>
            </React.Fragment>
        )
    }
}