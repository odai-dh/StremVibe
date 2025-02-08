import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// Function to fetch a movie trailer from the API
export const fetchTrailer = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    // Find the YouTube trailer for the movie
    const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    return trailer ? trailer.key : null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};

// Function to fetch the cast of a movie from the API
export const fetchCast = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
    const data = await response.json();
    // Return the first 10 cast members
    return data.cast ? data.cast.slice(0, 10) : []; 
  } catch (error) {
    console.error('Error fetching cast:', error);
    return [];
  }
};

// Function to fetch the reviews of a movie from the API with the movie ID
export const fetchReviews = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`);
    const data = await response.json();
    // Return the first 2 reviews
    return data.results ? data.results.slice(0, 2) : []; 
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};