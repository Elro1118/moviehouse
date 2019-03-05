import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  render() {
    return (
      <div className="movie-section">
        <div className="header-detail-section">
          <div className="header-section">
            <h3>{this.props.title}</h3>
          </div>
          <p className="date-section">{this.props.dateMovie}</p>

          <p className="detail-section">{this.props.detail}</p>
          <Link to={`Movie/${this.props.movieId}`}>
            <p className="footer-section">More info</p>
          </Link>
        </div>

        <img
          className="ImageSection"
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
            this.props.urlImg
          }`}
          alt={this.props.title}
        />
      </div>
    )
  }
}

export default Movie
