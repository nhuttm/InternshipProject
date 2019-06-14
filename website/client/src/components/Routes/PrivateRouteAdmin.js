import React from 'react';
import { ADMIN } from '../../constant/constant';
import { Redirect, Route } from 'react-router-dom';
import AdminMenuBar from '../MenuBar/AdminMenuBar';
import AdminHeaderBar from '../HeaderBar/AdminHeaderBar';

const PrivateRouteAdmin = ({ component: Component, ...rest }) =>
    (
        <Route {...rest} render={
            (props) =>
                (
                    rest.user ? (
                        rest.user.role === ADMIN ?
                            <div className="container-fluid">
                                <div className="row">
                                    <AdminMenuBar />
                                    <div className="col-md-10">
                                        <AdminHeaderBar />
                                        <Component {...props} />
                                    </div>
                                </div>
                            </div> : <Redirect to='/admin/login' />
                    ) : <Redirect to='/admin/login' />
                )
        } />
    )

export default PrivateRouteAdmin;