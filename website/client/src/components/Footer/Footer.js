import React from 'react';
import LogoImage from '../Image/LogoImage';
import AnchorList from './AnchorList';
import Anchor from '../Anchor/Anchor';
import './Footer.scss';

export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid" style={{ paddingTop: 50 }}>
                    <div className="row line"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3" style={{ paddingTop: 20 }}>
                            <LogoImage className="footer-logo"/>
                        </div>
                        <div className="col-md-6">
                            <AnchorList className="main-footer" />
                        </div>
                        <div className="col-md-3">

                        </div>
                    </div>
                    <div className="row">
                        <div className="container">
                            <div className="row line"></div>
                            <div className="row">
                                <div className="col-md-8">
                                    <AnchorList className="sub-footer" />
                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Anchor link="#" title="Privacy Policy" className="privacy-anchor" />
                                        </div>
                                        <div className="col-md-6">
                                            <Anchor link="#" title="Terms and Conditions" className="term-anchor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}