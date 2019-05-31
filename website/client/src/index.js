import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NavBar from './components/NavBar/NavBar';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import clothesReducer from './reducer/clothesReducer';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import thunk from 'redux-thunk';

import 'bootstrap/dist/css/bootstrap.css';

library.add(faSearch, faArrowDown);

const store = createStore(clothesReducer, applyMiddleware(thunk));
ReactDOM.render(<HeaderBar />, document.getElementById('header'));
ReactDOM.render(
    <Provider store={store}>
        <NavBar />
    </Provider>,
 document.getElementById('navbar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
