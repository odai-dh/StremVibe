import TvShowsList from "../componants/ArchivePage/TvShowsList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";

export default function ArchiveTvShowsPage() {
  return (
    <>
      <Header />

      <div className="container">
        <TvShowsList />
        <Community />
      </div>
      <Footer />
    </>

  );
}
