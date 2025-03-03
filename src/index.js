import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css';
import App from './App';
import { APIProvider } from './api/TMDB/fetchAPIMovies';
import { LikedMoviesProvider } from './componants/LikedMovies/LikedMoviesContext';
import SingleMoviePage from './pages/SingleMoviesPage';
import ArchiveMoviePage from './pages/ArchiveMoviePage';
import GenreArchivePage from './pages/GenreArchivePage';
import LikedMoviePage from './pages/LikedMoviePage';
import GenresPage from './pages/GenresPage';
import SearchPage from './pages/SearchPage';
import ArchiveTvShowsPage from './pages/ArchiveTvShowsPage';
import SingleTvShowPage from './pages/SingleTvShowPage';
import ActorPage from './pages/ActorPage';

// import Login from "./componants/Database/Login";
// import Signup from "./componants/Database/Signup";
// import ProfilePage from "./componants/ProfilePage/ProfilePage";

// Set global SEO elements as it's a fake project
const setGlobalSEO = () => {
  document.title = "Search the best movies - Movie site!";

  const meta = document.createElement('meta');
  meta.name = "robots";
  meta.content = "noindex, nofollow";
  document.head.appendChild(meta);

  const link = document.createElement('link');
  link.rel = "icon";
  link.href = "/favicon.ico";
  document.head.appendChild(link);
};

setGlobalSEO();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LikedMoviesProvider>
      <APIProvider>
        <BrowserRouter>
          <Routes>
            {/* Define routes for the app */}
            <Route path='*' element={<App />} />
            <Route path='/movies' element={<ArchiveMoviePage />} />
            <Route path='/movies/:slug' element={<SingleMoviePage />} />
            <Route path='/genre/:genreName' element={<GenreArchivePage />} />
            <Route path='/genres' element={<GenresPage />} />
            <Route path='/liked' element={<LikedMoviePage />} />
            <Route path='/search-results' element={<SearchPage />} />
            <Route path='/tv-shows' element={<ArchiveTvShowsPage />} />
            <Route path='/tv-shows/:slug' element={<SingleTvShowPage />} />
            <Route path='/cast/:id' element={ <ActorPage /> } /> 
            {/* <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/profile' element={<ProfilePage />} />  */}
          </Routes>
        </BrowserRouter>
      </APIProvider>
    </LikedMoviesProvider>
  </React.StrictMode>
);