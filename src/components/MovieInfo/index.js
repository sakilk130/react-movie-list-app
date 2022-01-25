import React, { useContext } from 'react';
import Thumb from '../Thumb';
import Rate from '../Rate';
import PropTypes from 'prop-types';
import { Context } from '../../context';

import { API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import API from '../../API';

import NoImage from '../../images/no_image.jpg';

import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);

  const handelRating = async (value) => {
    const rate = await API.rateMovie(user.sessionId, movie.id, value);
    console.log(rate);
  };

  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>
          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 0 ? 'S' : ''}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          {user && (
            <div>
              <p>Rate Movie</p>
              <Rate callback={handelRating} />
            </div>
          )}
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.prototype = {
  movie: PropTypes.object,
};

export default MovieInfo;
