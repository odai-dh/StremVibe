const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
const BEARER_TOKEN = `Bearer ${process.env.REACT_APP_TMDB_BEARER}`;

const fetchTvShows = async () => {
  const url = `${BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: BEARER_TOKEN
    }
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export default fetchTvShows;
