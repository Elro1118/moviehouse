import React, { Component } from 'react'

// import { Link } from 'react-router-dom'

class MovieDetail extends Component {
  state = {
    castData: [], //data.cast
    myKey: 'fae89ce6616cd4e865bdfb392495d453',
    movieId: '399579'
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.state.movieId
      }/credits?api_key=${this.state.myKey}`
    )
      .then(resp => resp.json())
      .then(data => {
        console.log({ data })
        this.setState({
          castData: data.cast
        })
        console.log(this.state.castData)
      })
  }

  render() {
    return (
      <>
        {this.state.castData.map(movie => {
          return (
            <>
              <h3>{movie.character}</h3>
              <h3>{movie.name}</h3>
              <img src={movie.profile_path} alt={movie.name} />
            </>
          )
        })}
      </>
    )
  }
}

export default MovieDetail

{
  /* <main> */
}
{
  /* <header>
                <h1>MovieHouse, Cine, 영화관</h1>
                <h2>Movies, Pelicula, 상영작</h2>
              </header> */
}

{
  /* <section className="details"> */
}

{
  /* <Movie>                
                cast.character={movie.name}
                dateMovie={new Date(movie.release_date).toDateString()}
                detail={movie.overview}
                urlImg={movie.poster_path}
              /> */
}
{
  /* <h3>{this.props.character}</h3>
                  <h3>{this.props.name}</h3>
                  <img src="${this.props.profile_path}" />
                  <h3>{this.props.credit_id}</h3> */
}
{
  /* </section> */
}
{
  /* </main> */
}
