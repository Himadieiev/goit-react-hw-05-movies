import axios from 'axios';

const KEY = '39851f8ad616b0be865617a5920dae9b';

const getMovieCredits = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  );

  return response.data.cast;
};

export default getMovieCredits;
