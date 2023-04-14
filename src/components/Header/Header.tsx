import React from "react";

import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Where in the world?</h1>
      <nav className="header-nav">
        <button className="nav-button" id="toggle-darkmode">
          Dark Mode
        </button>
        <button className="nav-button" id="github-button">
          Github
        </button>
      </nav>
    </header>
  );
};