import React from 'react';
import { connect } from 'react-redux';
import { getAllClothesRequest } from '../../../actions/clothesAction';
import queryString from 'query-string';

class AdminProducts extends React.Component {

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
           <div className="container-fluid">
           </div>
        )
    }

}

const mapStateToProps = state => {
    console.log(state);
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);