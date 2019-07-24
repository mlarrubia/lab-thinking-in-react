import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input placeholder="Enter a Search Term" onChange={this.props.theFilter}/>
            </div>
        )
    }
}

export default SearchBar;
