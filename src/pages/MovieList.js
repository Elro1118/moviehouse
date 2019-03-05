import React, { Component } from 'react'
import Movie from '../components/Movie'
import Random from '../components/RandomMovie'

class MovieList extends Component {
  state = {
    movies: [],
    apiKey: 'fae89ce6616cd4e865bdfb392495d453',
    urlImageRandom: '',
    lengthArray: 0
  }

  componentDidMount() {
    this.displayMovieList()
    // this.randomPicture()
  }

  displayMovieList = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        this.state.apiKey
      }&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        let randomIndexTemp = Math.floor(Math.random() * data.results.length)
        // let tempUrl = data.results[randomIndex].poster_path

        this.setState({
          movies: data.results,
          urlImageRandom: data.results[randomIndexTemp].poster_path, //tempUrl,
          lengthArray: data.results.length
        })
      })
  }

  // randomPicture = () => {
  //   let randomIndex = Math.floor(Math.random() * this.state.lengthArray)
  //   this.setState({
  //     urlImageRandom: this.state.movies[randomIndex].poster_path
  //   })
  // }

  // timerClock = () => {
  //   setInterval(() => {
  //     document.getElementById('safeTimerDisplay').textContent = '00:' + sec
  //     sec--
  //     if (sec === 0) {
  //       savePeriodTracker()
  //     }
  //     if (sec < 0) {
  //       clearInterval(timer)
  //     }
  //   }, 5000)
  // }

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
                  detail={
                    movie.overview.substr(
                      0,
                      Math.min(
                        movie.overview.length,
                        movie.overview.indexOf('.')
                      )
                    ) + ' ...'
                  }
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
