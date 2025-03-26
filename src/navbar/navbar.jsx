import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css"

const navbar = () => {
  return (
    <div className="section">
      <div className="left">
        <img className="logo" src={logo} alt="logo" />
        <h2>Carboncrunch</h2>
      </div>
      <div>
        <ul className="center">
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right">
        <button className="btn1">Login</button>
        <button className="btn2">Book Demo</button>
      </div>
    </div>
  );
};

export default navbar;
