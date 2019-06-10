import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Products from './components/Product';
import ProductDetail from './components/ProductDetail';

export default class Routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/products/:id" component={ProductDetail} />
                </Switch>
            </React.Fragment>
        )
    }
}