import React, { Component } from 'react'

class CastDetail extends Component {
  render() {
    return (
      <>
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
