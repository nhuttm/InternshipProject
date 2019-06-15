import React from 'react';
import { connect } from 'react-redux';
import { getAllClothesRequestAdmin } from '../../../actions/adminAction';
import queryString from 'query-string';
import SelectBox from '../../SelectBox/SelectBox';
import Label from '../../Label/Label';
import SearchBar from '../../SearchBar/SearchBar';
import Button from '../../Button/Button';
import exportImg from '../../export.png';
import ProductAdminItem from '../../Item/ProductAdminItem';
import { Pagination } from 'semantic-ui-react'
import { optionsPage, optionsSortBy } from '../../../constant/options';

class AdminProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            pageLimit: 10
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

    handleChangePage = () => {
        
    }

    render() {
        return (
            <>
                <div className="wrapped-top-products">
                    <div className="wrapped-sortBy">
                        <Label title="SORT BY" className="sortBy" />
                        <SelectBox className="wrapped-select" classNameSelect="select-sortby-admin" options={optionsSortBy} />
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
                        <div className="option-paging">
                            <SelectBox onChange={this.handleChangePage} options={optionsPage} className="wrapped-selectpage" classNameSelect="select-page"/>
                            <Pagination className="pagination-admin" defaultActivePage={5} totalPages={10}/>
                        </div>
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
        getAllClothes: (pageNumber, pageLimit) => {
            dispatch(getAllClothesRequestAdmin(pageNumber, pageLimit));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);