
import { combineReducers } from "redux";
import manageMovies from './manageMovies'


const rootReducer = combineReducers({
    movies: manageMovies
});


export default rootReducer
