import React, { useEffect, useState } from 'react'
import "../css/Itempage.css"
import vegg from "../images/veg.png"
import nonvegg from "../images/nonveg.png"
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function ItemPage(props) {
  var check=false
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let [p,setp]=useState({})
  useEffect(()=>{
    setp({
    img:props.img ,
    description:props.description,
    food_type:props.food_type,
    price:props.price,
    popularity: props.popularity,
    type:props.type,
    review:props.review,
    video:props.video ,
    name:props.name,
    address:props.address,
    uid:props.uid
  })
},[])
  function content()
  {
    // console.log("description:",props.description)
    var arr=[];
    // console.log(props.review)
    if(props.review)
    {
      var i=1
      for(;i<=props.review;i++)
      {
        arr.push(<span className="fa fa-star checked"></span>)
      }
      for(;i<=5;i++)
      {
        arr.push(<span className="fa fa-star"></span>)
      }
      return arr
    }
    return null
  }
  // if(check){
    function generateString(length) {
      let result = ' ';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
  
      return result;
  }
  async function insertInCart()
  {
    if(props.uid!=="")
    {
    await setDoc(doc(db, "cart",p.uid,"orders",generateString(15)), p);
    // console.log(p);
    console.log("data inserted in db");
    }
    else{
      console.log("Please Login");
    }
  }
  
// }
return (
  <div>
    <br/>
            <br/>
            
      <div className="row">
      {/* d-flex justify-content-evenly */}
        <div className="col-6 column6">
          <div> 
          <img className="position-fixed p-3"src={props.food_type==="Veg"?vegg:nonvegg}  alt="..." width="6%" height="14%"  />
          <img src={props.img} className="rounded shadoww" alt="..." width="100%" height="100%"/>
          <div className="topright"></div>
          </div>
        </div>
        <div className="col-6 column6 px-5" id="name"><b><p className='text-center fs-5'><hr />{props.name}<hr /></p>
        <div className='px-2' >
        <p >{props.description}</p>
        <p>{props.address}</p>
        <p >{props.food_type}</p><p >{props.v}</p>
        <p className="rating">
            <span className="heading">Rating: </span>   
            {content()}
        </p>    
        <p className={`fs-3 text text-`} style={{color: `${props.mode==="dark"?"white":"black"}`}} >&#8377; {props.price}</p>
        </div>
        <div className="text-center">
          <button className="btn btn-danger fw-bold btn-lg" onClick={insertInCart}>Add To Cart</button>
        </div>
        </b>
        </div>
      </div>
  </div>
)
}
