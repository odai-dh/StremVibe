import Genres from "../componants/HomePage/Genres/Genres";
import Devices from "../componants/HomePage/Devices/Devices";
import QandA from "../componants/HomePage/QandA/QandA";
import Community from "../componants/HomePage/Community/Community";
import Footer from "../componants/UIComponant/Footer/Footer";
import Header from "../componants/UIComponant/Header/Header";
import JumboHeaderHome from "../componants/HomePage/JumboHeader/JumboHeader";
import "../css/homePage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <div className="container">
      <JumboHeaderHome />
      <Genres amount="5" />
      <Devices />
      <QandA />
      <Community />
      </div>
      <Footer />
    </div>
  );
}
