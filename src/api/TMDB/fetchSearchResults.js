import { fetchCast, fetchTrailer } from "./fetchTrailer";
const BEARERKEY = process.env.REACT_APP_TMDB_BEARER;


export default async function fetchSearchResults(searchInput) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchInput)}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BEARERKEY}`
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const moviesWithDetails = await Promise.all(
            data.results.map(async (movie) => {
                const trailerKey = await fetchTrailer(movie.id);
                const cast = await fetchCast(movie.id);
                return { ...movie, trailer: trailerKey, cast };
            })
        );
        return { results: moviesWithDetails };
    } catch (error) {
        console.error("Error fetching search results:", error);
        return null;
    }
}
