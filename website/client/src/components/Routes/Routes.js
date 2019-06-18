import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../Pages/App';
import { connect } from 'react-redux';
import Products from '../Pages/Product';
import ProductDetail from '../Pages/ProductDetail';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import AdminLogin from '../Pages/Admin/AdminLogin';
import PublicRoutes from './PublicRoutes';
import AdminProducts from '../Pages/Admin/AdminProducts';
import CartPage from '../Pages/CartPage';
import AdminAddProduct from '../Pages/Admin/AdminAddProduct';
import ErrorPage from '../Pages/ErrorPage';
import AdminEditProduct from '../Pages/Admin/AdminEditProduct';

class Routes extends React.Component {
    render() {
        return (
            <>
                <Switch> 
                    <PublicRoutes exact path="/" component={App} />
                    <PublicRoutes exact path="/products" component={Products} />
                    <PublicRoutes exact path="/products/:id" component={ProductDetail} />
                    <PublicRoutes exact path="/checkout/cart" component={CartPage} />
                    <PrivateRouteAdmin exact path="/admin" user={this.props.user} component={AdminProducts} />
                    <PrivateRouteAdmin exact path="/admin/products" user={this.props.user} component={AdminProducts} />
                    <PrivateRouteAdmin exact path="/admin/add_product" user={this.props.user} component={AdminAddProduct} />
                    <PrivateRouteAdmin exact path="/admin/edit_product/:id" user={this.props.user} component={AdminEditProduct} />
                    <Route exact path="/admin/login" component={AdminLogin}/>
                    <Route component={ErrorPage}/>
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