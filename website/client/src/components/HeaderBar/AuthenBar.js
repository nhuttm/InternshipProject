import React from 'react';
import LoginModal from '../Modal/LoginModal';
import { connect } from 'react-redux';
import './HeaderBar.scss';
import RegisterModal from '../Modal/RegisterModal';
import Button from '../Button/Button';
import { getUser } from '../../actions/userAction';
import UserAva from './UserAva';

let isOpenModalRegister = false;
let isOpenModalLogin = false;


class AuthenBar extends React.Component {
    componentDidMount = () => {
        this.props.getUser();
    }

    componentDidUpdate = () => {
        this.props.getUser();

        console.log('did update');
    }

    handleLogin = () => {
        isOpenModalLogin = true;
        this.forceUpdate();
    }

    handleCloseLogin = async () => {
        isOpenModalLogin = false;
        console.log('updatexx');
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
        console.log('update');
        return (
            <React.Fragment>
                {
                    this.props.user ?
                        <React.Fragment>
                        <div className="col-md-2" style={{ margin: "auto" }}>
                        <div className="wrapped-ava">
                                <UserAva imgSrc={this.props.user.img} />
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
                            <RegisterModal onClose={this.handleCloseRegister} isOpen={isOpenModalRegister} />
                            <LoginModal onClose={this.handleCloseLogin} isOpen={isOpenModalLogin} />
                        </React.Fragment>
                }
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.userReducer.user
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