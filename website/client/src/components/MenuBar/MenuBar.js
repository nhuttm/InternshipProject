import React from 'react';
import { connect } from 'react-redux';
import { getAllCategoriesRequest } from '../../actions/categoryAction';
import Label from '../Label/Label';
import Anchor from '../Anchor/Anchor';
import Filter from '../Filter/Filter';

class MenuBar extends React.Component {

    componentDidMount = () => {
        this.props.getAllCategories();
    }

    render() {
        return (
            <div style={{position: 'fixed'}}>
                <div className="row">
                    <Label title="Category" className="category-title" />
                </div>
                {
                    this.props.categories.length != 0 ? this.props.categories.map(item => {
                        return (
                            <div className="row">
                                <Anchor link={"/products?category=" + item._id} title={item.name} className="menu-item" />
                            </div>)
                    }) : null
                }

                <div className="row">
                    <Label title="Filter" className="filter-title" />
                </div>
                <Filter />
            </div>
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