import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import './HeaderBar.scss';
import AuthenBar from './AuthenBar';
import Cart from './Cart';

export default class HeaderBar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                    <div className="row" style={{ height: 100 }}>
                    <div className="col-md-3" style={{margin: 'auto', textAlign: 'center'}}>
                        <SearchBar />
                    </div>
                        <div className="col-md-5" style={{margin: 'auto', textAlign: 'center'}}>
                            <LogoImage className="main-logo"/>
                        </div>
                        <AuthenBar />
                        <div className="col-md-1" style={{margin: 'auto', textAlign: 'center'}}>
                            <Cart number="1"/>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </React.Fragment>
        );
    }
};