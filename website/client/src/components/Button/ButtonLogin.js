import React from 'react';
import "./Button.scss";

class ButtonLogin extends React.Component {
    constructor(){
        super();
        this.state = {
            style: {
                margin: "auto",
                textAlign: "center"
            }
        }
    }

    handleClickLogin = () => {

    }

    render() {
        return (
            <div className="col-md-1" style={this.state.style}>
                <button className="bttn-login" onClick={this.handleClickLogin}>Login</button>
            </div>
        );
    }
}

export default ButtonLogin;