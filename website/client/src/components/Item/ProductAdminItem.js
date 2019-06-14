import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import exportImg from '../export.png';
import Button from '../Button/Button';

export default class ProductAdminItem extends Component {
    render() {
        return (
            <>
                 <div className="product-item-admin">
                        <div className="product-field">
                            <Image src={exportImg}
                                as='img'
                                className="item-img"
                            />
                            <div className="wrapped-detail">
                                <Label className="title-product" title="dsddsadad" />
                                <Label className="category-product" title="dsddsadad" />
                            </div>
                        </div>
                        <div className="sold-field">
                            <Label className="sold-product" title="dsddsadad" />
                        </div>
                        <div className="date-field">
                            <Label className="date-product" title="dsddsadad" />
                        </div>
                        <div className="profit-field">
                            <Label className="profit-product" title="dsddsadad" />
                        </div>
                        <div className="action-field">
                            <button className="action-product">Actions
                                <div className="dropdown-action">
                                    <Button className='edit-bttn' title="Edit"/>
                                    <Button className='remove-bttn' title="Remove"/>
                                </div>
                            </button>
                        </div>
                    </div>
            </>
        )
    }
}
