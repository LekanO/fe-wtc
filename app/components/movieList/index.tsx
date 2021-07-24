import React, { useEffect } from 'react'
import { Grid } from '@mono-nx-test-with-nextjs/ui';
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../../redux/store';
import { getMovies } from '../../../redux/actions/getMovies'
import Card from '../card'
import MovieTotal from '../movieTotal'

const MovieList = ( ) => {
    const movieState = useSelector( (state: RootReducer) => state.movies)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    return (
        <div>
            <MovieTotal />
            <Grid container spacing={3}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={10}>
                        {movieState.movies && (
                            <>
                                {movieState.movies.map(movie => {
                                    return <Card movie={movie} />
                                })}
                            </>
                        )} 
                </Grid>
            </Grid>
        </div>
    )
}



export default MovieList
