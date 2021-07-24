import { combineReducers } from 'redux'
import { movieReducer } from './movieReducer'

// COMBINED REDUCERS
const reducers = {
  movies: movieReducer,
}

export default combineReducers(reducers)