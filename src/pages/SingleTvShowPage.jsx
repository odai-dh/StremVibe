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

export default function SingleTvShowPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const { addMovieToLiked } = useLikedMovies();
  const tvShow = location.state?.item;

  // Fetch trailer, cast, and reviews for the TV show
  useEffect(() => {
    const fetchData = async () => {
      if (tvShow) {
        const trailerKey = await fetchTrailer(tvShow.id, 'tv');
        const cast = await fetchCast(tvShow.id, 'tv');
        const reviews = await fetchReviews(tvShow.id, 'tv');
        setTrailerKey(trailerKey);
        tvShow.cast = cast;
        tvShow.reviews = reviews;
      }
    };
    fetchData();
  }, [tvShow]);

  // Redirect to home page if no TV show data is found
  useEffect(() => {
    if (!tvShow) {
      navigate("/");
    }
  }, [tvShow, navigate]);

  // The names are self-explanatory
  const handlePlayButtonClick = () => {
    setShowTrailer(true);
  };
  const handleCloseModal = () => {
    setShowTrailer(false);
  };
  const handleLikeButtonClick = () => {
    addMovieToLiked(tvShow);
  };

  if (!tvShow) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <div className="container">
        <JumboHeader
          image={`https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`}
          title={tvShow.name}
          description={tvShow.overview}
          onPlayButtonClick={handlePlayButtonClick}
          onAddToLikedMovies={handleLikeButtonClick}
        />
        <MovieDetailsContainer />
        <Modal show={showTrailer} onClose={handleCloseModal}>
          <MovieTrailer trailerKey={trailerKey} title={tvShow.name} />
        </Modal>
        <Community />
      </div>
      <Footer />
    </>
  );
}