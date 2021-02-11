
const MOVIE_PICKS_API_KEY = process.env.REACT_APP_MOVIE_REVIEW_API_KEY

export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MOVIES' })
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?query=by-title&api-key=${MOVIE_PICKS_API_KEY}`)
            .then(resp => resp.json())
            .then(resp => { dispatch({ type: 'ADD_MOVIES', movies: resp.results })})
    }
}


export const deleteMovie = (movieId) => {
    return { 
        type: 'DELETE_MOVIE',
        movieId
    }
}