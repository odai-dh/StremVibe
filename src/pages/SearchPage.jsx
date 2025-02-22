import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";
import "../css/searchPage.css";
import { useLocation, useNavigate } from "react-router";

export default function SearchPage() {
  const location = useLocation();
  const { results, query } = location.state || {};
  const navigate = useNavigate();

  if (!results?.results) {
    return <div>No results found</div>;
  }

  // Generate slug for the URL
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  // Function to change the text if it is more than 20 words
  const changeText = (text) =>
    text?.split(" ").length > 20
      ? text.split(" ").slice(0, 20).join(" ") + "..."
      : text;


  return (
    <main>
      <div className="container search">
        <Header />

        <h1>Search Results For: {query}</h1>
        {results.results.map((movie) => (
          <button
            key={movie.id}
            className="searchResult"
            onClick={() =>
              navigate(`/movies/${generateSlug(movie.title)}`, {
                state: { movie },
              })
            }
          >
            <div>
              <h2>{movie.original_title}</h2>
              <p>{changeText(movie.overview)}</p>
            </div>

            <p className="button">Go To Movie</p>
          </button>
        ))}

        <Community />
      </div>
      <Footer />
    </main>
  );
}
