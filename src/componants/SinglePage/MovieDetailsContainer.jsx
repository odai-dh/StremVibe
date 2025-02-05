import React from "react";
import MovieCast from "./MovieCast";
import MovieOverview from "./MovieOverview";
import MovieOther from "./MovieOther";
import MovieReviews from "./MovieReviews";
import { useLocation, useNavigate } from "react-router-dom";


// MovieDetailsContainer component to display movie details
export default function MovieDetailsContainer() {
    const location = useLocation();
    const navigate = useNavigate();
    if (!location.state || !location.state.movie) {
        navigate('/movies');
        return null;
    }
    // Destructure movie data from location state
    const { movie } = location.state;  

    return (
        <div className="movieDetailsContainer">
            <div className="leftColumn">
                <MovieOverview title="Overview" description={movie.overview} />
                <MovieCast cast={movie.cast || []} />
                <MovieReviews movieId={movie.id} />
            </div>

            <div className="rightColumn">
                <MovieOther
                rating={movie.vote_average}
                releaseDate={movie.release_date}
                popularity={movie.popularity}
                voteCount={movie.vote_count}
                genreIds={movie.genre_ids || []}
                />
            </div>
      </div>
    );


}

