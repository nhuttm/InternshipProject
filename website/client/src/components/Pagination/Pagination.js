import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';
import './Pagination.scss';

export default class Pagination extends React.Component{
    render(){
        return(
            <div className={this.props.classNames}>
                <div className="row">
                <Link to={{ pathname: this.props.pathName, search: this.props.searchLeft }} className="left-anchor"></Link>
                <Label title={this.props.pageNumber + "/" + this.props.totalPages} className="pagination-label"/>
                <Link to={{ pathname: this.props.pathName, search: this.props.searchRight }} className="right-anchor"></Link>
                </div>
            </div>
        )
    }
}