import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../Pages/App';
import { connect } from 'react-redux';
import Products from '../Pages/Product';
import ProductDetail from '../Pages/ProductDetail';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import AdminLogin from '../Pages/Admin/AdminLogin';
import PublicRoutes from './PublicRoutes';

class Routes extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <PublicRoutes exact path="/" component={App} />
                    <PublicRoutes exact path="/products" component={Products} />
                    <PublicRoutes exact path="/products/:id" component={ProductDetail} />
                    <PrivateRouteAdmin exact path="/admin" user={this.props.user} component={Products} />
                    <Route exact path="/admin/login" component={AdminLogin}/>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user
    }
}


export default connect(mapStateToProps, null)(Routes);