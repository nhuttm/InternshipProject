import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Products from './components/Product';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import reducer from './reducer/index';
// import reducer from './reducer/clothesReducer';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "semantic-ui-css/semantic.min.css";
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';

library.add(faSearch, faArrowDown);

const store = createStore(reducer, applyMiddleware(thunk));
console.log(store.getState());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route path="/products" component={Products}/>
            <Route path="/" component={App}/>
        </Switch>
        </BrowserRouter>
    </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
