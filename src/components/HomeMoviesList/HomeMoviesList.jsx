import React, { useState, useEffect } from 'react';
import getTrendingMovies from 'services/apiTrendingMovies';
import css from './HomeMoviesList.module.css';
import { Link } from 'react-router-dom';

const HomeMoviesList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getTrendingMovies();
      setData(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.title}>Trending today</h1>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id} className={css.item}>
              <Link key={item} to={`/movies/${item.id}`}>
                {item.title || item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.loading}>Loading...</p>
      )}
    </div>
  );
};

export default HomeMoviesList;
