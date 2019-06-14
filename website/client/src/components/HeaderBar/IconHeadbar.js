import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';

export default class IconHeadbar extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Link to={this.props.link} className={this.props.classNameLink}></Link>
                <Label title={this.props.number} className={this.props.classNameLabel}/>
            </React.Fragment>
        )
    }
}