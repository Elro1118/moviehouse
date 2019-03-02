import React, { Component } from 'react'
// import axios from 'axios'
import Movie from './Movie'
class MovieList extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=fae89ce6616cd4e865bdfb392495d453&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log({ data })
        this.setState({
          movies: data.results
        })
      })
    console.log(this.state.movies)
  }

  render() {
    return (
      <>
        <h3>Popular Movies</h3>
        <div className="movies-section">
          {this.state.movies.map(movie => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                dateMovie={new Date(movie.release_date).toDateString()}
                detail={movie.overview}
                urlImg={movie.poster_path}
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default MovieList
