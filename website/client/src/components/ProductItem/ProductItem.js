import React from 'react';
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import Anchor from '../Anchor/Anchor';
import "./ProductItem.scss";

export default class ProductItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Image src={'http://localhost:2000' + this.props.imgSrc}
                    as='img'
                    size='large'
                    className="product-img"
                    centered
                    style={{ width: 180, height: 269, paddingTop: 20, objectFit: 'cover' }} />
                <Label title={this.props.title} className="name-product" />
                <Label title={this.props.price} className="price-product" />
                <Anchor title="+Quick shop" link={"/products/" + this.props.id} className="quick-shop"/>
            </React.Fragment>
        )
    }
}