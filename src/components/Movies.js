import React, { Component } from 'react'
import Movie from './Movie'


class Movies extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    renderMovie = () => {
        if (this.props.movies) {
            let randomIndex = Math.floor(Math.random() * Math.floor(this.props.movies.length))
            let randomMovie = this.props.movies.filter((movie, index) => index === randomIndex)
            return <Movie key={randomMovie.id} movie={randomMovie[0]} deleteMovie={this.props.deleteMovie} />
        }
    }



    render() {
        return (
            <div>
                {this.renderMovie()}
            </div>
        )
    }
}


export default Movies;