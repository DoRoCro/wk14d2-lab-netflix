import React from 'react'
import MovieSelector from '../components/MovieSelector'
import ActorDetail from '../components/ActorDetail'

class NetflixContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: [],
      movie: null
    }
  }

  setSelectedMovie (movie) {
    this.setState({selectedMovie: movie})
  }

  componentDidMount () {
    const url = 'http://netflixroulette.net/api/api.php?actor=Kevin%20Bacon'
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      if (request.status === 200) {
        console.log(request.responseText)
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({movies: data, selectedMovie: data[0]})
      }
    }
    request.send()
  }

  render () {
    return (
      <div>
        <h2>Netflix Container</h2>
        <MovieSelector movies={this.state.movies} setSelectedMovie={this.setSelectedMovie.bind(this)} />
        <ActorDetail movie={this.state.selectedMovie} />
      </div>
    )
  }
}

export default NetflixContainer
