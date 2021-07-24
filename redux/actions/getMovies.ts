import { Dispatch } from 'redux'
import axios from 'axios'

import { MovieStatus, MOVIE_LOADING, MOVIE_SUCCESS, MOVIE_FAILED } from '../types'

export const getMovies = () => async (dispatch: Dispatch<MovieStatus>) => {
    
    try {
        dispatch({
            type: MOVIE_LOADING
        })

        const url = "http://localhost:3333/api/movies"
        const data = await axios.get(url)
        dispatch({
            type: MOVIE_SUCCESS,
            payload: data.data
        })

    } catch(e) {
        dispatch({
            type: MOVIE_FAILED
        })
    }
}