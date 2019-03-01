import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

class App extends Component {
  state = {
    movieData: [] //data results
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=<<your key here>>>&language=en-US&page=1'
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          movieData: data.results
        })
      })
  }

  render() {
    ;<Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/Movie/:movieId" component={MovieDetail} />
      </Switch>
    </Router>
  }
}

export default App
