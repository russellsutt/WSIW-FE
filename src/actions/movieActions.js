
export const fetchMovies = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MOVIES' })
        fetch('insert-movie-api-here')
            .then(resp => resp.json())
            .then(resp => dispatch({ type: 'ADD_MOVIES', movies: resp }))
    }
}