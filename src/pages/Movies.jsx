import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import Search from 'components/Search/Search';
import getSearchMovies from 'services/apiSearchMovies';
import MovieList from 'components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const handleFormSubmit = async movie => {
    const searchedMovies = await getSearchMovies(movie);

    setMovies(searchedMovies);
  };

  return (
    <div>
      <Search
        onSubmitForm={handleFormSubmit}
        setSearchParams={setSearchParams}
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
