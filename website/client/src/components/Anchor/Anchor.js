import React from 'react';
import "./Anchor.scss";

class Anchor extends React.Component {
    constructor(){
        super();
    }

    handleClickLogin = () => {

    }

    render() {
        return (
            <a href={this.props.link} className={this.props.className}>{this.props.title}</a>
        );
    }
}

export default Anchor;