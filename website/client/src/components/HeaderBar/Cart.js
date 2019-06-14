import React from 'react';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';

export default class Cart extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Link to="/checkout/cart" className="cart"></Link>
                <Label title={this.props.number} className="number-cart"/>
            </React.Fragment>
        )
    }
}