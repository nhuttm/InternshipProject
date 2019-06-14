import React, { Component } from 'react'
import LogoImage from '../Image/LogoImage';
import AdminMenuItem from './AdminMenuItem';
import './MenuBar.scss';

export default class AdminMenuBar extends Component {
    render() {
        return (
            <div className="col-md-2 menubar-admin">
                <div className="row wrapped-logo">
                    <LogoImage className="admin-logo"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  link="/admin/overview" name="Overview" img="/img/overview.png"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  name="Orders" img="/img/orders.png"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  name="Products" img="/img/products.png"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  name="Payments" img="/img/payment.png"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  name="Promotions" img="/img/promotion.png"/>
                </div>
                <div className="row wrapped-menu-item">
                    <AdminMenuItem  name="Setting" img="/img/setting.png"/>
                </div>
            </div>
        )
    }
}
