import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/Movie/:movieId" component={MovieDetail} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
