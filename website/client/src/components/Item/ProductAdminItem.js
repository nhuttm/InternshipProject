import React, { Component } from 'react'
import { Image } from 'semantic-ui-react';
import Label from '../Label/Label';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import { removeClothesWithIdRequestAdmin } from '../../actions/adminAction';

class ProductAdminItem extends Component {

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

    handleRemoveItem = async () => {
        await this.props.removeClothesWithId(this.props.product._id);

        this.props.reload();
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
                                    <Button className="remove-bttn" title="Remove" onButtonClick={this.handleRemoveItem}/>
                                </div>
                            </a>
                        </div>
                    </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeClothesWithId: (id) => {
            dispatch(removeClothesWithIdRequestAdmin(id));
        }
    }
}

export default connect(null, mapDispatchToProps)(ProductAdminItem);