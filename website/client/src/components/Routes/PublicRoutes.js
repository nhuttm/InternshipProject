import React from 'react';
import HeaderBar from '../HeaderBar/HeaderBar';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Route } from 'react-router-dom';

const PublicRoutes = ({ component: Component, ...rest }) =>
    (
        <>
            <HeaderBar /> <NavBar />
            <Route {...rest} render={ (props) =>
                <Component />
            } />
            <Footer />
        </>
    )

export default PublicRoutes;