import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLikedMovies } from "../componants/LikedMovies/LikedMoviesContext";
import JumboHeader from "../componants/UIComponant/JumboHeader";
import MovieTrailer from "../componants/SinglePage/MovieTrailer";
import Modal from "../componants/SinglePage/Modal";
import MovieDetailsContainer from "../componants/SinglePage/MovieDetailsContainer";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";
import { fetchTrailer, fetchCast, fetchReviews } from "../api/TMDB/fetchTrailer";

export default function SingleMoviePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { addMovieToLiked } = useLikedMovies();
  const movie = location.state?.item;

  // Fetch trailer, cast, and reviews for the movie
  useEffect(() => {
    const fetchData = async () => {
      if (movie) {
        const trailerKey = await fetchTrailer(movie.id, 'movie');
        const cast = await fetchCast(movie.id, 'movie');
        const reviews = await fetchReviews(movie.id, 'movie');
        setTrailerKey(trailerKey);
        movie.cast = cast;
        movie.reviews = reviews;
      }
    };
    fetchData();
  }, [movie]);

  // Redirect to home page if no movie data is found
  useEffect(() => {
    if (!movie) {
      navigate("/");
    }
  }, [movie, navigate]);

  // The names are self-explanatory
  const handlePlayButtonClick = () => {
    setShowTrailer(true);
  };
  const handleCloseModal = () => {
    setShowTrailer(false);
  };
  const handleLikeButtonClick = () => {
    addMovieToLiked(movie);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <div className="container">
        <JumboHeader
          image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          title={movie.title}
          description={movie.overview}
          onPlayButtonClick={handlePlayButtonClick}
          onAddToLikedMovies={handleLikeButtonClick}
        />
        <MovieDetailsContainer />
        <Modal show={showTrailer} onClose={handleCloseModal}>
          <MovieTrailer trailerKey={trailerKey} title={movie.title} />
        </Modal>
        <Community />
      </div>
      <Footer />
    </>
  );
}