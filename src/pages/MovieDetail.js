import React, { Component } from 'react'
import CastDetail from './CastDetail'
import Background from './Component/Background'
import CastDetail from '../components/CastDetail'
import Background from '../components/Component-Background'

class MovieDetail extends Component {
  state = {
    castData: [], //data.cast
    myKey: 'fae89ce6616cd4e865bdfb392495d453',
    movieId: this.props.match.params.movieId
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }/credits?api_key=${this.state.myKey}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log({ data })
        this.setState({
          castData: data.cast,
          movieId: data.id
        })
      })
    console.log(this.state.castData)
  }

  render() {
    return (
      <>
        <Background detailId={this.state.movieId} />
        <h2>ABOUT MOVIE</h2>
        {this.state.castData.map(movie => {
          return (
            <CastDetail
              key={movie.cast_id}
              name={movie.name}
              character={movie.character}
              imgURL={movie.profile_path}
              movieId={movie.id}
            />
          )
        })}
      </>
    )
  }
}

export default MovieDetail
