import React, { useState } from "react";
import "../../../css/searchBar.css";
import fetchSearchResults from "../../../api/TMDB/fetchSearchResults";
import { useNavigate } from "react-router-dom";

export default function Search({ isOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Function to handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // Fetch search results based on the search query
      const results = await fetchSearchResults(searchQuery);
      // Navigate to the search results page with the search query and results
      navigate("/search-results", {
        state: {
          results: results,
          query: searchQuery,
        },
      });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  if (!isOpen) return null;

  return (

        <form className="searchBar" onSubmit={handleSearch}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="search-input"
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            autoFocus
          />

          <button type="submit">Search Movies</button>
        </form>
  );
}
