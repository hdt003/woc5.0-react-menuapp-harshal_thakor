import React from "react";
import "../css/Navbar.css";

function NavBar() {
  return (
    <>
          <nav>
      <div className="left-side">
        <input type="checkbox"/>
        <div className="nav-links">
          <h3>Menu App</h3>
          <div className="nav-link-wrapper"><a href="/">Home</a></div>
          <div className="nav-link-wrapper"><a href="/">About</a></div>
          <div className="nav-link-wrapper"><a href="/">Projects</a></div>
          <div className="nav-link-wrapper"><a href="/">Contact</a></div>
        </div>
      </div>
      <div className="right-side">
      <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success " type="submit">Search</button>
            </form>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

    </nav>
    </>
  );
}

export default NavBar;