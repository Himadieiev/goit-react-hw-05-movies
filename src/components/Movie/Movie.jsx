import React from 'react';
import PropTypes from 'prop-types';
import css from './Movie.module.css';
import { Link } from 'react-router-dom';

const Movie = ({ dataMovie }) => {
  if (!dataMovie) {
    return null;
  }

  const { title, overview, genres, poster_path, vote_average } = dataMovie;
  const genreNames = Object.values(genres).map(genre => genre.name);

  return (
    <div>
      <button className={css.btn} onClick={() => window.history.back()}>
        Go back
      </button>
      <div className={css.mainInfoMovie}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          width={200}
          className={css.img}
        />
        <div>
          <h2>{title}</h2>
          <p>
            User Score: <span>{vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genreNames.join(', ')}</p>
        </div>
      </div>

      <p className={css.addInfo}>Additional information</p>
      <ul>
        <li>
          <Link to={`/movies/${dataMovie.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${dataMovie.id}/reviews`}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

Movie.propTypes = {
  dataMovie: PropTypes.shape({
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default Movie;
