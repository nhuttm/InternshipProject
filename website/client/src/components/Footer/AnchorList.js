import React from 'react';
import Anchor from '../Anchor/Anchor';

export default class AnchorList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="row">
                    <Anchor title="Home" className={this.props.className} link="/"/>
                    <Anchor title="Products" className={this.props.className} link="/products"/>
                    <Anchor title="Services" className={this.props.className} link="/"/>
                    <Anchor title="About Us" className={this.props.className} link="/"/>
                    <Anchor title="Help" className={this.props.className} link="/"/>
                    <Anchor title="Contacts" className={this.props.className} link="/"/>
                </div>
            </React.Fragment>
        )
    }
}