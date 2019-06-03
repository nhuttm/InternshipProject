import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';

import "./App.scss";
import { getAllClothesRequest } from '../actions/clothesAction';
import ProductItem from './ProductItem/ProductItem';

class Products extends React.Component {

    componentDidMount = () => {
        this.props.getAllClothes();
    }

    render() {
        console.log(this.props.clothes.length);
        return (
            <React.Fragment>
                    <HeaderBar />
                    <NavBar />
                    <div class="container-fluid">
                        <div class="row">
                        {
                        this.props.clothes.length != 0 ? this.props.clothes.map((item, index) => {
                            return (
                                <div class="col-md-2 container-item">
                                    <ProductItem key={item._id} id={item._id} imgSrc={item.img} title={item.name} price={item.price}/>
                                </div>)
                        }) : null
                    }
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        clothes: state
    }
}

const mapDispatchToProps = (dispatch, props) => {
return {
    getAllClothes: () => {
        dispatch(getAllClothesRequest());
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);