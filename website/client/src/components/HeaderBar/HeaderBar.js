import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import Button from '../Button/Button';
import LoginModal from '../Modal/LoginModal';
import './HeaderBar.scss';
import RegisterModal from '../Modal/RegisterModal';

export default class HeaderBar extends React.Component {
    constructor() {
        super();
        this.state = {
            loginClicked: false,
            registerClicked: false
        }
    }

    handleLogin = () => {
        this.setState({ loginClicked: true });
    }

    handleCloseLogin = () => {
        this.setState({ loginClicked: false });
    }

    handleRegister = () => {
        this.setState({ registerClicked: true });
    }

    handleCloseRegister = () => {
        this.setState({ registerClicked: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                    <div className="row" style={{ height: 100 }}>
                        <SearchBar />
                        <LogoImage />
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-register" title="register" onButtonClick={this.handleRegister} />
                        </div>
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-login" title="Login" onButtonClick={this.handleLogin} />
                        </div>
                        {this.state.loginClicked ? <LoginModal onClose={this.handleCloseLogin} /> : null}
                        {this.state.registerClicked ? <RegisterModal onClose={this.handleCloseRegister} /> : null}
                    </div>
                </div>
                <div className="line"></div>
            </React.Fragment>
        );
    }
};