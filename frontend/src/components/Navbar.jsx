import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <a href="#" className="logo">
        Goodness.
      </a>
      <div className="bx bx-menu" id="menu-icons"></div>

      <nav className="navbar">
        <a onClick={() => navigate("/")} className="active">
          Home
        </a>
        <a onClick={() => navigate("/about")}>About</a>
        <a onClick={() => navigate("/journey")}>Education</a>
        <a onClick={() => navigate("/skills")}>Skills</a>
        <a onClick={() => navigate("/contact")}>Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
