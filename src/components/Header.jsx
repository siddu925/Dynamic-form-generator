import React from "react";
import './Header.css';
function Header({ toggleDarkMode }) {
  return (
    <header className="header">
      <h1>Dynamic Form Generator</h1>
      <button onClick={toggleDarkMode} className="toggle-mode">
      Switch Modes
      </button>
    </header>
  );
}
export default Header;
