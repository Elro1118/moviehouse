import React, { Component } from 'react'
import Header from './Header'
// import { Link } from 'react-router-dom'

class CastDetail extends Component {
  render() {
    return (
      <>
        {/* <Link to={`Movie/${this.props.movieId}`}>
          <p className="footer-section">More info</p>
        </Link> */}
        <Header />
        <div className="castDetail-section">
          <img
            className="ProfileImg"
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${
              this.props.imgURL
            }`}
            alt={this.props.name}
          />
          <h3 className="profile-detail">
            {this.props.name} ({this.props.character})
          </h3>
        </div>
      </>
    )
  }
}

export default CastDetail
