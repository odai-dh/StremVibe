import MoviesButtons from "../ArchivePage/MoviesButtons";
import "../../css/jumboHeader.css";

export default function MoviesJumboHeader({ 
  image, 
  title, 
  description, 
  onPlayButtonClick, 
  onAddToLikedMovies 
}) {
  const defaultImage = "/background-videos.jpg";

  const isInvalidImage = !image || image === "https://image.tmdb.org/t/p/originalnull";

  return (
    <div className="moviesjumboheader">
      <img src={isInvalidImage ? defaultImage : image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>

      <MoviesButtons 
        onPlayButtonClick={onPlayButtonClick} 
        onAddToLikedMovies={onAddToLikedMovies} 
      />
    </div>
  );
}
