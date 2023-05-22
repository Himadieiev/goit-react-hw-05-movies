import React, { useEffect, useState } from 'react';
import { useParams, Route, Routes } from 'react-router-dom';
import Movie from 'components/Movie/Movie';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import getMovieDetails from 'services/apiMovieDetails';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const movieData = await getMovieDetails(movieId);
      setMovieData(movieData);
    };

    fetchMovieData();
  }, [movieId]);

  return (
    <>
      <Movie dataMovie={movieData} />
      <Routes>
        <Route path="cast" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
