import React from 'react';
import { connect } from 'react-redux';
import { getAllClothesRequestAdmin, setTitlePageAdmin } from '../../../actions/adminAction';
import queryString from 'query-string';
import SelectBox from '../../SelectBox/SelectBox';
import Label from '../../Label/Label';
import SearchBar from '../../SearchBar/SearchBar';
import Button from '../../Button/Button';
import exportImg from '../../export.png';
import ProductAdminItem from '../../Item/ProductAdminItem';
import { withRouter } from 'react-router-dom';
import { Pagination } from 'semantic-ui-react'
import { optionsPage, optionsSortBy } from '../../../constant/options';

class AdminProducts extends React.Component {
    constructor() {
        super();
        this.state = {
            pageLimit: 10,
            activePage: 1
        }
    }

    componentDidMount = () => {
        this.props.getAllClothes(this.state.activePage, this.state.pageLimit);
        this.props.setTitlePage('Products');
    }

    handleChangePageLimit = (data) => {
        this.setState({pageLimit: data.value});
        this.props.getAllClothes(this.state.activePage, data.value);
    }

    handleChangePageNumber = (e, { activePage }) => {
        this.setState({activePage});
        this.props.getAllClothes(activePage, this.state.pageLimit);
    }

    reloadPage = () => {
        this.props.getAllClothes(this.state.activePage, this.state.pageLimit);
    }

    handleAddProduct = () => {
        this.props.history.push('/admin/addproduct');
    }

    render() {
        return (
            <div className="products-page">
                <div className="wrapped-top-products">
                    <div className="wrapped-sortBy">
                        <Label title="SORT BY" className="sortBy" />
                        <SelectBox className="wrapped-select" classNameSelect="select-sortby-admin" options={optionsSortBy} defaultValue={optionsSortBy[0]}/>
                    </div>
                    <div className="wrapped-form">
                        <SearchBar classNameSearch="form-search-admin" />
                        <Button title="+ Add product" className="add-product-admin" onButtonClick={this.handleAddProduct}/>
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
                    {
                        this.props.clothes.length != 0 ? this.props.clothes.map((item, index) => {
                            return (<ProductAdminItem key={item._id} product={item} reload={this.reloadPage}/>)
                        }) : null
                    }
                    <div className="footer-product-admin">
                        <Label className="entries-product" title={`Show ${this.state.pageLimit*(this.props.pageNumber-1)+1} to ${this.props.pageNumber != this.props.totalPages ? this.state.pageLimit*this.props.pageNumber : this.props.totalEntry} of ${this.props.totalEntry} entries`}/>
                        <div className="option-paging">
                            <SelectBox onChange={this.handleChangePageLimit} options={optionsPage} className="wrapped-selectpage" classNameSelect="select-page" defaultValue={optionsPage[0]}/>
                            <Pagination className="pagination-admin" defaultActivePage={1} totalPages={this.props.totalPages} onPageChange={this.handleChangePageNumber}/>
                        </div>
                    </div>
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
        getAllClothes: (pageNumber, pageLimit) => {
            dispatch(getAllClothesRequestAdmin(pageNumber, pageLimit));
        },
        setTitlePage: title => {
            dispatch(setTitlePageAdmin(title));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminProducts));