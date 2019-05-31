import React from 'react';
import { connect } from 'react-redux';
import { getAllClothesRequest } from '../../actions/clothesAction';
class TableShowAllClothes extends React.Component{
    componentDidMount = () => {
        this.props.getAllClothes();
    }

    render() {
        return(
            <div className='container-fluid'>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Size</th>
                        <th>Price</th>
                    </tr>
                    {
                        this.props.clothes.length != 0 ? this.props.clothes.map(item => {
                            console.log('run loop');
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.size}</td>
                                    <td>{item.price}</td>
                                </tr>
                            );
                        }) : null
                    }
                </table>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(TableShowAllClothes);