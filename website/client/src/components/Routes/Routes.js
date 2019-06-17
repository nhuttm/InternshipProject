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
                    <PrivateRouteAdmin exact path="/admin/addproduct" user={this.props.user} component={AdminAddProduct} />
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