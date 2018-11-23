// Code MovieReviews Here
import React, { Component } from 'react'



const MovieReviews = (props) =>  {
    const {reviews} = props
    const movie = reviews.map( (review, index) => <li key={index} className=
    "review">{review.display_title}{review.byline} {review.critics_pick } {review.critics_pick} {review.headline} {review.summary_short} 
    
    </li>)
    return (
      <div className="review-list">
        <ul>
          {movie}
        </ul>
      </div>
    )
  }


export default MovieReviews;