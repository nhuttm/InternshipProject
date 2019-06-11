import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import './HeaderBar.scss';
import AuthenBar from './AuthenBar';

export default class HeaderBar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                    <div className="row" style={{ height: 100 }}>
                        <SearchBar />
                        <div className="col-md-5" style={{margin: 'auto', textAlign: 'center'}}>
                            <LogoImage className="main-logo"/>
                        </div>
                        <AuthenBar />
                    </div>
                </div>
                <div className="line"></div>
            </React.Fragment>
        );
    }
};