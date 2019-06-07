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
import CommentBox from './CommentBox/CommentBox';
import CommentUser from './CommentBox/CommentUser';
import Pagination from './Pagination/Pagination';
import HintImage from './Image/HintImage';

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
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="container">
                        <div className="row">
                            <div className="line" style={{ height: 2, width: 100, marginTop: 10 }}></div>
                            <Label title="Reviews" className="label-review" />
                            <div className="line" style={{ height: 2, width: '85%', marginTop: 10 }}></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="container">
                        <div className="row" style={{ paddingBottom: 20, paddingLeft: 1000 }}>
                            <Pagination classNames="comment-paging"
                                pageNumber={1}
                                totalPages={7}
                                pathName="/products"
                                searchLeft={"#"}
                                searchRight={"#"} />
                        </div>
                        <div className="row" style={{ paddingBottom: 20 }}>
                            <div className="col-md-2">
                                <CommentUser name="Julia Ryan" date="31 Jul" />
                            </div>
                            <div className="col-md-10">
                                <CommentBox rating={4} title="Super cute in black" content="I love the vintage pattern of the black dress. I got a size 6 and it fits well without being too tight. I can't tell if it's tru to size because everything fits a bit differently from store to store and brand to brand. I'm 5'4 with a 34D chest and it hit about mid thigh, which I like. I also like the material and structured shape of the dress because it's easy to dress up or down." />
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: 20 }}>
                            <div className="col-md-2">
                                <CommentUser name="Julia Ryan" date="31 Jul" />
                            </div>
                            <div className="col-md-10">
                                <CommentBox rating={4} title="Super cute in black" content="I love the vintage pattern of the black dress. I got a size 6 and it fits well without being too tight. I can't tell if it's tru to size because everything fits a bit differently from store to store and brand to brand. I'm 5'4 with a 34D chest and it hit about mid thigh, which I like. I also like the material and structured shape of the dress because it's easy to dress up or down." />
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: 20 }}>
                            <div className="col-md-2">
                                <CommentUser name="Julia Ryan" date="31 Jul" />
                            </div>
                            <div className="col-md-10">
                                <CommentBox rating={4} title="Super cute in black" content="I love the vintage pattern of the black dress. I got a size 6 and it fits well without being too tight. I can't tell if it's tru to size because everything fits a bit differently from store to store and brand to brand. I'm 5'4 with a 34D chest and it hit about mid thigh, which I like. I also like the material and structured shape of the dress because it's easy to dress up or down." />
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: 20 }}>
                            <div className="col-md-2">
                                <CommentUser name="Julia Ryan" date="31 Jul" />
                            </div>
                            <div className="col-md-10">
                                <CommentBox rating={4} title="Super cute in black" content="I love the vintage pattern of the black dress. I got a size 6 and it fits well without being too tight. I can't tell if it's tru to size because everything fits a bit differently from store to store and brand to brand. I'm 5'4 with a 34D chest and it hit about mid thigh, which I like. I also like the material and structured shape of the dress because it's easy to dress up or down." />
                            </div>
                        </div>
                        <div className="row" style={{ paddingBottom: 20, paddingLeft: 1000 }}>
                            <Pagination classNames="comment-paging"
                                pageNumber={1}
                                totalPages={7}
                                pathName="/products"
                                searchLeft={"#"}
                                searchRight={"#"} />
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginTop: 20 }}>
                    <div className="container">
                        <div className="row">
                            <div className="line" style={{ height: 2, width: 100, marginTop: 10 }}></div>
                            <Label title="You may also like" className="label-hint" />
                            <div className="line" style={{ height: 2, width: '78%', marginTop: 10 }}></div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={logo}/>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail;