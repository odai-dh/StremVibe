import MovieList from "../componants/ArchivePage/MovieList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";

export default function ArchiveMoviePage() {
  return (
    <>
      <Header />

      <div className="container">
        <MovieList />
        <Community />
      </div>
      <Footer />
    </>

  );
}
