import React from 'react';
import { connect } from 'react-redux';
import { getAllClothesRequest } from '../../../actions/clothesAction';
import queryString from 'query-string';
import SelectBox from '../../SelectBox/SelectBox';
import Label from '../../Label/Label';
import SearchBar from '../../SearchBar/SearchBar';
import Button from '../../Button/Button';
import exportImg from '../../export.png';
import ProductAdminItem from '../../Item/ProductAdminItem';
import { Pagination } from 'semantic-ui-react'

class AdminProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            options: [{
                key: 'Popularity',
                text: 'Popularity',
                value: 'Popularity',
            },
            {
                key: 'NameAZ',
                text: 'Name: A-Z',
                value: 'NameAZ',
            },
            {
                key: 'Price1',
                text: 'Price: lowest to highest',
                value: 'Price1',
            },
            {
                key: 'Price2',
                text: 'Price: highest to lowest',
                value: 'Price2',
            }]
        }
    }

    componentDidMount = () => {
        const values = queryString.parse(this.props.location.search);
        const pageNumber = values.pageNumber || 1;
        this.props.getAllClothes(pageNumber);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.search != this.props.location.search) {
            const values = queryString.parse(this.props.location.search);
            const pageNumber = values.pageNumber || 1;
            this.props.getAllClothes(pageNumber);
        }

    }

    render() {
        return (
            <>
                <div className="wrapped-top-products">
                    <div className="wrapped-sortBy">
                        <Label title="SORT BY" className="sortBy" />
                        <SelectBox options={this.state.options} />
                    </div>
                    <div className="wrapped-form">
                        <SearchBar classNameSearch="form-search-admin" />
                        <Button title="+ Add product" className="add-product-admin" />
                        <div className="wrapped-export">
                            <Button title="Export" className='export-bttn' />
                            <img src={exportImg} className="img-export" />
                        </div>
                    </div>
                </div>

                <div className="main-product-admin">
                    <div className="title--field">
                        <Label title="PRODUCTS" className="content-title-field-product" />
                        <Label title="SOLD" className="content-title-field" />
                        <Label title="DATE ADDED" className="content-title-field" />
                        <Label title="PROFIT" className="content-title-field" />
                        <Label title="" className="content-title-field" />
                    </div>
                    <div className="line"></div>
                    <ProductAdminItem />
                    <ProductAdminItem />
                    <ProductAdminItem />
                    <ProductAdminItem />
                    <ProductAdminItem />
                    <ProductAdminItem />
                    <div className="footer-product-admin">
                        <Label className="entries-product" title="Show 1 to 10 of 123 entries"/>
                        <Pagination className="pagination-admin" defaultActivePage={5} totalPages={10}/>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    console.log(state);
    return {
        clothes: state.clothesReducer.clothes,
        totalPages: state.clothesReducer.totalPages,
        pageNumber: state.clothesReducer.pageNumber
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllClothes: (pageNumber) => {
            dispatch(getAllClothesRequest(pageNumber));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);