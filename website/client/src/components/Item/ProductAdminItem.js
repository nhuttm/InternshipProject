import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import exportImg from '../export.png';
import Button from '../Button/Button';

export default class ProductAdminItem extends Component {

    showCategory = () => {
        const listCategory = [...this.props.product.ofArrayCategory];
        let categories = "";

        if (listCategory.length === 0) {
            return categories
        }
        else{
            categories = listCategory[0].name;
        }
        for (let index = 1; index < listCategory.length; index++) {
            const element = listCategory[index];
            categories += ", " + element.name;
        }

        return categories;
    }

    render() {
        return (
            <>
                 <div className="product-item-admin">
                        <div className="product-field">
                            <Image src={this.props.product.img[0]}
                                as='img'
                                className="item-img"
                            />
                            <div className="wrapped-detail">
                                <Label className="title-product" title={this.props.product.name} />
                                <Label className="category-product" title={this.showCategory()} />
                            </div>
                        </div>
                        <div className="sold-field">
                            <Label className="sold-product" title={"0/"+this.props.product.quantity} />
                        </div>
                        <div className="date-field">
                            <Label className="date-product" title={this.props.product.dateAdd} />
                        </div>
                        <div className="profit-field">
                            <Label className="profit-product" title="0" />
                        </div>
                        <div className="action-field">
                            <a className="action-product">Actions
                                <div className="dropdown-action">
                                    <Button className="edit-bttn" title="Edit"/>
                                    <Button className="remove-bttn" title="Remove"/>
                                </div>
                            </a>
                        </div>
                    </div>
            </>
        )
    }
}
