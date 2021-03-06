import React, { Component } from 'react'
import CastDetail from '../components/CastDetail'
import Background from '../components/Componenet-Background'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

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
        this.setState({
          castData: data.cast,
          movieId: data.id
        })
      })
  }

  render() {
    return (
      <>
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display"
          rel="stylesheet"
        />
        <Header />

        <h2 className="title">
          <Link to={'/'}>
            <span>HOME</span>
          </Link>
          {' / '}ABOUT MOVIE
        </h2>

        <Background key={this.state.movieId} detailId={this.state.movieId} />
        <div className="pictures-detail">
          {this.state.castData.map((movie, i) => {
            return (
              <CastDetail
                key={i} //{movie.cast_id}
                name={movie.name}
                character={movie.character}
                imgURL={movie.profile_path}
                movieId={movie.id}
              />
            )
          })}
        </div>
      </>
    )
  }
}

export default MovieDetail
