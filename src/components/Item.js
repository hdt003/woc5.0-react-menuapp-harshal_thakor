import React, { useEffect, useState } from 'react'
// import Spinner from './Spinner'
import "../css/item.css"
export const UserContext = React.createContext();

export default function Item(props) {
  var p={}
  useEffect(()=>{
    p={
    img:props.img ,
    description:props.description,
    food_type:props.food_type,
    price:props.price,
    popularity: props.popularity,
    type:props.type,
    review:props.review,
    video:props.video ,
    name:props.name,
    address:props.address
  }
},[])
  function content()
  {
    var arr=[];
    console.log(props.review)
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
  // function temp()
  // {
  //   return (  <div>
  //     <UserContext.Provider img={props.img} 
  //     description={props.description}
  //     food_type={props.food_type}
  //     price={props.price}
  //     popularity= {props.popularity}
  //     type={props.type}
  //     review={props.review}
  //     video={props.video} 
  //     name={props.name}>
  //       <ItemPage />
  //     </UserContext.Provider>
  //   </div>)
  // }
  return (
    <div>
      <div className="my-4 d-flex justify-content-center">
            <div className="card item" style={{width: "100%"}} >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger z-1 fs-6 p-2" style={{left:"92%" }}>&#8377; {props.price}
                    <span className="visually-hidden">New alerts</span>
                </span>
                {/* {<Spinner/>} */}
                <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <hr />
                    <p className="card-text"> {props.description}</p>
                    <p className="rating">
                      <span className="heading">Rating: </span>   
                      {content()}
                      </p>
                    {/* <p>created by {author?author:"unknown"} on {new Date(newdate).toGMTString()}</p> */}
                    <div className='text-center'>
                    <button className="btn btn-sm btn-dark " onClick={() =>props.func(p)}>Order Now</button></div>
                    {/* <a className="btn btn-sm btn-dark d-flex justify-content-center" href="/ItemPage" target="_blank">Order Now</a> */}
                </div>
            </div>
    </div>
    </div>
  )
}