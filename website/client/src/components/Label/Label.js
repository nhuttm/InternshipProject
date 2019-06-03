import React from 'react'
import "./Label.scss"

export default class Label extends React.Component {
    render() {
        return(
            <React.Fragment>
                <label className={this.props.className}>{this.props.title}</label>
            </React.Fragment>
        )
    }
}