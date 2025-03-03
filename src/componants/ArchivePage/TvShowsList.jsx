import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiCalendarDateRange } from "react-icons/hi2";
import StarSmaller from "./StarSmaller";
import fetchTvShows from "../../api/TMDB/fetchTvShows";
import "../../css/starSmaller.css";
import "../../css/movieGrid.css";

export default function TvShowsList() {
  const [filteredTvShows, setFilteredTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTvShows();
        setFilteredTvShows(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div className="load-wrapp">
    <div className="load-3">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="MovieGrid">
      {filteredTvShows.map((tvShow) => (
        <button
          className="inner"
          key={tvShow.id}
          onClick={() =>
            navigate(`/tv-shows/${generateSlug(tvShow.name)}`, {
              state: {item: tvShow },
            })
          }
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
            alt={tvShow.name}
          />
          <div className="content">
            <span className="time">
              <HiCalendarDateRange size={20} fill="#999999" />
              <p>{tvShow.first_air_date}</p>
            </span>
            <StarSmaller rating={tvShow.vote_average} />
          </div>
        </button>
      ))}
    </div>
  );
}