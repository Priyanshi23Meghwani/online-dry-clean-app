import React from "react";
import "./HeroSection.css";

function HeroSection() {
  const items = JSON.parse(localStorage.getItem('myuser'));
  return (
    <div className="hero-section">
      <div className="hero-section-content">
        
        {/* display name of logged in user*/}
        {items ? <h3>Hello, <strong>{items.name}!</strong> </h3> : ""}
        <h1 className="hero-section-heading">Welcome to Fab Care</h1>
        <h2 className="hero-section-subheading">We care for the clothes you wear.</h2>

      </div>
    </div>
  );
}

export default HeroSection;
