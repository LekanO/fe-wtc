import React from 'react';
import Card from '.';

const data =  {
    id: 1,
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  }


export default {
  component: Card,
  title: 'Card',
};

export const ThisIsHowIWork = () => {
  return <Card movie={data} />;
};
