import React from 'react';
import "./NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDownList from './DropDownList';

export default class DropDown extends React.Component{

    constructor(props){
        super();
        this.state = {
            title: props.title,
        }
    }

    render(){
        return(
            <React.Fragment>
                <li className="dropdown-nav">
                    <a className="item-nav" href="#">{this.state.title}</a>
                    <button className="bttn-arrow-down"><FontAwesomeIcon icon="arrow-down"/></button>
                    <DropDownList tops={this.props.tops} bottoms={this.props.bottoms} dresses={this.props.dresses} jackets={this.props.jackets} shoes={this.props.shoes} accesories={this.props.accesories} sales={this.props.sales}/>
                </li>
            </React.Fragment>
        );
    }
}