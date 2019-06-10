import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/index';
import HeaderBar from './components/HeaderBar/HeaderBar';
import NavBar from './components/NavBar/NavBar';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "semantic-ui-css/semantic.min.css";
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';

library.add(faSearch, faArrowDown);

const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <HeaderBar />
            <NavBar />
            <Routes />
            <Footer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
