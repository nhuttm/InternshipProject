import React from 'react';

import './Admin.scss';
import AdminModalLogin from './AdminModalLogin';
import { connect } from 'react-redux';
import { IS_ADMIN } from '../../../constant/constant';
import { Redirect } from 'react-router-dom';
class AdminLogin extends React.Component {
    render() {
        return (
            this.props.user ? this.props.user.role === IS_ADMIN ? (<Redirect to="/admin" />) :
                <div className="container-fluid admin">
                    <AdminModalLogin />
                </div> : 
                <div className="container-fluid admin">
                    <AdminModalLogin />
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps, null)(AdminLogin);