import { fetchCast, fetchTrailer } from "./fetchTrailer";

export default async function fetchSearchResults(searchInput) {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchInput)}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU5MTEyMjIyNTI0N2YyZTUwODBjNTViODM4ZGFkNCIsIm5iZiI6MTczNzQ2MDY0Ny4wMDcsInN1YiI6IjY3OGY4YmE2NDM3NTg5ZjM4NjViMzNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0J1pktH5uEx92R-uEeh_9RGQ7mOiCcCh3bOcM0Ho2A'
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
