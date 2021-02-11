import React from 'react';
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import { fetchMovies } from '../actions/movieActions'


class MovieContainer extends React.Component {


    componentDidMount() {
        this.props.fetchMovies()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return <h1>Loading...</h1>
        } else {
            return <Movies movies={this.props.movies}/>
        }
    }



    render() {
        return (
            <div>
                {this.handleLoading()}
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