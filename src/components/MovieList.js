import React, { Component } from 'react'
// import axios from 'axios'
class MovieList extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=fae89ce6616cd4e865bdfb392495d453`
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
        <p>hello word</p>
      </>
    )
  }
}
export default MovieList
