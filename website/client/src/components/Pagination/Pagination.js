import React from 'react';
import Anchor from '../Anchor/Anchor';
import Label from '../Label/Label';
import './Pagination.scss';

export default class Pagination extends React.Component{
    render(){
        return(
            <div className={this.props.classNames}>
                <div className="row">
                <Anchor link={this.props.leftAnchor} title={this.props.titleLeft} className="left-anchor"/>
                <Label title={this.props.pageNumber + "/" + this.props.totalPages} className="pagination-label"/>
                <Anchor link={this.props.rightAnchor} title={this.props.titleRight} className="right-anchor"/>
                </div>
            </div>
        )
    }
}