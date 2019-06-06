import React from 'react';
import MenuBar from '../components/MenuBar/MenuBar';
import "./App.scss";
import ProductItem from './ProductItem/ProductItem';
import SelectBox from './SelectBox/SelectBox';
import Pagination from './Pagination/Pagination';
import { connect } from 'react-redux';
import { getAllClothesRequest } from '../actions/clothesAction';
import queryString from 'query-string';

class Products extends React.Component {

    componentDidMount = () => {
        const values = queryString.parse(this.props.location.search);
        const pageNumber = values.pageNumber || 1;
        this.props.getAllClothes(pageNumber);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.search != this.props.location.search){
            const values = queryString.parse(this.props.location.search);
            const pageNumber = values.pageNumber || 1;
            this.props.getAllClothes(pageNumber);
        }

    }

    render() {
        return (
            <React.Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <MenuBar />
                            </div>
                            <div className="col-md-10">
                                <div className="row" style={{ paddingLeft: 13, paddingTop: 20 }}>
                                    <SelectBox classNames="col-md-9" />
                                    <Pagination classNames="col-md-3"
                                        pageNumber={this.props.pageNumber}
                                        totalPages={this.props.totalPages}
                                        pathName="/products"
                                        searchLeft={"?pageNumber=" + (Number.parseInt(this.props.pageNumber) - 1)}
                                        searchRight={"?pageNumber=" + (Number.parseInt(this.props.pageNumber) + 1)} />
                                </div>
                                <div className="row">
                                    {
                                        this.props.clothes.length != 0 ? this.props.clothes.map((item, index) => {
                                            return (
                                                <div className="container-item" key={item._id}>
                                                    <ProductItem key={item._id} id={item._id} imgSrc={item.img} title={item.name} price={item.price} />
                                                </div>)
                                        }) : null
                                    }
                                </div>                    
                            </div>
                        </div>
                        <Pagination classNames="container-fluid pagination-bottom"
                            pageNumber={this.props.pageNumber}
                            totalPages={this.props.totalPages}
                            pathName="/products"
                            searchLeft={"?pageNumber=" + (Number.parseInt(this.props.pageNumber) - 1)}
                            searchRight={"?pageNumber=" + (Number.parseInt(this.props.pageNumber) + 1)} />
                    </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);