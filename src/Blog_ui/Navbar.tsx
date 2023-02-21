import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src="NORDIC ROSE.png" className="navbar__left" />
      </div>
      <div>
        <ul className="navbar__right">
          <li>
            <Link to="/article">Blog</Link>
          </li>
          <li>About</li>
          <li>Links</li>
          <li>Projects</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
