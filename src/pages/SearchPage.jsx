import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";
import "../css/searchPage.css";
import { useLocation, useNavigate } from "react-router";

export default function SearchPage() {
  const location = useLocation();
  const { results, query, type } = location.state || {};
  const navigate = useNavigate();

  if (!results) {
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
        {results.results.map((item) => (
          <button
            key={item.id}
            className="searchResult"
            onClick={() =>
              navigate(`/${type === "movie" ? "movies" : "tv-shows"}/${generateSlug(item.title || item.name)}`, {
                state: { item },
              })
            }
          >
            <div>
              <h2>{item.title || item.name}</h2>
              <p>{changeText(item.overview)}</p>
            </div>

            <p className="button">Go To {type === "movie" ? "Movie" : "TV Show"}</p>
          </button>
        ))}

        <Community />
      </div>
      <Footer />
    </main>
  );
}
