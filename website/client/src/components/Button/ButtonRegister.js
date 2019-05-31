import React from 'react';
import "./Button.scss"

class ButtonRegister extends React.Component {
    constructor(){
        super();
        this.state = {
            style: {
                margin: "auto",
                textAlign: "center"
            }
        }
    }

    handleClickRegister = () => {
    }

    render() {
        return (
            <div className="col-md-1" style={this.state.style}>
                <button className="bttn-register" onClick={this.handleClickRegister}>Register</button>
            </div>
        );
    }
}
export default ButtonRegister;