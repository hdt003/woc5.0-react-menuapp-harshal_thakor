import { collection, doc, setDoc } from 'firebase/firestore';
import React, {  useEffect ,useState } from 'react'
import {db} from '../firebase'
import { getDocs,query,where,orderBy,collectionGroup } from "firebase/firestore";
import { auth } from '../firebase';
// var sum=0
export default function Cart(props) {
  console.clear();
    let [userId,setUserId]=useState("")
    let [array,setArray]=useState([])
    let [runonce,setrunonce]=useState(0)
    let [ct,setct]=useState(0)
    async function fetchData() {
        setArray([]);
        console.log("fetchdata")
        const querySnapshot = await getDocs(query(collection(db,"cart",props.uid,"orders")));
        querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().name,doc.data().description);
        setct(++ct)        
        // console.log(doc.data().price) 
        setArray(array => [...array, doc.data()]);
      });
    }
    
      useEffect(()=>{
        
          if(runonce==0){
          setUserId(props.uid)
          console.log("UseEffect")
          fetchData();
          setrunonce(1);
          }
      },[])

  return (
    <div className='container  text-center'>

      <br/>
      <br/>
      {auth.currentUser && userId?<div >
              {array.length?<div><div className="text-center">
                <div className='row'>
                <div className='fs-1 fw-bold col-6'>Your Cart</div>
                <div className='fs-1 fw-bold col-6'>Total Items: {ct}</div></div>
                <br />
                <button className="btn btn-danger fw-bold btn-lg">Order & Pay</button>
              </div>
              <br /></div>:<h3>Your Cart is Empty</h3>}
                {array.map((element,index)=>{
                return <div className="col-12 itemmm d-flex justify-content-center" key={index} >
                    
                    <div className="card mb-3" style={{maxWidth: "600px"}}>
                    <div className="row g-0">
                      <div className="col-6">
                        <img src={element.img} className="img-fluid rounded-start" alt="..." style={{minHeight:"200px",maxHeight:"200px",minWidth:"200px",maxWidth:"600px"}}/>
                      </div>
                      <div className="col-6" style={{background:`${props.mode==="light"?"white":"black"}`}} >
                        <div className={`card-body text text-${props.mode==="light"?"dark":"white"}`} style={{background:`${props.mode==="light"?"white":"black"}`}}>
                          <h5 className="card-title fw-bold">{element.name}</h5>
                          <p className="card-text">Restaurant: {element.description}</p>
                          <p className="card-text fs-3 fw-bold">&#8377; {element.price}</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Item 
                  img={element.img?element.img:"image"} 
                  description={element.description?element.description:"description"}
                  food_type={element.food_type?element.food_type:"Lunch"}
                  price={element.price?element.price:"100"}
                  popularity= {element.popularity?element.popularity:"0"}
                  type={element.type?element.type:"not found"}
                  video={element.video?element.video:"video not found"} 
                  name={element.name?element.name:"name"}
                  review={element.review}
                  func={pull_data}
                  address={element.address}
                  mode={props.mode}
                  uid={props.uid}/>  */}
              </div>
              })
            }  
            
            </div>:"Sign Up or Login Please"
}
    </div> 
  )
}


{/* <div className="container my-4" id="area">
<br />
    <div>
    <h1 className="text-center" style={{color: `${props.mode==="light"?"black":"white"}`}}>Your Cart</h1>
    <div className="container">
    <div className="row">
            {
              
              arr1.map((element,index)=>{
                return  <div className="col-sm-12 col-md-6 col-lg-4 itemmm" key={index} >
                  <Item 
                  img={element.img?element.img:"image"} 
                  description={element.description?element.description:"description"}
                  food_type={element.food_type?element.food_type:"Lunch"}
                  price={element.price?element.price:"100"}
                  popularity= {element.popularity?element.popularity:"0"}
                  type={element.type?element.type:"not found"}
                  video={element.video?element.video:"video not found"} 
                  name={element.name?element.name:"name"}
                  review={element.review}
                  func={pull_data}
                  address={element.address}
                  mode={props.mode}
                  uid={props.uid}/>
              </div>
              })
            }
             
    </div> */}
     {/* <button className="btn btn-primary" onClick={insertData}>insert data in db</button> */}
    
    {/* <button className="btn btn-primary" onClick={func}>isTrue</button>
    <br/> */}
    {/*
    <br/>
    <button className="btn btn-primary" onClick={deleteData}>delete data in db</button>
    <br/>
    <br/>*/}

    {/* </div>
    
    </div>
</div> */}
