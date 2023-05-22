import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Search.module.css';
import { useLocation } from 'react-router-dom';

export default function Search({ onSubmitForm, setSearchParams }) {
  const [movie, setMovie] = useState('');
  const location = useLocation();
  console.log(location);

  const handleInput = e => {
    setMovie(e.currentTarget.value.toLowerCase());
    setSearchParams({ search: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (movie.trim() === '') {
      alert('Please enter a search keyword');
      return;
    }

    onSubmitForm(movie);
    setMovie('');
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        className={css.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="movie"
        value={movie}
        onChange={handleInput}
      />
      <button type="submit" className={css.searchFormButton}>
        <span>Search</span>
      </button>
    </form>
  );
}

Search.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
