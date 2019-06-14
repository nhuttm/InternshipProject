import React from 'react';
import "./NavBar.scss";
import { Link } from 'react-router-dom';
export default class DropDownList extends React.Component{
    render(){
        return(
                <ul className="dropdown-content">
                    <Link className="element-dropdown" to={this.props.tops}>Tops</Link>
                    <Link className="element-dropdown" to={this.props.bottoms}>Bottoms</Link>
                    <Link className="element-dropdown" to={this.props.dresses}>Dresses</Link>
                    <Link className="element-dropdown" to={this.props.jackets}>Jackets</Link>
                    <Link className="element-dropdown" to={this.props.shoes}>Shoes</Link>
                    <Link className="element-dropdown" to={this.props.accesories}>Accesories</Link>
                    <Link className="element-dropdown" to={this.props.sales}>Sales</Link>
                </ul>
        );
    }
}