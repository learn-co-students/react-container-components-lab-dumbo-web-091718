import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'+ `api-key=${NYT_API_KEY}`;

const reviews_Url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=black&api-key=f98593a095b44546bf4073744b540da0s"


 class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }
  
  handleSearch = (e) => {
   this.setState({
    [e.target.name]: e.target.value
   })
  }

  handleClick = (e) => {
    e.preventDefault();
    //this.props.fetchSearchTerm(this.state.searchInput);
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=f98593a095b44546bf4073744b540da0`)
    .then(res => res.json())
    .then(res => this.setState({
      reviews: res.results
    }))    
  }

  render() {
    return (
      <div className="searchable-movie-reviews" >
        <form onSubmit={this.handleClick}>
          <input type="text" name="searchTerm" value={this.state.searchInput} onChange={(e) => this.handleSearch(e)}/> 
          <button> Search Movies</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
export default SearchableMovieReviewsContainer;
