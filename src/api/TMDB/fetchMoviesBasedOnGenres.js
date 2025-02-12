import { fetchTrailer, fetchCast } from './fetchTrailer';

const BEARERKEY = process.env.REACT_APP_TMDB_BEARER;
export default async function fetchMovies(category) {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BEARERKEY}`
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const moviesWithDetails = await Promise.all(
            data.results.map(async (movie) => {
                const trailerKey = await fetchTrailer(movie.id);
                const cast = await fetchCast(movie.id);
                return { ...movie, trailer: trailerKey, cast };
            })
        );
        return { results: moviesWithDetails };
    } catch (err) {
        console.log(err);
        throw err;
    }
}