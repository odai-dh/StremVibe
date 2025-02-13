import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchTrailer, fetchCast } from './fetchTrailer';
import '../../css/movieGrid.css';

const APIMoviesContext = createContext();
const BEARERKEY = process.env.REACT_APP_TMDB_BEARER;
const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;

// Provider component to manage API movies state
export const APIProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // Fetch movies from the API
    const fetchMovies = async () => {
        const url = `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${BEARERKEY}`
            }
        };
        // Fetch movie data from the API
        try {
            setLoading(true);
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Fetch trailer and cast for each movie
            const moviesWithTrailers = await Promise.all(
                data.results.map(async (movie) => {
                    const trailerKey = await fetchTrailer(movie.id);
                    const cast = await fetchCast(movie.id);
                    return { ...movie, trailer: trailerKey, cast };
                })
            );

            // Set the movies state with the fetched data
            setMovies(moviesWithTrailers);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    // Fetch movies when the component mounts
    useEffect(() => {
        fetchMovies();
    }, []);
if (loading) return <div className="load-wrapp">
<div className="load-3">
  <div className="line"></div>
  <div className="line"></div>
  <div className="line"></div>
</div>
</div>;

if (error) return <div>Error: {error}</div>;

    // Provide the API movies state and functions to the context
    return (
        <APIMoviesContext.Provider value={{ movies, loading, error }}>
            {children}
        </APIMoviesContext.Provider>
    );
};
// Custom Hook to access the API movies context
export const useAPI = () => {
    const context = useContext(APIMoviesContext);
    if (context === undefined) {
        throw new Error('UseAPI must be used within an APIProvider');
    }
    return context;
};