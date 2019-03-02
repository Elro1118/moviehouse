import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div className="movie-section">
        <div className="detail-section">
          <div className="header-section">
            <h3>{this.props.title}</h3>
            <p className="date-section">{this.props.dateMovie}</p>
          </div>
          <p>{this.props.detail}</p>
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
