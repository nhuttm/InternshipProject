import React from 'react';
import "./NavBar.scss";

export default class DropDownList extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <ul className="dropdown-content">
                    <a className="element-dropdown" href="#">Tops</a>
                    <a className="element-dropdown" href="#">Bottoms</a>
                    <a className="element-dropdown" href="#">Dress</a>
                    <a className="element-dropdown" href="#">Jackets</a>
                    <a className="element-dropdown" href="#">Shoes</a>
                    <a className="element-dropdown" href="#">Accesories</a>
                    <a className="element-dropdown" href="#">Sales</a>
                </ul>
            </div>
        );
    }
}