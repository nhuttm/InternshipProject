import React from 'react';

import './Admin.scss';
import AdminModalLogin from './AdminModalLogin';

export default class AdminLogin extends React.Component {
    render() {
        return (                    
            <div className="container-fluid admin">
                <AdminModalLogin />
            </div>    
        )
    }
}