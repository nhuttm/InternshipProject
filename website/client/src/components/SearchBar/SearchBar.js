import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SearchBar.scss";

class SearchBar extends React.Component {

    constructor(){
        super();
        this.state = {
            searchQuery: null,
            style: {
                margin: "auto",
                textAlign: "center"
            }
        };
    }

    handleSearch = event => {

    }

    handleChangeInputField = event => {
        this.setState = ({searchQuery: event.target.value});
    }

    render () {
        return (
            <div className="col-md-3" style={this.state.style}>
                <div className="row">
                <form className="form-search" onSubmit={event => this.handleSearch(event)} method="post">
                    <input type="text" className="search-input" placeholder="Search" onChange={event => this.handleChangeInputField(event)} value={this.state.searchQuery} ></input>
                    <button type="submit" className="search-button"><FontAwesomeIcon icon="search"/></button>
                </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;