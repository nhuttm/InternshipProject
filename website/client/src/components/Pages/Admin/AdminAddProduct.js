import React, { Component } from 'react'
import PreviewImage from '../../Image/PreviewImage';
import Label from '../../Label/Label';
import TextField from '../../Field/TextField';
import { connect } from 'react-redux';
import { setTitlePageAdmin } from '../../../actions/adminAction';

import * as Option from '../../../constant/options';
import MultiSelectBox from '../../SelectBox/MultiSelectBox';
import SelectBox from '../../SelectBox/SelectBox';
import Button from '../../Button/Button';

class AdminAddProduct extends Component {

    constructor() {
        super();
        this.state = {
            name: ''
        }
    }

    componentDidMount = () => {
        this.props.setTitlePage('Add product');
    }

    handleChangeName = () => {

    }

    handleChangeBrand = () => {

    }

    handleChangeCategories = () => {

    }

    handleChangeColor = () => {

    }

    handleChangeDescription = () => {

    }

    handleChangePrice = () => {

    }

    handleChangeQuantity = () => {

    }

    handleChangeSize = () => {

    }

    handleComplete = () => {

    }

    handleCancel = () => {
        
    }

    render() {
        return (
            <div class="add-product-page">
                <div className="wrapped-label">
                <Label title="PHOTOS" className="title-label"/>
                </div>
                <PreviewImage />
                <TextField title='NAME' classNameInput="input-name-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter name of product' name="name" value={this.state.name} onChange={e => this.handleChangeName(e)} />
                <div className="wrapped-label">
                <Label title="CATEGORIES" className="title-label"/>
                </div>
                <MultiSelectBox onChange={this.handleChangeCategories} options={Option.optionsBrand} className="wrapped-selectpage" classNameSelect="select-multi" />
                <div className="wrapped-label">
                <Label title="BRAND" className="title-label"/>
                </div>
                <SelectBox onChange={this.handleChangeBrand} options={Option.optionsBrand} className="wrapped-selectpage" classNameSelect="select-page" defaultValue={Option.optionsBrand[0]} />
                <TextField title='PRICE' classNameInput="input-price-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter price of product' name="price" value={this.state.price} onChange={e => this.handleChangePrice(e)} />
                <div className="wrapped-label">
                <Label title="SIZE" className="title-label"/>
                </div>
                <MultiSelectBox onChange={this.handleChangeSize} options={Option.optionsSize} className="wrapped-selectpage" classNameSelect="select-multi" />
                <div className="wrapped-label">
                <Label title="COLORS" className="title-label"/>
                </div>
                <MultiSelectBox onChange={this.handleChangeColor} options={Option.optionsColor} className="wrapped-selectpage" classNameSelect="select-multi" />

                <TextField title='QUANTITY' classNameInput="input-quantity-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter quantity of product' name="quantity" value={this.state.quantity} onChange={e => this.handleChangeQuantity(e)} />
                <TextField title='DESCRIPTION' classNameInput="input-description-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter description of product' name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)} />

                <div className="grouped-bttn">
                    <Button onButtonClick={this.handleCancel} className="cancel-bttn" title="Cancel"/>
                    <Button onButtonClick={this.handleComplete} className="complete-bttn" title="Complete"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        clothes: state.adminReducer.clothes,
        totalPages: state.adminReducer.totalPages,
        pageNumber: state.adminReducer.pageNumber,
        totalEntry: state.adminReducer.totalEntry
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitlePage: title => {
            dispatch(setTitlePageAdmin(title));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProduct);