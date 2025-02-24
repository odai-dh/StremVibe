import React, { createContext, useState, useContext } from 'react';

const LikedMoviesContext = createContext();
export const LikedMoviesProvider = ({ children }) => {
  const [likedMovies, setLikedMovies] = useState([]);
  const addMovieToLiked = (movie) => {
    setLikedMovies((prevMovies) => {
      if (prevMovies.some((likedMovie) => likedMovie.id === movie.id)) {
        return prevMovies; 
      }
      return [...prevMovies, movie]; 
    });
  };
  const removeMovieFromLiked = (movieId) => {
    setLikedMovies((prevMovies) => prevMovies.filter(movie => movie.id !== movieId));
  };

  return (
    <LikedMoviesContext.Provider value={{ likedMovies, addMovieToLiked, removeMovieFromLiked }}>
      {children}
    </LikedMoviesContext.Provider>
  );
};
export const useLikedMovies = () => {
  return useContext(LikedMoviesContext);
};