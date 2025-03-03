const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

export const fetchActorDetails = async (id) => {
  const actorUrl = `${BASE_URL}/person/${id}?api_key=${API_KEY}&language=en-US`;
  const creditsUrl = `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  try {
    const [actorResponse, creditsResponse] = await Promise.all([
      fetch(actorUrl, options),
      fetch(creditsUrl, options)
    ]);

    if (!actorResponse.ok) {
      throw new Error(`HTTP error! status: ${actorResponse.status}`);
    }
    if (!creditsResponse.ok) {
      throw new Error(`HTTP error! status: ${creditsResponse.status}`);
    }

    const actorData = await actorResponse.json();
    const creditsData = await creditsResponse.json();

    return { ...actorData, known_for: creditsData.cast };
  } catch (err) {
    console.error('Error fetching actor details:', err);
    throw err;
  }
};