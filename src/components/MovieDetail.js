import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MovieDetail extends Component {
  state = {
    movieData: [], //data results
    myKey: 'fae89ce6616cd4e865bdfb392495d453',
    movieId: 973667
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
          movieData: data.results
        })
      })
  }

  render() {
    return (
      <>
        <main>
          <header>
            <h1>MovieHouse, Cine, 영화관</h1>
            <h2>Movies, Pelicula, 상영작</h2>
          </header>
          <section className="details">
            <h3>{this.props.character}</h3>
            <h3>{this.props.name}</h3>
            <img src="${this.props.profile_path}" />
            <h3>{this.props.credit_id}</h3>
          </section>
        </main>
      </>
    )
  }
}

export default MovieDetail
