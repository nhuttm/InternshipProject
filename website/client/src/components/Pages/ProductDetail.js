import React from 'react';
import { connect } from 'react-redux';
import ProductImage from '../Image/ProductImage';
import Label from '../Label/Label';
import Size from '../Filter/DropDownSize';
import Color from '../Filter/DropDownColor';
import NumberPicker from '../NumberPicker/NumberPicker';
import Button from '../Button/Button';
import StarRatings from 'react-star-ratings';
import CommentBox from '../CommentBox/CommentBox';
import CommentUser from '../CommentBox/CommentUser';
import Pagination from '../Pagination/Pagination';
import HintImage from '../Image/HintImage';
import { getClothesWithIdRequest } from '../../actions/clothesAction';
import queryString from 'query-string';

class ProductDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            quantity: 0,
            color: '',
            size: '',
            pageNumber: 1
        }
    }

    componentDidMount = () => {
        this.props.getClothesWithId(this.props.match.params.id);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.search != this.props.location.search){
            const values = queryString.parse(this.props.location.search);
            const pageNumber = values.pageNumber || 1;
            this.setState({pageNumber});
        }
    }

    handlePlusQuantity = (e) => {
        e.preventDefault();
        let quantity = this.state.quantity + 1;
        this.setState({ quantity });
    }

    handleMinusQuantity = (e) => {
        e.preventDefault();
        let quantity = this.state.quantity - 1;
        if (quantity >= 0)
            this.setState({ quantity });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAddToCart = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        console.log(this.props.cloth);
        return (
            <div className="container-fluid" style={{ paddingTop: 50 }}>
                {
                    this.props.cloth ? <React.Fragment>
                         <div className="row">
                    <div className="col-md-2">
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[0]}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[1]}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[2]}></ProductImage>
                        </div>
                        <div className="row thumb-left">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[3]}></ProductImage>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ProductImage className="product-img" imgSrc={this.props.cloth.img[0]}></ProductImage>
                    </div>
                    <div className="col-md-4">
                        <div class="row">
                            <Label className="product-name" title={this.props.cloth.name} />
                        </div>
                        <div className="row">
                            <Label className="product-price" title={this.props.cloth.price} />
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <div className="col-md-5" style={{marginLeft: -17, marginTop: 7}}>
                            <StarRatings
                                rating={this.props.cloth.rating}
                                starRatedColor="yellow"
                                numberOfStars={5}
                                name='rating'
                                starDimension={15}
                            />
                            </div>
                            <div className="col-md-7">
                                <div className="row" style={{height: '100%'}}>
                                    <div className="line" style={{marginLeft: -30, marginTop: 7}}></div>
                                    <div className="col-md-4" style={{marginTop: 10}}>
                                        <Label title={this.props.cloth.ofArrayComment.length + " Reviews"} className="default-label"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <Label className="size-label" title="Size" />
                        </div>
                        <div className="row" style={{ paddingTop: 5 }}>
                            <Size onChange={e => this.handleChange(e)}/>
                        </div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <Label className="color-label" title="Color" />
                        </div>
                        <div className="row" style={{ paddingTop: 10 }}>
                            <Color onChange={e => this.handleChange(e)}/>
                        </div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <Label title="Quantity" className="product-quantity" />
                            <NumberPicker quantity={this.state.quantity} plusQuantity={e => this.handlePlusQuantity(e)} minusQuantity={e=> this.handleMinusQuantity(e)} />
                        </div>
                        <div className="row" style={{ paddingTop: 40 }}>
                            <Button type="submit" title="Add to cart" className="bttn-cart" onButtonClick={e => this.handleAddToCart(e)}/>
                        </div>
                        </form>
                        <div className="row line" style={{ marginTop: 20 }}></div>
                        <div className="row" style={{ paddingTop: 20 }}>
                            <p className="detail-label">{this.props.cloth.detail}</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="row">
                            <Label title="More from" className="default-label" />
                        </div>
                        <div className="row">
                            <Label title={this.props.cloth.brand} className="brand-label" />
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[0]}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[1]}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[2]}></ProductImage>
                        </div>
                        <div className="row thumb-right">
                            <ProductImage className="thumb-img" imgSrc={this.props.cloth.img[3]}></ProductImage>
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
                                pageNumber={this.state.pageNumber}
                                totalPages={Math.ceil(this.props.cloth.ofArrayComment.length/4)}
                                pathName={"/products/" + this.props.cloth._id}
                                searchLeft={"?pageNumber=" + (Number.parseInt(this.state.pageNumber) - 1)}
                                searchRight={"?pageNumber=" + (Number.parseInt(this.state.pageNumber) + 1)} />
                        </div>
                        {
                            this.props.cloth.ofArrayComment.filter((item,index) => index < this.state.pageNumber*4 && index >= (this.state.pageNumber-1)*4).map(item => {
                                return (<div className="row" style={{ paddingBottom: 20 }}>
                            <div className="col-md-2">
                                <CommentUser name={item.username} date={item.date} />
                            </div>
                            <div className="col-md-10">
                                <CommentBox rating={item.rating} title={item.title} content={item.content} />
                            </div>
                        </div>)
                           })
                        }
                        <div className="row" style={{ paddingBottom: 20, paddingLeft: 1000 }}>
                            <Pagination classNames="comment-paging"
                                pageNumber={this.state.pageNumber}
                                totalPages={Math.ceil(this.props.cloth.ofArrayComment.length/4)}
                                pathName={"/products/" + this.props.cloth._id}
                                searchLeft={"?pageNumber=" + (Number.parseInt(this.state.pageNumber) - 1)}
                                searchRight={"?pageNumber=" + (Number.parseInt(this.state.pageNumber) + 1)} />
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
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[0]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[1]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[2]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[3]}/>

                                    </div>
                                </div>
                                
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[0]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[1]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[2]}/>

                                    </div>
                                    <div className="col-md-3">
                                    <HintImage title="Collete Stretch Linen Minidress" imgSrc={this.props.cloth.img[3]}/>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                    </React.Fragment> : null

                }
                
               
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cloth: state.clothesReducer.cloth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getClothesWithId: id =>{
            dispatch(getClothesWithIdRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);