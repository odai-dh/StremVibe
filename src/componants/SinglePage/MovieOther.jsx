import React from "react";
import "../../css/singleMoviePage.css";
import { genreMapping } from "./genres";
import StarRating from "./StarRating";
import { MdHowToVote } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsStars } from "react-icons/bs";
import { RiStarSLine } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

// MovieOther component to display additional movie information
export default function MovieOther({  rating, releaseDate, popularity, voteCount, children, genreIds }) {
    const genreNames = genreIds.map(id => genreMapping[id] || "Unknown");

  return (
    <div className="movieOtherContainer">

        <div className="movieOther">
            <div className="movieOtherItem">
                <HiOutlineCalendarDateRange size={24} />

                <h2>Release Date</h2>
            </div>
            <p>{releaseDate}</p>

        </div>
        
        <div className="movieOther">
            <div className="movieOtherItem">
                <RiStarSLine size={24} />
                <h2>Rating</h2>
            </div>
            <StarRating title={"IMDb"} rating={rating} />
        </div>


        <div className="movieOther">
            <div className="movieOtherItem">
                <HiOutlineSquares2X2 size={24} />
                <h2>Genres</h2>
            </div>
            <div className="genreButtons">
              {genreNames.map((genre, index) => (
                <a key={index} className="genreButton" href={`/genre/${genre}`}>{genre}</a>
              ))}
            </div>        
        </div>
      
        <div className="movieOther">
            <div className="movieOtherItem">
                <BsStars size={24} />

                <h2>Popularity</h2>
            </div>
            <p>{popularity}</p>
        </div>
      


        <div className="movieOther">
            <div className="movieOtherItem">
                <MdHowToVote size={24} />
                <h2>Vote Count</h2>
            </div>
            <p>{voteCount}</p>
        </div>


        {children}
    </div>
  );
}