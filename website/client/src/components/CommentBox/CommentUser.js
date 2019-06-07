import React from 'react';
import Label from '../Label/Label';

export default class CommentUser extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="row" style={{paddingLeft: 110}}>
                    <Label title={this.props.name} className="name-comment"></Label>
                </div>
                <div className="row" style={{paddingLeft: 110}}>
                    <Label title={this.props.date} className="date-comment"></Label>
                </div>
            </React.Fragment>
        )
    }
}