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
    if (!location.state || !location.state.item) {
        navigate('/movies');
        return null;
    }
    // Destructure movie data from location state
    const { item } = location.state;  

    return (
        <div className="movieDetailsContainer">
            <div className="leftColumn">
                <MovieOverview title="Overview" description={item.overview} />
                <MovieCast cast={item.cast || []} />
                <MovieReviews movieId={item.id} />
            </div>

            <div className="rightColumn">
                <MovieOther
                rating={item.vote_average}
                releaseDate={item.release_date}
                popularity={item.popularity}
                voteCount={item.vote_count}
                genreIds={item.genre_ids || []}
                />
            </div>
      </div>
    );


}

