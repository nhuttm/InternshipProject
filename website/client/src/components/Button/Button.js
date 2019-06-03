import React from 'react';
import "./Button.scss";

class Button extends React.Component {
    constructor(){
        super();
    }

    handleClickLogin = () => {

    }

    render() {
        return (
            <button type={this.props.type} className={this.props.className} onClick={this.props.onButtonClick}>{this.props.title}</button>
        );
    }
}

export default Button;