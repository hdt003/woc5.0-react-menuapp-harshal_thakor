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
          
          <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By 
          </a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="/#">Type &raquo;</a>
              <ul className="dropdown-menu dropdown-submenu">
                  <li>
                    <a className="dropdown-item" href="/#">Breakfast</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">Lunch</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/#">Dinner</a>
                  </li>
                </ul></li>
            <li>
              <a className="dropdown-item" href="/#">Food Type &raquo;</a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/#">Veg.</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">Non-Veg.</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
              Popularity &raquo;
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/#">Higest to Lowest</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/#">Lowest to Highest</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-link-wrapper"><a href="/">Contact</a></div>
        <div className="nav-link-wrapper"><a href="/">About</a></div>
        </div>
      </div>
      <div className="right-side">
      <div className="row">
        <div className="col-3"><a href="/">Profile</a></div>
        <div className="col-3"><a href="/login">Login</a></div>
        <div className="col-3"><a href="/SignUp">SignUp</a></div>
        </div>
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