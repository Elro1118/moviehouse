import React, { Component } from 'react'

class RandomMovie extends Component {
  render() {
    return (
      <img
        className="ImageSection"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${
          this.props.urlImgRandom
        }`}
        alt={this.props.titleImgRandom}
      />
    )
  }
}

export default RandomMovie
