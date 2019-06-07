import React from 'react';
import DropDown from './DropDown';

export default class NavBar extends React.Component{
    constructor(){
        super();
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{textAlign: "center", paddingTop: 10, paddingBottom: 10}}>
                <ul className="wrapped-dropdown">
                    <DropDown title="Men" tops="/products" bottoms="/products" dresses="/products" jackets="/products" shoes="/products" accesories="/products" sales="/products"/>
                     <DropDown title="Ladies" tops="/products" bottoms="/products" dresses="/products" jackets="/products" shoes="/products" accesories="/products" sales="/products"/>
                    <DropDown title="Boys" tops="/products" bottoms="/products" dresses="/products" jackets="/products" shoes="/products" accesories="/products" sales="/products"/>
                    <DropDown title="Girls" tops="/products" bottoms="/products" dresses="/products" jackets="/products" shoes="/products" accesories="/products" sales="/products"/>
                </ul>
            </div>
            <div className="line"></div>
            </React.Fragment>
        );
    }
}