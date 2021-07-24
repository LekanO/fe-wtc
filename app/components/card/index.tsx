import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { FavoriteIcon, VisibilityIcon, VisibilityOffIcon, FavoriteBorderIcon, StarIcon, StarHalfIcon, Button, Typography } from '@mono-nx-test-with-nextjs/ui';


export const Card = ({movie}) => {
  const [ watched, setWatched ] = useState<boolean>(false)
  const [ saved, setSaved ] = useState<boolean>(false)

  const handleWatch = () => {
    if(!watched) {
      return setWatched(true)
    }
    return setWatched(false)
  } 

  const handleLike = () => {
    if(!saved) {
      return setSaved(true)
    }
    return setSaved(false)
  } 

  const useStyles = makeStyles(() =>
  createStyles({
    cardWrapper: {
        width: '210px',
        height: '370px',
        float: 'left',
        borderRadius: '20px',
        backgroundColor: `${(!watched && !saved ? '#FFF' : null) || (!watched && saved ? '#ED6606' : null) || ( watched && !saved ? '#EEC907' : null ) || ( watched && saved ? '#049452' : null) }`,
        margin: '20px',
        boxShadow: '#a5a2a2 2px 5px 7px'
    },
    cardHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'space-evenly',
      width: '90%',
      margin: '10px'
    },
    topLeft: {
      width: '50%',
      textAlign: 'left'
    },
    topRight: {
      width: '50%',
      textAlign: 'right'
    },
    imageSection: {
      width: '80%',
      height: '250px',
      margin: '0 auto',
      borderRadius: '20px',
      backgroundColor: 'blue'
    },
    imgPoster: {
      width: '100%',
      height: '250px',
      borderRadius: '20px'
    },
    cardFooter: {
      width: '90%',
      margin: '10px',
      textAlign: 'center'
    }
  })
);

const classes = useStyles();

  return ( 
    <div className={classes.cardWrapper}>
      <div className={classes.cardHeader}> 
        <div className={classes.topLeft}> <Button onClick={() => handleWatch()}> { watched ? <VisibilityOffIcon /> : <VisibilityIcon /> }</Button> </div>
        <div className={classes.topRight}> <Button onClick={() => handleLike()}> { saved ? <FavoriteIcon /> : <FavoriteBorderIcon /> } </Button> </div>
      </div>
      <div className={classes.imageSection}> <img className={classes.imgPoster} src={movie.Poster} alt="" /> </div>
      <div className={classes.cardFooter}> 
        <Typography> (3.51) </Typography>
        <Typography> <StarIcon /><StarIcon/><StarIcon /><StarIcon /><StarHalfIcon /> </Typography>
      </div>
    </div>
  );
};

export default Card;
