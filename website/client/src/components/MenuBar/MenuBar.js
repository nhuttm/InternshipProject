import React from 'react';
import { connect } from 'react-redux';
import { getAllCategoriesRequest } from '../../actions/categoryAction';
import { BrowserRouter, Link } from 'react-router-dom';
import Label from '../Label/Label';

class MenuBar extends React.Component {

    componentDidMount = () => {
        this.props.getAllCategories();
    }

    render() {
        return (
            <BrowserRouter>
            <div class="row">
                <Label title="Category" className="default" />
            </div>
                {
                    this.props.categories.length != 0 ? this.props.categories.map(item => {
                        return (
                            <div class="row">
                                 <Link to={"/" + item.name} >{item.name}</Link>
                            </div>)
                    }) : null
                }
            </BrowserRouter>
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