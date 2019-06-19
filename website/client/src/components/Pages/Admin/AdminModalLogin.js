import React from 'react';
import { connect } from 'react-redux';
import { postLoginRequest } from '../../../actions/userAction';
import Label from '../../Label/Label';
import TextField from '../../Field/TextField';
import Button from '../../Button/Button';
import Anchor from '../../Anchor/Anchor';
import { withRouter } from 'react-router-dom';

class AdminModalLogin extends React.Component{

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    } 

    handleLogin = async (event) => {
        
        event.preventDefault();
        await this.props.postLogin(this.state.email, this.state.password);

        this.props.history.push('/admin/products');
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="admin-modal-login container">
                <form className="col-md-12">
                    <div className="row" style={{paddingBottom: 35, paddingTop: 30}}>
                        <Label title="Log In" className="login-label-admin"/>
                    </div>
                    <div className="row">
                        <TextField title='E-MAIL' classNameInput="input-field-admin" classNameLabel="title-label-admin"  placeholder='email@sample.com' name="email" value={this.state.email} onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="row">
                        <TextField title='PASSWORD' classNameInput="input-field-admin pass" classNameLabel="title-label-admin"  placeholder='Enter your password' name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                    </div>
                    <div className="row" style={{paddingTop: 20}}>
                        <Button type="submit" className="bttn-login-admin" title="Login" onButtonClick={e => this.handleLogin(e)} />
                    </div>
                    <div className="row" style={{paddingTop: 40}}>
                        <Anchor title="Forgot password" link="#" className="forgot-pass"/>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postLogin: (email, password) => {
            dispatch(postLoginRequest(email, password));
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(AdminModalLogin));