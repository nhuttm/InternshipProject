import React from 'react';
import Label from '../Label/Label';
import { connect } from 'react-redux';
import "./Item.scss";
import NumberPicker from '../NumberPicker/NumberPicker';
import Button from '../Button/Button';
import { increaseQuantityProduct, decreaseQuantityProduct } from '../../actions/cartAction';

class CartItem extends React.Component {

    handlePlusQuantity = async (e) => {
        e.preventDefault();
        await this.props.increaseQuantityProduct(this.props.index);
    }

    handleMinusQuantity = async (e) => {
        e.preventDefault();
        if (this.props.config.quantity === 0)
            return;
        await this.props.decreaseQuantityProduct(this.props.index);
    }

    render() {
        return (
            <>
                <div className="col-md-3" style={{height: '100%'}}>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.props.product.img[0]}
                                className="cart-img"
                                />
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <Label className="product-label" title={this.props.product.name}/>
                            </div>
                            <div className="row" style={{position: 'relative'}}>
                                <div className="col-md-6">
                                <Button className="bttnmodify-cart" title="Change"/>

                                </div>
                                <div className="col-md-6">
                                <Button className="bttnmodify-cart" title="Remove"/>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-2" style={{textAlign: 'center', margin: 'auto'}}>
                    <Label className={this.props.config.color + " cart-color"}></Label>
                </div>
                <div className="col-md-2" style={{textAlign: 'center', margin: 'auto'}}>
                    <Label className="cart-size" title={this.props.config.size}/>
                </div>
                <div className="col-md-3 wrapped-picker">
                    <NumberPicker quantity={this.props.config.quantity} plusQuantity={e => this.handlePlusQuantity(e)} minusQuantity={e=> this.handleMinusQuantity(e)} />
                </div>
                <div className="col-md-2" style={{textAlign: 'center', margin: 'auto'}}>
                    <Label className="price-product-cart" title={this.props.product.price*this.props.config.quantity}/>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseQuantityProduct: (index) => {
            dispatch(increaseQuantityProduct(index));
        },
        decreaseQuantityProduct: (index) => {
            dispatch(decreaseQuantityProduct(index));
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);