import React from "react";
import "../styles/header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="logo">ILLIT Calendar</h1>
      <nav className="nav-menu">
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#illit">ILLIT</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="signup-button">회원가입</button>
        <button className="login-button">로그인</button>
      </div>
    </header>
  );
};

export default Header;
