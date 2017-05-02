import React from 'react'

class ActorDetail extends React.Component {
  render () {
    if (!this.props.movie) {
      return null
    }

    return (
      <div id='movie-details' >
        <h3>
          {this.props.movie.show_title}
        </h3>
        <p>Release Year: {this.props.movie.release_year}</p>
        <p>
          <img src={this.props.movie.poster} />
        </p>
      </div>
    )
  }
}

export default ActorDetail
