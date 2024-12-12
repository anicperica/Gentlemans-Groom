import HomeSection_1 from "../../components/HomeSection_1/HomeSection_1";
import Header from "../../components/Header/Header";
import Navbar from "../../components/navbar/Navbar";
import Foter from "../../components/Foter/Foter";
import HomeSection_Service from "../../components/HomeSection_Service/HomeSection_Service";
import "./HomePage.css";
import FindSection from "../../components/FindSection/FindSection";
export default function HomePage() {
  return (
    <>
      <div className="navbar-header-wrapper">
        <Navbar />
        <Header />
      </div>
      <HomeSection_1 />
      <HomeSection_Service />
      <FindSection />
      <Foter />
    </>
  );
}
