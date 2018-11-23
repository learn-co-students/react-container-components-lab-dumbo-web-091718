import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer'




const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()
    this.state ={
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=f98593a095b44546bf4073744b540da0`)
    .then(res => res.json())
    .then(res => this.setState({
      reviews: res.results
    }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <SearchableMovieReviewsContainer fetchSearchTerm={this.fetchSearchInput}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer;