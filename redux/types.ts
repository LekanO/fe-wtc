export const MOVIE_LOADING = 'MOVIE_LOADING'
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS'
export const MOVIE_FAILED = 'MOVIE_FAILED'

export type Movies = {
    id: number,
    poster: string
}

export type Rating = {
    
}
export interface MovieI {
    id: number
    Poster: string
}


export interface MovieLoading {
    type: typeof MOVIE_LOADING
}

export interface MovieSuccess {
    type: typeof MOVIE_SUCCESS,
    payload: MovieI[]
}

export interface MovieFailed {
    type: typeof MOVIE_FAILED
}

export type MovieStatus = MovieLoading | MovieSuccess | MovieFailed