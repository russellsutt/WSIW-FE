import React, { Component } from 'react'
import Movie from './Movie'


class Movies extends Component {

    state = { 
        movieStack: []
    }


    componentDidMount() {
        console.log(this.props)
        this.setState({ movieStack: this.props.movies })
    }

    getNewMovie = () => {

    }

    renderMovie = () => {
        let randomIndex = Math.floor(Math.random() * Math.floor(this.state.movieStack.length))
        let randomMovie = this.state.movieStack.filter((movie, index) => {
            if (index === randomIndex)
                return movie
        })
        return <Movie movie={randomMovie[0]} />
    }



    render() {
        return (
            <div>
                {this.renderMovie()}
                <button onClick={this.getNewMovie}></button>
            </div>
        )
    }
}


export default Movies;