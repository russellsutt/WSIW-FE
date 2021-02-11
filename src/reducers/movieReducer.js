import cuid from 'cuid'

export default function movieReducer(state = { movies: [], loading: false } , action  ) {


    switch (action.type) {
        case 'LOADING_MOVIES': {
            return { ...state, movies: [...state.movies], loading: true }
        }
        case 'ADD_MOVIES': {
            let newMovies = action.movies.map(movie => { return { id: cuid(), movie: movie } } )
            return { ...state, movies: newMovies, loading: false }
        }
        case 'DELETE_MOVIE': {
            let updatedMovies = state.movies.filter(movie => movie.id !== action.movieId)
            return {...state, movies: updatedMovies, loading: false}
        }
        default:
            return state
    }
}