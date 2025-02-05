import MovieCart from "./MovieCart";

export default function MoviesGenres() {
  return (
    <div className="container">
      <div>
        <h2>Our Genres</h2>
      </div>

      <div className="movieGenres">
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
        <MovieCart />
      </div>
    </div>
  );
}
