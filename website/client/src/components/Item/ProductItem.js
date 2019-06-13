import React from 'react';
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import { Link } from 'react-router-dom';
import "./Item.scss";

export default class ProductItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div style={{width: 180, height: 269, overflow: 'hidden'}}>
                <Image src={this.props.imgSrc}
                    as='img'
                    size='large'
                    className="product-img"
                    centered
                    style={{ width: 180, height: 269, objectFit: 'cover' }} />
                </div>
                <Label title={this.props.title} className="name-product" />
                <Label title={this.props.price} className="price-product" />
                <Link to={{ pathname: "/products/" + this.props.id}} className="quick-shop">+Quick shop</Link>
            </React.Fragment>
        )
    }
}