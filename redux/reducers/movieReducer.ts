import { MovieI, MovieStatus, MOVIE_LOADING, MOVIE_SUCCESS, MOVIE_FAILED } from '../types'

export interface DefaultStateI {
    loading: boolean,
    movies?: MovieI[]
}

export const initialState: DefaultStateI = {
    loading: false
}

export const movieReducer = (state: DefaultStateI = initialState, action: MovieStatus) => {
    switch(action.type) {
        case MOVIE_LOADING:
            return {
                loading: true
            }
        case MOVIE_FAILED:
            return {
                loading: false
            }
        case MOVIE_SUCCESS:
            return {
                loading: false,
                movies: action.payload
            }
        default: return state
    }
}