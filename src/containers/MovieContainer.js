import React from 'react';
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'


class MovieContainer extends React.Component {


    componentDidMount() {
        this.props.fetchMovies()
    }



    render() {
        return (
            <div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        movies: state.movieReducer.movies,
        loading: state.movieReducer.loading
    }
}

export default connect(mapStateToProps, { fetchMovies })(MovieContainer);