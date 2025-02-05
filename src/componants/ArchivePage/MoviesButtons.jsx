import { FaRegThumbsUp, FaPlay} from "react-icons/fa";
import "../../css/movieButtons.css";

export default function MoviesButtons({ onPlayButtonClick, onAddToLikedMovies }) {
  return (
    <div className="MoviesButtons">
      <button className="playButton" onClick={onPlayButtonClick}>
        <FaPlay />
        Play Now
      </button>
      <button className="thumbsup" onClick={onAddToLikedMovies}>
        <FaRegThumbsUp fill="white" />
      </button>
    </div>
  );
}
