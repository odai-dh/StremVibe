import { fetchTrailer, fetchCast } from './fetchTrailer';

export default async function fetchMovies(category) {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${category}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDU5MTEyMjIyNTI0N2YyZTUwODBjNTViODM4ZGFkNCIsIm5iZiI6MTczNzQ2MDY0Ny4wMDcsInN1YiI6IjY3OGY4YmE2NDM3NTg5ZjM4NjViMzNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O0J1pktH5uEx92R-uEeh_9RGQ7mOiCcCh3bOcM0Ho2A'
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