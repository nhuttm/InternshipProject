import React from 'react';
import Anchor from '../Anchor/Anchor';
import Label from '../Label/Label';

export default class Cart extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Anchor className="cart" link="/checkout/cart"/>
                <Label title={this.props.number} className="number-cart"/>
            </React.Fragment>
        )
    }
}