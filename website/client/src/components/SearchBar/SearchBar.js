import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./SearchBar.scss";

class SearchBar extends React.Component {

    constructor(){
        super();
        this.state = {
            searchQuery: null
        };
    }

    handleSearch = event => {

    }

    handleChangeInputField = event => {
        this.setState = ({searchQuery: event.target.value});
    }

    render () {
        return (
                <div className="row">
                <form className={this.props.classNameSearch} onSubmit={event => this.handleSearch(event)} method="post">
                    <input type="text" className="search-input" placeholder="Search" onChange={event => this.handleChangeInputField(event)} value={this.state.searchQuery} ></input>
                    <button type="submit" className="search-button"><FontAwesomeIcon icon="search"/></button>
                </form>
                </div>
        );
    }
}

export default SearchBar;