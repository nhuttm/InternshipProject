import React from 'react';
import "./NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
                <li className="dropdown">
                    <a className="item-nav" href="#">{this.state.title}</a>
                    <button className="bttn-arrow-down"><FontAwesomeIcon icon="arrow-down"/></button>
                </li>
            </React.Fragment>
        );
    }
}