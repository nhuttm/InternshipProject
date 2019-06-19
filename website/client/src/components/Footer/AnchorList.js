import React from 'react';
import Anchor from '../Anchor/Anchor';
import { Link } from 'react-router-dom';
export default class AnchorList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <Link className={this.props.className} to="/">Home</Link>
                    <Link className={this.props.className} to="/products">Products</Link>
                    <Link className={this.props.className} to="/">Services</Link>
                    <Link className={this.props.className} to="/">About Us</Link>
                    <Link className={this.props.className} to="/">Help</Link>
                    <Link className={this.props.className} to="/">Contacts</Link>
                </div>
            </React.Fragment>
        )
    }
}