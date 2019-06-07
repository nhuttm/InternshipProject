import React from 'react';
import "./NavBar.scss";

export default class DropDownList extends React.Component{
    render(){
        return(
                <ul className="dropdown-content">
                    <a className="element-dropdown" href={this.props.tops}>Tops</a>
                    <a className="element-dropdown" href={this.props.bottoms}>Bottoms</a>
                    <a className="element-dropdown" href={this.props.dresses}>Dresses</a>
                    <a className="element-dropdown" href={this.props.jackets}>Jackets</a>
                    <a className="element-dropdown" href={this.props.shoes}>Shoes</a>
                    <a className="element-dropdown" href={this.props.accesories}>Accesories</a>
                    <a className="element-dropdown" href={this.props.sales}>Sales</a>
                </ul>
        );
    }
}