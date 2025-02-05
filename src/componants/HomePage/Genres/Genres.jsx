import "../../../css/categories.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Genres({ amount }) {
  // Array of category objects with name, image, link, and screenReader
  const categories = [
    {
      name: "Action",
      img: "/genres/action.png",
      link: "/genre/action",
      screenReader:
        "Explore action movies featuring thrilling sequences and intense battles.",
    },
    {
      name: "Adventure",
      img: "/genres/adventure.png",
      link: "/genre/adventure",
      screenReader:
        "Discover adventure movies filled with epic journeys and daring heroes.",
    },
    {
      name: "Comedy",
      img: "/genres/comedy.png",
      link: "/genre/comedy",
      screenReader: "Laugh out loud with our collection of comedy films.",
    },
    {
      name: "Drama",
      img: "/genres/drama.png",
      link: "/genre/drama",
      screenReader: "Experience emotional storytelling with our drama films.",
    },
    {
      name: "Horror",
      img: "/genres/horror.png",
      link: "/genre/horror",
      screenReader:
        "Get spooked with our selection of horror films full of suspense and scares.",
    },
    {
      name: "Animation",
      img: "/genres/animation.png",
      link: "/genre/animation",
      screenReader: "Enjoy beautifully crafted animated films for all ages.",
    },
    {
      name: "Crime",
      img: "/genres/crime.png",
      link: "/genre/crime",
      screenReader: "Dive into crime films full of mystery and intrigue.",
    },
    {
      name: "Documentary",
      img: "/genres/documentary.png",
      link: "/genre/documentary",
      screenReader:
        "Learn from real-life stories with our documentary collection.",
    },
    {
      name: "Family",
      img: "/genres/family.png",
      link: "/genre/family",
      screenReader: "Enjoy heartwarming family-friendly films for all ages.",
    },
    {
      name: "Fantasy",
      img: "/genres/fantasy.png",
      link: "/genre/fantasy",
      screenReader:
        "Step into magical worlds with our fantasy movie selection.",
    },
    {
      name: "History",
      img: "/genres/history.png",
      link: "/genre/history",
      screenReader: "Explore historical films that bring the past to life.",
    },
    {
      name: "Music",
      img: "/genres/music.png",
      link: "/genre/music",
      screenReader: "Experience the magic of music through film.",
    },
    {
      name: "Mystery",
      img: "/genres/mystery.png",
      link: "/genre/mystery",
      screenReader: "Uncover secrets with our collection of mystery films.",
    },
    {
      name: "Romance",
      img: "/genres/romance.png",
      link: "/genre/romance",
      screenReader: "Fall in love with our romantic movie selection.",
    },
    {
      name: "Thriller",
      img: "/genres/thriller.png",
      link: "/genre/thriller",
      screenReader: "Feel the suspense with our collection of thriller films.",
    },
    {
      name: "War",
      img: "/genres/war.png",
      link: "/genre/war",
      screenReader:
        "Experience the intensity of war films and historical battles.",
    },
    {
      name: "Western",
      img: "/genres/western.png",
      link: "/genre/western",
      screenReader: "Ride into the world of Westerns with cowboy adventures.",
    },
  ];

  const displayedCategories = categories.slice(0, amount);

  return (
    <section className="categories">
      <div>
        <h2>Explore Our Wide Variety Of Movie Genres</h2>
        <p>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new.
        </p>
      </div>
      {/* Map through the categories array and display each category */}
      <div className="genresGrid">
        {displayedCategories.map((category, index) => (
          <a
            className="genreSingle"
            key={index}
            href={category.link}
            aria-label={category.screenReader}
          >
            <div className="imageWrapper">
              <img loading="lazy" src={category.img} alt={category.name} />
            </div>
            <div className="inner">
              <h3>{category.name}</h3>
              <FaArrowRightLong fill="white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
