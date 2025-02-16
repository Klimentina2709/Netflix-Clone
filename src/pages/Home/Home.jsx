import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImage from "../../assets/hero.jpg";
import heroTitle from "../../assets/titleHero.png";
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroImage} alt="hero image" className="heroImage" />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className="captionImage" />
          <p>
            Just a perfect mix of adventure and magic. come along on an exciting
            journey that should give you unforgettable experience{" "}
          </p>
          <div className="btns">
            <button className="btn">
              <FaPlay className="icon" /> Play
            </button>
            <button className="btn darkBtn">
              <FaInfoCircle className="icon" /> More info
            </button>
          </div>
          <div className="first">
            <TitleCards title={"Popular on Netflix"} category={"now_playing"} />
          </div>
        </div>
      </div>
      <div className="moreCards">
        <TitleCards title={"Only on Netflix"} category={"upcoming"} />
        <TitleCards title={"Popular"} category={"popular"} />
        <TitleCards title={"Top Picks for you"} category={"top_rated"} />
        <TitleCards title={"Most Watched"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
