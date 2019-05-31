import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import ButtonRegister from '../Button/ButtonRegister';
import ButtonLogin from '../Button/ButtonLogin';
import './HeaderBar.scss';

export default class HeaderBar extends React.Component {
    constructor () {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                <div className="row" style={{height: 100}}>
                    <SearchBar />
                    <LogoImage />
                    <ButtonRegister />
                    <ButtonLogin />
                </div>
            </div>
            <div className="line"></div>
            </React.Fragment>
        );
    }
};