import axios from 'axios';

const KEY = '39851f8ad616b0be865617a5920dae9b';

const getSearchMovies = async movie => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&api_key=${KEY}`
  );

  return response.data.results;
};

export default getSearchMovies;
