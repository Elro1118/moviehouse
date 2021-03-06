import React, { Component } from 'react'

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
        this.setState({
          movies: data.results.filter(movie => movie.id == this.state.movieId)
        })
      })
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
              <div className="moviePreview">
                <img
                  className="poster-detail-page"
                  src={this.state.mainUrl + newMovie.poster_path}
                  alt={newMovie.title}
                />
                <section className="title-overview">
                  <h2 className="movieTitle">{newMovie.title}</h2>
                  <p className="overview">{newMovie.overview}</p>
                </section>
              </div>
            </>
          )
        })}
      </main>
    )
  }
}

export default App
