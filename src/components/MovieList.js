import React, { Component } from 'react'
import Movie from './Movie'
import Random from './RandomMovie'

class MovieList extends Component {
  state = {
    movies: [],
    apiKey: 'fae89ce6616cd4e865bdfb392495d453',
    urlImageRandom: ''
  }

  componentDidMount() {
    this.displayMovieList()
  }

  displayMovieList = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        this.state.apiKey
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        let randomIndex = Math.floor(Math.random() * data.results.length)
        let tempUrl = data.results[randomIndex].poster_path

        this.setState({
          movies: data.results,
          urlImageRandom: tempUrl
        })
      })
  }

  render() {
    return (
      <>
        <h2 className="random-title">RANDOM MOVIE</h2>
        <Random urlImgRandom={this.state.urlImageRandom} />
        <h2 className="movie-title">MOVIE NOW PLAYING</h2>
        <div className="movies-section">
          {this.state.movies
            .sort(
              (a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)
            )
            .map((movie, i) => {
              return (
                <Movie
                  key={i}
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
