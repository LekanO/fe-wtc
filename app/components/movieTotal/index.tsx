import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mono-nx-test-with-nextjs/ui';
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../../redux/store';
import { getMovies } from '../../../redux/actions/getMovies'

const MovieTotal = ( ) => {
    const movieState = useSelector( (state: RootReducer) => state.movies)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getMovies())

    }, [dispatch])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom style={{textAlign: 'center', fontWeight: 'bold', marginTop: '40px'}}>
                        Movies ({movieState.movies ? movieState.movies.length : 0})
                    </Typography> 
                </Grid>
            </Grid>
        </div>
    )
}



export default MovieTotal
