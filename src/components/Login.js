import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import {auth} from '../firebase'
import * as ReactDOM from 'react-dom';

export default function Login() {

    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")

    const handleLogin=()=>{
      signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        alert("Successfully Logged In")
        window.location.replace("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode)
      });
    }
    function onKeyPressed(e) {
      console.log(e.key);
    }
    function onMouseUppp()
    {
      console.log("mouse up")
    }

  return (
    <div>
      <div className="container">
        <div className="text-center"><h2>Login</h2></div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
        </div>
      <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput3" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/>
        </div>
        <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary" id="myBtn" onKeyDown={onKeyPressed} onMouseUp={onMouseUppp} onClick={handleLogin} tabIndex={0}>Login</button>

        </div   >
        <div>Don't have an account?<a href="/SignUp">SignUp</a></div>
      </div>
    </div>
  )
}
