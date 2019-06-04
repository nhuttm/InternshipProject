import React from 'react';
import HeaderBar from './HeaderBar/HeaderBar';
import NavBar from './NavBar/NavBar';
import { connect } from 'react-redux';
import MenuBar from '../components/MenuBar/MenuBar';
import "./App.scss";
import { getAllClothesRequest } from '../actions/clothesAction';
import ProductItem from './ProductItem/ProductItem';

class Products extends React.Component {

    componentDidMount = () => {
        this.props.getAllClothes();
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
                        <div className="row">
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
                    </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        clothes: state.clothesReducer.clothes
    }
}

const mapDispatchToProps = dispatch => {
return {
    getAllClothes: () => {
        dispatch(getAllClothesRequest());
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);