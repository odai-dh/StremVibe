import React from "react";
import "../../css/singleMoviePage.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";




export default function MovieCast({ cast }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Number of cast members to display at a time
  const visibleCastCount = 5;

  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cast.length - visibleCastCount)
    );
  };
  // Get the visible cast members based on the current index
  const visibleCast = cast.slice(currentIndex, currentIndex + visibleCastCount);

  return (
    <div className="movieCast">
     <div className="cast-header">
        <h2>Cast</h2>
        <div className="cast-navigation">
          <FaArrowLeft onClick={handlePrevClick} className="arrow" />
          <FaArrowRight onClick={handleNextClick} className="arrow" />
        </div>
      </div>
      
      {/* Render the visible cast members */}
      <ul>
        {visibleCast.map((actor) => (
          <li key={actor.id}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} 
              alt={actor.name} 
            />
            {/* {actor.name} as {actor.character} */}
          </li>
        ))}
      </ul>
    </div>
  );
}