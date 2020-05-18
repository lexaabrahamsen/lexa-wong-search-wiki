import React, { Component } from "react";
import './Search.css';


class Search extends Component {
    state = {
        searchValue: '',
        searchTerms: []
    };
    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    // Search
    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    }

    // Make the API call
    makeApiCall = searchInput => {
        var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
        .then(response => {
        return response.json();
        })
        .then(jsonData => {
        console.log(jsonData.meals);
        });
    };


    render() {
        return (
            <div>
                <h1>Welcome to the meal search app</h1>
                <input 
                    name="text" 
                    type="text" 
                    placeholder="Search" 
                    onChange={event => this.handleOnChange(event)}
                    value ={this.state.searchvalue}
                />
                <button onClick={this.handleSearch}>Search</button>
            </div>
            );
    }

}
export default Search;