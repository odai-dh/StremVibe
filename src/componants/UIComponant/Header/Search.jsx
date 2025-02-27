import React, { useState } from "react";
import "../../../css/searchBar.css";
import fetchSearchResults from "../../../api/TMDB/fetchSearchResults";
import { useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

export default function Search({ isOpen }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const results = await fetchSearchResults(searchQuery);
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
            placeholder="Search Movies..."
            className="search-input"
            onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
            autoFocus
          />

          <button type="submit" aria-label="Search">
            <MdSearch size={24} fill="var(--mainRed)" />
          </button>
        </form>
  );
}
