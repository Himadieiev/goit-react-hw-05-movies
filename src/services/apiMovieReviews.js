import axios from 'axios';

const KEY = '39851f8ad616b0be865617a5920dae9b';

const getMovieReviews = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  );

  return response.data.results;
};

export default getMovieReviews;
