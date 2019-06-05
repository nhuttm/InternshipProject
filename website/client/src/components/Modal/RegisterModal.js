import React from 'react'
import Modal from 'react-responsive-modal';
import TextField from '../Field/TextField';
import Button from '../Button/Button';
import Label from '../Label/Label';
import { Checkbox } from 'semantic-ui-react';
import "./Modal.scss";

export default class RegisterModal extends React.Component {


    handleLogin = () => {

    }

    render() {
        return (
            <Modal open={true} center={true} classNames={{ modal: { 'register-form': 'none' } }} showCloseIcon={true} onClose={this.props.onClose}>
                <div className="container-fluid">
                <form>
                    <div className="row" style={{paddingBottom: 35}}>
                        <Label title="Register" className="login-label"/>
                    </div>
                    <div className="row">
                        <TextField title='NAME' placeholder='Enter your name' />
                    </div>
                    <div className="row">
                        <TextField title='E-MAIL' placeholder='Enter your email' />
                    </div>
                    <div className="row">
                        <TextField title='PASSWORD' placeholder='Enter your password' />
                    </div>
                    <div classNames="row">
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