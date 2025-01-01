import React from "react";
import "../styles/main.css";

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <img src="/assets/images/main.jpg" alt="Main" className="main-image" />
      <h2 className="main-caption">Welcome to ILLIT Calendar</h2>
    </div>
  );
};

export default Main;
