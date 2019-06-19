import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import ProductItem from '../Item/ProductItem';
import SelectBox from '../SelectBox/SelectBox';
import Pagination from '../Pagination/Pagination';
import { connect } from 'react-redux';
import { getAllClothesRequest } from '../../actions/clothesAction';
import queryString from 'query-string';
import { optionsSortBy } from '../../constant/options';

class Products extends React.Component {

    constructor(){
        super();
        this.state = {
            category: 'all'
        }
    }
    componentDidMount = () => {
        const values = queryString.parse(this.props.location.search);
        const pageNumber = values.pageNumber || 1;
        this.props.getAllClothes(pageNumber, 'all');
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.location.search != this.props.location.search){
            const values = queryString.parse(this.props.location.search);
            const pageNumber = values.pageNumber || 1;
            const category = values.category || this.state.category;
            this.props.getAllClothes(pageNumber, category);
            this.setState({pageNumber, category});
        }
    }

    render() {
        return (
            <React.Fragment>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2">
                                <MenuBar selected={this.state.category}/>
                            </div>
                            <div className="col-md-10">
                                <div className="row" style={{ paddingLeft: 13, paddingTop: 20 }}>
                                    <SelectBox className="col-md-9" classNameSelect="select-box" options={optionsSortBy} defaultValue={optionsSortBy[0]}/>
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
                                                <div className="container-item">
                                                    <ProductItem key={index} id={item._id} imgSrc={item.img[0]} title={item.name} price={item.price} />
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
        getAllClothes: (pageNumber, category) => {
            dispatch(getAllClothesRequest(pageNumber, category));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);