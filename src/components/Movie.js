import React from 'react';
import { useParams } from 'react-router-dom';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//components
import Grid from './Grid';
import Spinner from './Spinner';

//image
import NoImage from '../images/no_image.jpg';

//hook
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);

  return (
    <>
      <div></div>
    </>
  );
};
export default Movie;
