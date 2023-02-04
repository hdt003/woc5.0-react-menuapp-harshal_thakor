import React, { useState } from "react";
import "../css/Navbar.css";
import {auth} from "../firebase"
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

function logout(){
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log("log-out successful.")
  }).catch((error) => {
    // An error happened.
    console.log("log-out Unsuccessful.Try again.")
  });
}
function logOutAndGoToSignUp()
{
  logout();
  window.location.replace("/SignUp");
}
export default function NavBar(props) {
  // useState(()=>{
  //   props.togglemode()
  // },[])
  return (
    <>
     {/* style={{backgroundColor: `${props.mode}==="light"?"white":"black" !important` ,color:`${props.mode}==="light"?"black":"white"` }} */}
      <nav style={{background: `${props.mode==="light"?"white":"black"}`,color:"black !important"}} className="fixed-top">
      <div className="left-side" >
        <input type="checkbox"/>
        <div className="nav-links" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
          
          <h3><img src="https://www.linkpicture.com/q/7896.png" alt="..." height="38px" width="35px"/></h3>
          <h3 style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>Menu App</h3>
          <div className="nav-link-wrapper hover-underline-animation"><Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/">Home</Link></div>
          <div className="nav-item dropdown hover-underline-animation">
          <Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="nav-link dropdown-toggle " to="/#" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Filter By 
          </Link>
          <ul className="dropdown-menu " style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="hover-underline-animation dropdown-item" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/#">Type &raquo;</Link>
              <ul className="dropdown-menu dropdown-submenu" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
                  <li>
                    <Link className="dropdown-item hover-underline-animation"style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}  to="/Breakfast">Breakfast</Link>
                  </li>
                  <li>
                    <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/Lunch">Lunch</Link>
                  </li>
                  <li>
                    <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/Dinner">Dinner</Link>
                  </li>
                </ul></li>
            <li>
              <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/#">Food Type &raquo;</Link>
              <ul className="dropdown-menu dropdown-submenu" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/Veg">Veg.</Link>
                </li>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/Non_Veg">Non-Veg.</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/#">
              Popularity &raquo;
              </Link>
              <ul className="dropdown-menu dropdown-submenu" style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/htol">Higest to Lowest</Link>
                </li>
                <li>
                  <Link style={{background:`${props.mode==="light"?"white":""}`,color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} className="dropdown-item hover-underline-animation" to="/ltoh">Lowest to Highest</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="nav-link-wrapper hover-underline-animation"><Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/contact">Contact</Link></div>
        {/* <div className="nav-link-wrapper hover-underline-animation"><Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}} to="/">About</Link></div> */}
        <div className="nav-link-wrapper hover-underline-animation px-3 pt-3">
          <div className="d-flex justify-content-around">
        <p  style={{color: `${props.mode==="light"?"black":"white"}`}}>switch Modes </p>
        <p className="px-1"> </p>
        <label className="switch">
        <input  type="checkbox" onClick={() => {props.togglemode();props.alert()}}/>
        <span className="slider round"></span>
        </label>
        </div>
        </div>
        
         {/* ////// */}
      {/* <label for="theme" className="theme">
      <span>Light</span>
      <span className="theme__toggle-wrap">
        <input
          type="checkbox"
          className="theme__toggle"
          id="theme"
          role="switch"
          name="theme"
          value="dark"
          onClick={() => {props.togglemode();props.alert()}}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span
          ><span className="theme__icon-part"></span>
        </span>
      </span>
      <span>Dark</span>
    </label> */}
    
      {/* ///////// */}
        </div>
      </div>
      <div className="right-side">
      
      <div className="">
       
            {/* //uncomment for dark mode */}
      {/* <button className="btn btn-primary btn-sm w-25" onClick={() => {props.togglemode();props.alert()}}>mode</button> */}
        {auth.currentUser &&<div className="px-2 mx-2 hover-underline-animation" ><Link to="/Profile"  style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}>Profile </Link></div>}
        {auth.currentUser && <div className="px-2 mx-2 nav-link-wrapper hover-underline-animation"><Link style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}  onClick={logOutAndGoToSignUp}> Logout</Link></div>}
         {!auth.currentUser &&<div className="px-2 mx-2 hover-underline-animation"><Link to="/login" style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}> Login </Link></div>}
        {!auth.currentUser && <div className="px-2 mx-2 hover-underline-animation"><Link to="/SignUp"  style={{color: `${props.mode==="light"?"black":"white"}`, "textDecoration": "none"}}> SignUp </Link></div>} 
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