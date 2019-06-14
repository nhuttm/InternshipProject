import React from 'react';
import { ADMIN } from '../../constant/constant';
import { Redirect, Route } from 'react-router-dom';

const PrivateRouteAdmin = ({ component: Component, ...rest }) =>
    (
        <Route {...rest} render={
            (props) =>
                (
                    rest.user ? (
                        rest.user.role === ADMIN ? <Component {...props}/> : <Redirect to='/admin/login' />
                    ) : <Redirect to='/admin/login' />
                )
        } />
    )

export default PrivateRouteAdmin;