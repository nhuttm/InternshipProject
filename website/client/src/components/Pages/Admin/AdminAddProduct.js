import React, { Component } from 'react'
import PreviewImage from '../../Image/PreviewImage';
import Label from '../../Label/Label';
import TextField from '../../Field/TextField';
import { connect } from 'react-redux';
import { setTitlePageAdmin, addProductIntoDBRequest } from '../../../actions/adminAction';
import { getAllCategoriesRequest } from '../../../actions/categoryAction';
import defaultImg from '../../defaultImg.png';
import * as Option from '../../../constant/options';
import MultiSelectBox from '../../SelectBox/MultiSelectBox';
import SelectBox from '../../SelectBox/SelectBox';
import Button from '../../Button/Button';

class AdminAddProduct extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            categories: [],
            brand: Option.optionsBrand[0],
            colors: [],
            description: '',
            sisez: [],
            price: '',
            quantity: '',
            img: Array.from({ length: 4 }, () => (defaultImg)),
            optionCategories: []
        }
    }

    componentDidMount = () => {
        this.props.setTitlePage('Add product');
        this.props.getAllCategories();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.categories != this.props.categories) {
            this.setOptionCategories(this.props.categories);
        }
    }

    setOptionCategories = (categories) => {
        let optionCategories = [];
        for (let index = 0; index < categories.length; index++) {
            const element = categories[index];
            optionCategories.push({
                label: element.name,
                value: element._id
            })
        }
        this.setState({ optionCategories });
    }

    handleImgChange = (e, index) => {
        if (e.target.files.length != 0) {
            let imgFile = URL.createObjectURL(e.target.files[0]);
            let img = [...this.state.img.slice(0, index), imgFile, ...this.state.img.slice(index + 1, this.state.img.length)];
            this.setState({ img });
        }
    }

    handleChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    handleChangeBrand = (data) => {
        this.setState({ brand: data.value });
    }

    handleChangeCategories = (data) => {
        if (data) {
            let categories = [];
            for (let index = 0; index < data.length; index++) {
                categories.push(data[index].value);
            }

            this.setState({ categories });
        }
    }

    handleChangeColor = (data) => {
        if (data) {
            let colors = [];
            for (let index = 0; index < data.length; index++) {
                colors.push(data[index].value);
            }

            this.setState({ colors });
        }
    }

    handleChangeDescription = (e) => {
        this.setState({ description: e.target.value });

    }

    handleChangePrice = (e) => {
        this.setState({ price: e.target.value });

    }

    handleChangeQuantity = (e) => {
        this.setState({ quantity: e.target.value });

    }

    handleChangeSize = (data) => {
        if (data) {
            let sizes = [];
            for (let index = 0; index < data.length; index++) {
                sizes.push(data[index].value);
            }

            this.setState({ sizes });
        }
    }

    handleComplete = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('categories', this.state.categories);
        formData.append('brand', this.state.brand);
        formData.append('description', this.state.description);
        formData.append('sizes', this.state.sizes);
        formData.append('price', this.state.price);
        formData.append('quantity', this.state.quantity);
        formData.append('img', this.state.img);
        formData.append('colors', this.state.colors);

        this.props.addProductIntoDB(formData);
    }

    handleCancel = () => {

    }

    render() {
        return (
            <form className="add-product-page">
                <div className="wrapped-label">
                    <Label title="PHOTOS" className="title-label" />
                </div>
                <PreviewImage img={this.state.img} imgChange={this.handleImgChange} />
                <TextField title='NAME' classNameInput="input-name-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter name of product' name="name" value={this.state.name} onChange={e => this.handleChangeName(e)} />
                <div className="wrapped-label">
                    <Label title="CATEGORIES" className="title-label" />
                </div>
                {
                    this.state.optionCategories.length != 0 ? <MultiSelectBox onChange={this.handleChangeCategories} options={this.state.optionCategories} className="wrapped-selectpage" classNameSelect="select-multi" />
                        : null

                }
                <div className="wrapped-label">
                    <Label title="BRAND" className="title-label" />
                </div>
                <SelectBox onChange={this.handleChangeBrand} options={Option.optionsBrand} className="wrapped-selectpage" classNameSelect="select-page" defaultValue={Option.optionsBrand[0]} />
                <TextField title='PRICE' classNameInput="input-price-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter price of product' name="price" value={this.state.price} onChange={e => this.handleChangePrice(e)} />
                <div className="wrapped-label">
                    <Label title="SIZE" className="title-label" />
                </div>
                <MultiSelectBox onChange={this.handleChangeSize} options={Option.optionsSize} className="wrapped-selectpage" classNameSelect="select-multi" />
                <div className="wrapped-label">
                    <Label title="COLORS" className="title-label" />
                </div>
                <MultiSelectBox onChange={this.handleChangeColor} options={Option.optionsColor} className="wrapped-selectpage" classNameSelect="select-multi" />

                <TextField title='QUANTITY' classNameInput="input-quantity-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter quantity of product' name="quantity" value={this.state.quantity} onChange={e => this.handleChangeQuantity(e)} />
                <TextField title='DESCRIPTION' classNameInput="input-description-field" classNameLabel="title-label" wrappedLabel="wrapped-label" placeholder='Enter description of product' name="description" value={this.state.description} onChange={e => this.handleChangeDescription(e)} />

                <div className="grouped-bttn">
                    <Button onButtonClick={this.handleCancel} className="cancel-bttn" title="Cancel" />
                    <Button onButtonClick={this.handleComplete} className="complete-bttn" title="Complete" type="submit" />
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitlePage: title => {
            dispatch(setTitlePageAdmin(title));
        },
        getAllCategories: () => {
            dispatch(getAllCategoriesRequest());
        },
        addProductIntoDB: (product) => {
            dispatch(addProductIntoDBRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminAddProduct);