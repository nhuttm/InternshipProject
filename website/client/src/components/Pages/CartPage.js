import React from 'react';
import Label from '../Label/Label';
import { connect } from 'react-redux';
import CartItem from '../Item/CartItem';
import TotalBox from '../Box/TotalBox/TotalBox';

class CartPage extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Label className="my-bag" title="My Bag"/>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3 wrapped-cart-label" style={{textAlign: "left"}}>
                                <Label className="cart-label" title="Product"/>
                            </div>
                            <div className="col-md-2 wrapped-cart-label">
                                <Label className="cart-label" title="Color"/>
            
                            </div>
                            <div className="col-md-2 wrapped-cart-label">
                            <Label className="cart-label" title="Size"/>

                            </div>
                            <div className="col-md-3 wrapped-cart-label">
                            <Label className="cart-label" title="Quantity"/>

                            </div>
                            <div className="col-md-2 wrapped-cart-label">
                            <Label className="cart-label" title="Amount"/>
                            </div>
                        </div>
                        <div className="row line"></div>
                        {
                            this.props.productList.length != 0 ? this.props.productList.map((item, index) => {
                                return (
                                    <>
                                    <div className="row">
                                    <CartItem key={item.config.quantity} index={index} product={item.product} config={item.config}/>
                                    </div>
                                    <div className="row line"></div>
                                    </>
                                )
                            }): null
                        }
                    </div>
                    <div className="col-md-3">
                        <div className="row wrapped-cart-label" style={{marginLeft: 20}}>
                            <Label className="cart-label" title="Total"/>
                        </div>
                        <div className="row" style={{marginLeft: 20}}>
                            <TotalBox total={this.props.total} subtotal={this.props.total}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        total: state.cartReducer.total,
        productList: state.cartReducer.productList
    }
}

export default connect(mapStateToProps, null)(CartPage);