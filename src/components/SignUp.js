import React,{useState} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore"; 
import {db} from '../firebase'

// //context create
// export const UserContext = React.createContext();
export var UserId="AJeLm6jiYpYrzyVkhxThfTB9jrW2";
export default function SignUp() {
    const [Email,setEmail]=useState("")
    const [Password,setPassword]=useState("")
    const [FName,setFName]=useState("")
    const [LName,setLName]=useState("")
    const docData = {
      email:Email,
      password: Password,
      fname:FName,
      lname:LName
    };
    // var id=user.uid.toString()
    // var col="users"
    async function insertData(user_id){
      await setDoc(doc(db, "users",user_id), docData);
      console.log("data inserted in db");
    }
    const handleSignUp=()=>{
      createUserWithEmailAndPassword(auth,Email,Password)
          .then((userCredential)=>{
              const user=userCredential.user;
              UserId=user.uid
              console.log("UserId:",UserId)
              insertData(user.uid)
              console.log("successfully created account")
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
          });
    }

    const check=()=>{
      
      if(docData.email==="" && docData.password==="")
      {
        document.getElementById("new").innerHTML="Enter Email and Password"
      }
      else if(docData.email==="")
      {
        document.getElementById("new").innerHTML="Enter Email"
      }
      else if(docData.password==="")
      {
        document.getElementById("new").innerHTML="Enter Password"
      }
      else{
        handleSignUp();
      }
    }
    const pass=()=>{
      if(auth.currentUser){
      window.location.replace("/");
    }
    } 
    function todo(){
       check();
       setTimeout(pass, 3000)
      }
  return (
    <div>
      <br/>
      <br/>

      <div className="container">
        <div className="text-center"><h2>SignUp</h2></div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" onChange={(event)=>setFName(event.target.value)}/>
        </div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Enter Name" onChange={(event)=>setLName(event.target.value)}/>
        </div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address<b className='text text-danger'>*</b></label>
        <input type="email" className="form-control" id="exampleFormControlInput3" placeholder="Enter Email" onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className="my-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Password<b className='text text-danger'>*</b></label>
        <input type="password" className="form-control" id="exampleFormControlInput4" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/>
        </div>
          <div className="text text-center text-danger fw-bold" id="new"></div>
        <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={todo }>SignUp</button>
        </div>
        <div>
        <div>Already have an account? <a href="/login">Login</a></div>
      </div>
      </div>
    </div>
  )
}
