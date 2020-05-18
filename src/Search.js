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
            this.setState({ meals: jsonData.meals });
            console.log(jsonData.meals);
        });
    };


    render() {
        return (
          <div id="main">
            <h1>Welcome to the meal search app</h1>
            <input
              name="text"
              type="text"
              placeholder="Search"
              onChange={event => this.handleOnChange(event)}
              value={this.state.searchValue}
            />
            <button onClick={this.handleSearch}>Search</button>
            {this.state.meals ? (
              <div id="meals-container">
                {this.state.meals.map((meal, index) => (
                  <div class="single-meal" key={index}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt="meal-thumbnail" />
                  </div>
                ))}
              </div>
            ) : (
              <p>Try searching for a meal</p>
            )}
          </div>
        );
      }
    }

export default Search;