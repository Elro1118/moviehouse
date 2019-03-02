import React, { Component } from 'react'
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
        <h2>MOVIE NOW PLAYING</h2>
        <div className="movies-section">
          {this.state.movies
            .sort(
              (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
            )
            .map(movie => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  dateMovie={new Date(movie.release_date).toDateString()}
                  detail={movie.overview}
                  urlImg={movie.poster_path}
                  movieId={movie.id}
                />
              )
            })}
        </div>
      </>
    )
  }
}
export default MovieList
