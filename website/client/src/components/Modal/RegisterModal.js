import React from 'react'
import Modal from 'react-responsive-modal';
import TextField from '../Field/TextField';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Label from '../Label/Label';
import { Checkbox } from 'semantic-ui-react';
import "./Modal.scss";
import { postRegisterRequest } from '../../actions/userAction';

class RegisterModal extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            fullname: ''
        }
    }
    

    handleLogin = (event) => {
        event.preventDefault();
        this.props.postRegister(this.state.email, this.state.password, this.state.fullname);

        this.setState({
            email: '',
            password: '',
            fullname: ''
        })

        this.props.onClose();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Modal open={this.props.isOpen} center={true} classNames={{ modal: { 'register-form': 'none' } }} showCloseIcon={true} onClose={this.props.onClose}>
                <div className="container-fluid">
                <form>
                    <div className="row" style={{paddingBottom: 35}}>
                        <Label title="Register" className="login-label"/>
                    </div>
                    <div className="row">
                        <TextField title='NAME' classNameInput="input-field" classNameLabel="title-label"  placeholder='Enter your name' name="fullname" value={this.state.fullname} onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <TextField title='E-MAIL' classNameInput="input-field" classNameLabel="title-label"  placeholder='Enter your email' name="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <TextField title='PASSWORD' classNameInput="input-field" classNameLabel="title-label"  placeholder='Enter your password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <Checkbox label='Remember password' className="check-box"/>
                    </div>
                    <div className="row" style={{paddingTop: 20}}>
                        <Button type="submit" className="bttn-login-sub" title="Register" onButtonClick={this.handleLogin} />
                    </div>
                </form>
                <div className="line" style={{marginTop: 50}}></div>
                <div className="row" style={{textAlign: 'center', display: 'block'}}>
                    <Label title="Do you have an account?" className='default'></Label>
                    <Button title='Login' className='register'/>
                </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.userReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postRegister: (email, password, fullname) => {
            dispatch(postRegisterRequest(email, password, fullname));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);