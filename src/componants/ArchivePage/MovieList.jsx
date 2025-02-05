import React, { useEffect, useState } from "react";
import { useAPI } from "../../api/TMDB/fetchAPIMovies";
import { useNavigate } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import StarSmaller from "./StarSmaller";
import fetchMovies from "../../api/TMDB/fetchMoviesBasedOnGenres";
import "../../css/starSmaller.css";
import "../../css/movieGrid.css";

export default function MovieList({ category }) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movies } = useAPI();
  const navigate = useNavigate();

  // Function to generate a URL-friendly slug from a movie title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  // Effect to fetch movies based on category or all movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (category) {
          const data = await fetchMovies(category);
          setFilteredMovies(data.results);
        } else {
          setFilteredMovies(movies);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, [category, movies]);

  // Render loading state with some animation
  if (isLoading) return <div className="load-wrapp">
    <div className="load-3">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
  if (error) return <div>Error: {error}</div>;

  // Render movie list
  return (
    <div className="MovieGrid">
      {filteredMovies.map((movie) => (
        <button
          className="inner"
          key={movie.id}
          onClick={() =>
            navigate(`/movies/${generateSlug(movie.title)}`, {
              state: { movie },
            })
          }
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="content">
            <span className="time">
              {/* Display rating and release date */}
              <HiCalendarDateRange size={20} fill="#999999" />
              <p>{movie.release_date}</p>
            </span>
            <StarSmaller rating={movie.vote_average} />
          </div>
        </button>
      ))}
    </div>
  );
}
