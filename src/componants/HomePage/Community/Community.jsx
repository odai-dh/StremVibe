import "../../../css/community.css";

export default function Community() {
  return (
    <section className="Community">
      <div>
        <h2>Start Searching Now!</h2>
        <p>
          Where are you waiting on? The movie business doesen't wait!
        </p>
      </div>

      <a className="freeTrailButton" href="/movies" aria-label="Search movies">Search Movies</a>

      <img loading="lazy" src="/background-videos.jpg" alt="Background Videos" />
    </section>
  );
}
