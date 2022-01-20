import React, { useEffect, useState } from 'react';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// hooks
import { useHomeFetch } from '../hooks/useHomeFetch';

// image
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state, loading);

  return <div>Home Page</div>;
};

export default Home;
