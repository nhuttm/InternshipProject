import React from 'react';
import { connect } from 'react-redux';
import ProductImage from './Image/ProductImage';
import logo from '../components/shopping.jpg';
import Label from './Label/Label';
import Size from './Filter/DropDownSize';
import Color from './Filter/DropDownColor';
import NumberPicker from './NumberPicker/NumberPicker';
import Button from './Button/Button';
import StarRatings from 'react-star-ratings';

class ProductDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            quantity: 0
        }
    }

    handlePlusQuantity = () => {
        console.log('run');
        let quantity = this.state.quantity + 1;
        this.setState({ quantity });
    }

    handleMinusQuantity = () => {
        let quantity = this.state.quantity - 1;
        if (quantity >= 0)
            this.setState({ quantity });
    }

    changeRating = () => {

    }

    render() {
        return (
            <div className="container-fluid" style={{ paddingTop: 50 }}>
                <div className="row">
                    <div className="col-md-2">
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ProductImage className="product-img" imgSrc={logo}></ProductImage>
                    </div>
                    <div className="col-md-4">
                        <div class="row">
                            <Label className="product-name" title="Collete Stretch Linen Minidress" />
                        </div>
                        <div className="row">
                            <Label className="product-price" title="$69.00" />
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <StarRatings
                                rating={4}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name='rating'
                                starDimension={20}
                            />
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <Label className="size-label" title="Size" />
                        </div>
                        <div className="row" style={{ paddingTop: 5 }}>
                            <Size />
                        </div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <Label className="color-label" title="Color" />
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <Color />
                        </div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <Label title="Quantity" className="product-quantity" />
                            <NumberPicker quantity={this.state.quantity} plusQuantity={this.handlePlusQuantity} minusQuantity={this.handleMinusQuantity} />
                        </div>
                        <div className="row" style={{ paddingTop: 40 }}>
                            <Button title="Add to cart" className="bttn-cart" />
                        </div>
                        <div className="row line" style={{ marginTop: 20 }}></div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <Label className="color-label" title="Model wearing size S" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <Label title="More from" className="default-label" />
                        </div>
                        <div className="row">
                            <Label title="Zara" className="default-label" />
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={logo}></ProductImage>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        )
    }
}

export default ProductDetail;