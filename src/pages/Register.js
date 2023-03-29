import React from "react";
import PizzaLeft from "../assets/Screenshot_2023-02-25_225110-removebg-preview.png";
import "../styles/Register.css";
import img_face from "../assets/face.jpg";

function Register() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <br />
        <br />
        <br />

        <form id="contact-form" method="POST">
          <div className="namefull">
            <div className="namef">
              <br />
              <h1> Welcome </h1>
              <br />
            </div>
            <br />
            <br />
          </div>
          <div className="namefull">
            <div className="namef">
              <label htmlFor="name"> Name : </label>
              <br />
              <br />

              <input
                name="name"
                placeholder="Enter first name..."
                type="text"
              />
            </div>
            <br />
            <br />
            <div className="namef">
              <label htmlFor="name"> Surname : </label>
              <br />
              <br />

              <input name="name" placeholder="Enter Last name..." type="text" />
            </div>
          </div>
          <br />
          <br />
          <div className="namefull">
            <div className="namef">
              <label htmlFor="email">Amount : </label>
              <br />

              <input
                name="email"
                placeholder="Enter the amount in TND..."
                type="number"
              />
            </div>
            <div className="namef">
              <label htmlFor="name"> Team's name : </label>
              <br />

              <input
                name="name"
                placeholder="Enter name of the team..."
                type="text"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="namef">
            <label htmlFor="message">Comment : </label>
          </div>
          <br />

          <textarea
            rows="6"
            placeholder="Enter your questions or notes..."
            name="message"
            required
          ></textarea>
          <button type="submit"> FINISH PAYMENT </button>
          <br />
          <br />
        </form>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Register;
