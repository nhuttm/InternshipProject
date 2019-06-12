import React from 'react';
import LoginModal from '../Modal/LoginModal';
import { connect } from 'react-redux';
import './HeaderBar.scss';
import RegisterModal from '../Modal/RegisterModal';
import Button from '../Button/Button';
import { getUser } from '../../actions/userAction';
import UserAva from './UserAva';

class AuthenBar extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpenModalRegister: false,
            isOpenModalLogin: false
        }
    }

    componentDidMount = () => {
        this.props.getUser();
    }

    handleLogin = () => {
        this.setState({isOpenModalLogin: true});
    }

    handleCloseLogin = () => {
        this.setState({isOpenModalLogin: false});

    }

    handleRegister = () => {
        this.setState({isOpenModalRegister: true});

    }

    handleCloseRegister = () => {
        this.setState({isOpenModalRegister: false});
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.avatar ?
                        <React.Fragment>
                        <div className="col-md-2" style={{ margin: "auto" }}>
                        <div className="wrapped-ava">
                                <UserAva imgSrc={this.props.avatar} />
                        </div>
                        </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-register" title="register" onButtonClick={this.handleRegister} />
                        </div>
                        <div className="col-md-1" style={{ margin: "auto" }}>
                            <Button className="bttn-login" title="Login" onButtonClick={this.handleLogin} />
                        </div>
                            <RegisterModal onClose={this.handleCloseRegister} isOpen={this.state.isOpenModalRegister} />
                            <LoginModal onClose={this.handleCloseLogin} isOpen={this.state.isOpenModalLogin} />
                        </React.Fragment>
                }
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    console.log('authen');
    console.log(state);
    return {
        avatar: state.userReducer.avatar
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            dispatch(getUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenBar);