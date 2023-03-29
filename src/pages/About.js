import React from "react";
import About_img from "../assets/robot1.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${About_img})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Robotcup Ensi is an annual robotics event that takes place at Ensi
          University. Participants from all over the country come to participate
          in our challenges, which are divided into three categories. The
          challenges test the participants' skills in building and programming
          robots to complete specific tasks. Robotcup Ensi has a long history of
          promoting innovation and creativity in the field of robotics, and
          offers participants the opportunity to showcase their talents and
          compete for prizes.
        </p>
      </div>
    </div>
  );
}

export default About;
