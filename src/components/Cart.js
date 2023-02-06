import { collection, deleteDoc, doc } from 'firebase/firestore';
import React, {  useEffect ,useState } from 'react'
import {db} from '../firebase'
import { getDocs,query } from "firebase/firestore";
import { auth } from '../firebase';
import deletee from "../images/delete.png"
export default function Cart(props) {
    console.clear();
    let [userId,setUserId]=useState("")
    let [array,setArray]=useState([])
    let [runonce,setrunonce]=useState(0)
    let [ct,setct]=useState(0)
    async function fetchData() {
        setct(0)
        setArray([]);
        // console.log("fetchdata")
        const querySnapshot = await getDocs(query(collection(db,"cart",props.uid,"orders")));
        querySnapshot.forEach((doc) => {
        setct(++ct)
        setArray(array => [...array, doc.data()]);
      });
    }
    
      useEffect(()=>{
          if(runonce==0){
          setct(0);
          setUserId(props.uid)
          fetchData();
          setrunonce(1);
          }
      },[])

      async function removeFromCart(oid)
      {
        // console.log(oid)
        try{
          await deleteDoc(doc(db,"cart",props.uid,"orders",oid))
          setct(0);
          fetchData();
        }
        catch(error)
        {
          console.log(error)
        }
        console.log("deleted successfully")
      }
  return (
    <div className='container  text-center'>

      <br/>
      <br/>
      {auth.currentUser && userId?<div >
              {array.length?<div><div className="text-center">
                <div className='row'>
                <div className='fs-3 fw-bold col-4'>My Cart</div>
                <div className='fs-3 fw-bold col-4'>Total Items: {array.length}</div>
                <button className="btn btn-danger fw-bold btn-lg col-3">Pay Now</button></div>
                <br />
              </div>
              <br /></div>:<h3 style={{color: `${props.mode==="light"?"black":"white"}`}}>Your Cart is Empty</h3>}
                {array.map((element,index)=>{
                return <div className="col-12 itemmm d-flex justify-content-center " key={index}  >
                    
                    <div className="card mb-3" style={{maxWidth: "503px",minWidth:"503px"}}>
                    <div className="row g-0">
                      <div className="col-6 " style={{minHeight:"200px",maxHeight:"200px",minWidth:"250px",maxWidth:"250px"}}>
                        <img src={element.img} className="img-fluid rounded-start" alt="..." style={{minHeight:"200px",maxHeight:"200px",minWidth:"250px",maxWidth:"250px"}}/>
                      </div>
                      <div className="col-6" style={{background:`${props.mode==="light"?"white":"black"}`}} >
                        <div className={`card-body text text-${props.mode==="light"?"dark":"white"}`} style={{background:`${props.mode==="light"?"white":"black"}`}}>
                          <h5 className="card-title fw-bold">{element.name}</h5>
                          <p className="card-text">Restaurant: {element.description}</p>
                          <div className='row'>
                          <p className="card-text fs-3 fw-bold col-6">&#8377; {element.price}</p>
                          {/* <button className='btn btn-sm btn-danger fw-bold col-2' onClick={insert}><h5>In</h5></button> */}
                          <img className='btn btn-sm fw-bold col-6' src={deletee} style={{width:"80px",height:"63px"}} onClick={()=>{removeFromCart(element.oid)}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              })
            }  
            
            </div>:<h2>Please, Sign Up or Login to add Item in Cart</h2>
}
    </div> 
  )
}


