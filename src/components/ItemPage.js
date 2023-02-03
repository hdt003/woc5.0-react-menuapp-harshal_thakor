import React from 'react'
import "../css/Itempage.css"
import vegg from "../images/veg.png"
import nonvegg from "../images/nonveg.png"
export default function ItemPage(props) {
  
  function content()
  {
    console.log("description:",props.description)
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
        <button className="btn btn-danger fs-4 shadoww"><b>Order Now</b></button></div>
        </b>
        </div>
      </div>
  </div>
)
}
