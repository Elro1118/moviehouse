import React, { Component } from 'react'

class CastDetail extends Component {
  render() {
    return (
      <>
        {this.state.castData.map(movie => {
          return (
            <movie
              key={movie.cast_id}
              name={movie.name}
              character={movie.character}
              profile_path={movie.profile_path}
            />
          )
        })}
      </>
    )
  }
}

export default CastDetail
