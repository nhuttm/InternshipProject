import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import LogoImage from '../Image/LogoImage';
import './HeaderBar.scss';
import AuthenBar from './AuthenBar';
import IconHeadbar from './IconHeadbar';

class HeaderBar extends React.Component {
    
    componentDidMount = () => {
        document.body.className = "user-body";
    }
    render() {
        return (
            <React.Fragment>
                <div className="container header-bar">
                    <div className="row" style={{ height: 100 }}>
                    <div className="col-md-3" style={{margin: 'auto', textAlign: 'center'}}>
                        <SearchBar classNameSearch="form-search"/>
                    </div>
                        <div className="col-md-5" style={{margin: 'auto', textAlign: 'center'}}>
                            <LogoImage className="main-logo"/>
                        </div>
                        <AuthenBar />
                        <div className="col-md-1" style={{margin: 'auto', textAlign: 'center'}}>
                            <IconHeadbar number={this.props.numberProduct} link="/checkout/cart" classNameLink="cart" classNameLabel="number-cart"/>
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