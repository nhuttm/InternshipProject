import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import './HeaderBar.scss';
import AuthenBar from './AuthenBar';
import Cart from './Cart';

class HeaderBar extends React.Component {

    componentDidMount

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
                            <Cart number={this.props.numberProduct}/>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        numberProduct: state.cartReducer.numberProduct
    }
}

export default connect(mapStateToProps, null)(HeaderBar);