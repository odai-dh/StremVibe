import React from "react";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import CastPage from "../componants/CastPage/CastPage";
import Community from "../componants/HomePage/Community/Community";

export default function ActorPage() {
  return (
    <>
      <Header />
      <div className="container">
        <CastPage />
        <Community
          title="You May Also Like"
          description="Here are some other actors you may like"
        />
      </div>
      <Footer />
    </>
  );
}