import React, { createContext, useState, useContext } from 'react';
// Create a context for liked movies
const LikedMoviesContext = createContext();
// Provider component to manage liked movies state
export const LikedMoviesProvider = ({ children }) => {
  // Array of liked movie objects
  const [likedMovies, setLikedMovies] = useState([]);
  // Function to add a movie to liked movies
  const addMovieToLiked = (movie) => {
    setLikedMovies((prevMovies) => {
      // Check if the movie is already in the liked movies array
      if (prevMovies.some((likedMovie) => likedMovie.id === movie.id)) {
        return prevMovies; 
      }
      return [...prevMovies, movie]; // Add the movie to the liked movies array
    });
  };
  // Function to remove a movie from liked movies
  const removeMovieFromLiked = (movieId) => {
    setLikedMovies((prevMovies) => prevMovies.filter(movie => movie.id !== movieId));
  };

  return (
    // Provide the liked movies state and functions to the context
    <LikedMoviesContext.Provider value={{ likedMovies, addMovieToLiked, removeMovieFromLiked }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};
// Custom Hook to access the liked movies context
export const useLikedMovies = () => {
  return useContext(LikedMoviesContext);
};