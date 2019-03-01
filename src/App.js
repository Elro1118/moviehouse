import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'

class App extends Component {
  render() {
    ;<Router>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/Movie:/:movieId" component={MovieDetail} />
      </Switch>
    </Router>
  }
}

export default App
