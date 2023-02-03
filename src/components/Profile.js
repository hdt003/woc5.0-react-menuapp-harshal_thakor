import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import { getDoc } from "firebase/firestore"; 
import { doc } from "firebase/firestore"; 
import Spinner from './Spinner';

export default function Profile(props) {
    let [fname,setFName]=useState("")
    let [lname,setLName]=useState("")
    let [password,setPassword]=useState("")
    let [email,setEmail]=useState("")
    let [userId,setUserid]=useState("")
    // let [loading,setLoading]=useState(true)
    useEffect(() => {
        async function fetchData() {
            // You can await here
            const docRef =  doc(db, "users", props.uid);
            // await setDoc(doc(db, "users",user_id), docData);
            const docSnap =  await getDoc(docRef);
            if (docSnap.exists()) {
                let data=docSnap.data();
                console.log("Userdata:",data);
                setEmail(data.email);
                setFName(data.fname);
                setLName(data.lname);
                setPassword(data.password);
                setUserid(props.uid);
                
            }
            else {
            // doc.data() will be undefined in this case
            console.log("Data not load!");
            }     
        }
        fetchData();
      });
  return (
    <div>
        {/* {loading && <Spinner/>} */}
        <div className="container">
            
            {/* <h2>Uid: {props.uid}</h2> */}  
            <div >
                <br />
            <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>First Name: {fname}</h2>
            <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>Last Name: {lname}</h2>
            <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>Email: {email}</h2>
            {/* <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>Password: {password}</h2> */}
            {/* <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>Gender:</h2>
            <h2 className='p-3 bg-info bg-opacity-10 border border-info  rounded-3'>Age:</h2> */}
            </div>
        </div>
    </div>
  )
}