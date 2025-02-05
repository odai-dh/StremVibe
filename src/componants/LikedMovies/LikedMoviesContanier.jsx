import React from "react";
import LikedMoviesList from "./LikedMoviesList";
import Header from "../UIComponant/Header/Header";
import Footer from "../UIComponant/Footer/Footer";
import Community from "../HomePage/Community/Community";
import "../../css/likedMoviePage.css";




export default function LikedMoviesContaner() {
  return (
    <>
      <div className="liked-movies-page">
        <Header />
        <LikedMoviesList />
      </div>
      <div className="container">
        <Community />
      </div>
      <Footer />
    </>
  );
}