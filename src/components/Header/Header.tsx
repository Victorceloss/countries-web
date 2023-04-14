import React from "react";

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      <nav className="header-nav">
        <button className="nav-button" id="toggle-darkmode">
        <i className="fa-solid fa-moon"></i> Dark Mode
        </button>
        <button className="nav-button" id="github-button">
        <i className="fa-brands fa-github-alt"></i> Github
        </button>
      </nav>
    </header>
  );
};