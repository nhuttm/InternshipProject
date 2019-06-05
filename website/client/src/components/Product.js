import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar/MenuBar';
import "./App.scss";
import queryString from 'query-string';
import { getAllClothesRequest } from '../actions/clothesAction';
import ProductItem from './ProductItem/ProductItem';
import SelectBox from './SelectBox/SelectBox';
import  Pagination  from './Pagination/Pagination';

class Products extends React.Component {
    componentDidMount = () => {
        const values = queryString.parse(this.props.location.search);
        const pageNumber = values.pageNumber || 1;
        this.props.getAllClothes(pageNumber);
    }

    render() {
        console.log(this.props.clothes);
        return (
            <React.Fragment>
                    <HeaderBar />
                    <NavBar />
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-2">
                            <MenuBar />
                        </div>
                        <div className="col-md-10">
                        <div className="row" style={{paddingLeft: 13, paddingTop: 20}}>
                            <SelectBox classNames="col-md-9"/>
                            <Pagination classNames="col-md-3" 
                                pageNumber={this.props.pageNumber}
                                totalPages={this.props.totalPages}
                                leftAnchor={"/products?pageNumber=" + (Number.parseInt(this.props.pageNumber)-1)}
                                rightAnchor={"/products?pageNumber=" + (Number.parseInt(this.props.pageNumber)+1)}/>
                        </div>
                        <div className="row">
                        {
                        this.props.clothes.length != 0 ? this.props.clothes.map((item, index) => {
                            return (
                                <div className="container-item">
                                    <ProductItem key={item._id} id={item._id} imgSrc={item.img} title={item.name} price={item.price}/>
                                </div>)
                        }) : null
                    }
                        </div>
                        </div>
                        </div>
                        <Pagination classNames="container-fluid pagination-bottom" 
                                pageNumber={this.props.pageNumber}
                                totalPages={this.props.totalPages}
                                leftAnchor={"/products?pageNumber=" + (Number.parseInt(this.props.pageNumber)-1)}
                                rightAnchor={"/products?pageNumber=" + (Number.parseInt(this.props.pageNumber)+1)}/>
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