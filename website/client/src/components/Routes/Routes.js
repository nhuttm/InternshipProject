import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Products from '../Product';
import ProductDetail from '../ProductDetail';

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