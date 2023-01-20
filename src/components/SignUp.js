import React,{useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function SignUp() {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")

    const handleSignUp=()=>{
        createUserWithEmailAndPassword(auth,Email,Password)
          .then((userCredential)=>{
              const user=userCredential.user;
              console.log(user)
              alert("successfully created account")
              window.location.replace("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
          });
    }
  return (
    <div>
      <div className="container">
        <div className="text-center"><h2>SignUp</h2></div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name"/>
        </div>
      <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleFormControlInput3" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/>
        </div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleSignUp} >SignUp</button>
        </div>
        <div>
        <div>Already have an account?<a href="/login">Login</a></div>
      </div>
      </div>
    </div>
  )
}
