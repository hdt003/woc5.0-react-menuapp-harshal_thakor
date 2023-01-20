import React from "react";
import "../css/Navbar.css";
import {auth} from "../firebase"
import { signOut } from "firebase/auth";

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("log-out successful.")
  }).catch((error) => {
    // An error happened.
  });
}
function logOutAndGoToSignUp()
{
  logout();
  window.location.replace("/SignUp");
}
export default function NavBar() {
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
                    <a className="dropdown-item" href="/Breakfast">Breakfast</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Lunch">Lunch</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Dinner">Dinner</a>
                  </li>
                </ul></li>
            <li>
              <a className="dropdown-item" href="/#">Food Type &raquo;</a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/Veg">Veg.</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Non_Veg">Non-Veg.</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
              Popularity &raquo;
              </a>
              <ul className="dropdown-menu dropdown-submenu">
                <li>
                  <a className="dropdown-item" href="/htol">Higest to Lowest</a>
                </li>
                <li>
                  <a className="dropdown-item" href="/ltoh">Lowest to Highest</a>
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
        
        {auth.currentUser &&<div className="col-3 mx-2" ><a href="/Profile"  style={{color: "white", "text-decoration": "none"}}>Profile </a></div>}
        {auth.currentUser && <div className="col-3 mx-2 nav-link-wrapper"><a style={{color: "white", "text-decoration": "none"}}  onClick={logOutAndGoToSignUp}> Logout</a></div>}
        {!auth.currentUser &&<div className="col-3 mx-2"><a href="/login" style={{color: "white", "text-decoration": "none"}}> Login </a></div>}
        {!auth.currentUser && <div className="col-3 mx-2 "><a href="/SignUp"  style={{color: "white", "text-decoration": "none"}}> SignUp </a></div>}
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