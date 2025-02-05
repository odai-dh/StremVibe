import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Genres from "../componants/HomePage/Genres/Genres";

export default function GenresPage() {
  return (
    <main>
      <Header />
      <div className="container">
        <Genres />
      </div>
      <Footer />
    </main>
  );
}
