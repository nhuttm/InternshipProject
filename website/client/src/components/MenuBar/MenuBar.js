import React from 'react';
import { connect } from 'react-redux';
import { getAllCategoriesRequest } from '../../actions/categoryAction';
import Label from '../Label/Label';
import Anchor from '../Anchor/Anchor';

class MenuBar extends React.Component {

    componentDidMount = () => {
        this.props.getAllCategories();
    }

    render() {
        return (
            <React.Fragment>
                <div class="row">
                <Label title="Category" className="category-title" />
            </div>
                {
                    this.props.categories.length != 0 ? this.props.categories.map(item => {
                        return (
                            <div class="row">
                                 <Anchor link={"/products?pageNumber=2"} title={item.name} className="menu-item"/>
                            </div>)
                    }) : null
                }
            </React.Fragment>
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