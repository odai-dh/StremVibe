import React from "react";

// MovieTrailer component to display the movie trailer
export default function MovieTrailer({ trailerKey, title }) {
 if (!trailerKey) {
    return <p>No trailer available</p>;
  }

  return (
    // Display the movie trailer
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title={title}
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}