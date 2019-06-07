import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import Button from '../Button/Button';
import LoginModal from '../Modal/LoginModal';
import './HeaderBar.scss';
import RegisterModal from '../Modal/RegisterModal';

let isOpenModalRegister = false;
let isOpenModalLogin = false;

export default class HeaderBar extends React.Component {


    handleLogin = () => {
        isOpenModalLogin = true;
        this.forceUpdate();
    }

    handleCloseLogin = () => {
        isOpenModalLogin = false;
        this.forceUpdate();
    }

    handleRegister = () => {
        isOpenModalRegister = true;
        this.forceUpdate();
    }

    handleCloseRegister = () => {
        isOpenModalRegister = false;
        this.forceUpdate();
    }

    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                    <div className="row" style={{ height: 100 }}>
                        <SearchBar />
                        <div className="col-md-5" style={{margin: 'auto', textAlign: 'center'}}>
                            <LogoImage className="main-logo"/>
                        </div>
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-register" title="register" onButtonClick={this.handleRegister} />
                        </div>
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-login" title="Login" onButtonClick={this.handleLogin} />
                        </div>
                        <RegisterModal onClose={this.handleCloseRegister} isOpen={isOpenModalRegister}/>
                        <LoginModal onClose={this.handleCloseLogin} isOpen={isOpenModalLogin}/>
                    </div>
                </div>
                <div className="line"></div>
            </React.Fragment>
        );
    }
};