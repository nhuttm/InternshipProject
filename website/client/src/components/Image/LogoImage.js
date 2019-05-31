import React from 'react';
import logo from './logo.png';

class LogoImage extends React.Component {

    constructor(){
        super();
        this.state = {
            style: {
                margin: "auto",
                textAlign: "center"
            }
        }
    }

    render() {
        return (
            <div className="col-md-5"style={this.state.style}>
                <img src={logo} alt="logo" className="main-logo"></img>
            </div>
        );
    }
}

export default LogoImage;