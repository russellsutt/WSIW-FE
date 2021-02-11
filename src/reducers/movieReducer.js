import cuid from 'cuid'

export default function movieReducer(state = { movies: [], loading: false } , action  ) {


    switch (action.type) {
        case 'LOADING_MOVIES': {
            return { ...state, movies: [...state.movies], loading: true }
        }
        case 'ADD_MOVIES': {
            let newMovies = action.movies.map(movie => {
                return { id: cuid(), movie: movie}
            })
            console.log(newMovies)
            return { ...state, movies: action.movies, loading: false }
        }
        default:
            return state
    }
}