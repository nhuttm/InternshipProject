import React from 'react';
import { connect } from 'react-redux';
import { getAllCategoriesRequest } from '../../actions/categoryAction';
import Label from '../Label/Label';
import Anchor from '../Anchor/Anchor';
import Filter from '../Filter/Filter';
import { Link } from 'react-router-dom';
class MenuBar extends React.Component {

    componentDidMount = () => {
        this.props.getAllCategories();
    }

    render() {
        console.log(this.props.selected)
        return (
            <>
                <div className="row">
                    <Label title="Category" className="category-title" />
                </div>
                <div className="row">
                     <Link to="/products?category=all" className={this.props.selected === 'all' ? "menu-item active-menu" : "menu-item"}>All dresses</Link>
                </div>
                {
                    this.props.categories.length != 0 ? this.props.categories.map(item => {
                        return (
                            <div className="row">
                                <Link to={"/products?category=" + item._id}className={this.props.selected == item._id ? "menu-item active-menu" : "menu-item"}>{item.name}</Link>
                            </div>)
                    }) : null
                }

                <div className="row">
                    <Label title="Filter" className="filter-title" />
                </div>
                <Filter />
                </>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categoriesReducer.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCategories: () => {
            dispatch(getAllCategoriesRequest());
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);