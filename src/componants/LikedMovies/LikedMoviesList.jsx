import React from "react";
import { useLikedMovies } from "./LikedMoviesContext";
import { useNavigate } from "react-router-dom";
import "../../css/likedMoviePage.css";

export default function LikedMoviesList() {
  // Get liked movies and remove movie from liked movies function from context
  const { likedMovies, removeMovieFromLiked } = useLikedMovies();
  // Use navigate hook to navigate to a different page
  const navigate = useNavigate();
  // Function to generate a URL-friendly slug from a movie title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  return (
    <div className="liked-movies-container">
      <h2>Liked Movies</h2>
      {likedMovies.length === 0 ? (
        <p>No liked movies yet.</p>
      ) : (
        <ul>
          {likedMovies.map((movie) => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <button onClick={() => removeMovieFromLiked(movie.id)}>Remove</button>
                {/* Button to navigate to movie details page */}
                <button
                  className="link"
                  onClick={() => navigate(`/movies/${generateSlug(movie.title)}`, { state: { item: movie } })}
                >
                  View Details
                </button>              
                </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}