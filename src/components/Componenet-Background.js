import React, { Component } from 'react'
// import moment from 'moment'

// import Movie from './Movie'

class App extends Component {
  state = {
    castData: [], //data.cast
    myKey: 'fae89ce6616cd4e865bdfb392495d453',
    movieId: this.props.detailId,
    movies: [],
    mainUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    poster_path_New: ''
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=fae89ce6616cd4e865bdfb392495d453&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log({ data })
        this.setState({
          movies: data.results.filter(movie => movie.id == this.props.detailId)
        })
      })
    console.log(this.state.movies)
    console.log('mi path ' + this.state.movies.poster_path)
  }

  render() {
    return (
      <main
        className="movie-header-background"
        style={{
          backgroundImage: `url(${this.state.mainUrl + this.state.movies}`
        }}
      >
        {this.state.movies.map(newMovie => {
          return (
            <>
              <p>{newMovie.title}</p>
              <p>{newMovie.overview}</p>
              <img src={this.state.mainUrl + newMovie.poster_path} />
            </>
          )
        })}
        {/* <header>
          <h1>Moviehouse</h1>
        </header>
        <div>
          {data.results.map((movie, index) => {
            return (
              <Movie
                key={index}
                title={movie.title}
                src={`${baseURL}${movie.poster_path}`}
                overview={movie.overview}
                // release_date={moment(movie.release_date).format('MMM Do YY')}
              />
            )
          })}
        </div> */}
        // {}
      </main>
    )
  }
}

export default App
