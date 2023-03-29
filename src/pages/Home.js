import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>ROBOCUP_PAY</h1>
        <p></p>
        <Link to="/menu">
          <button> KNOW MORE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
