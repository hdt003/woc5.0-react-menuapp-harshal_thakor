import React, { useEffect, useState,forceUpdate } from 'react'
import Item from './Item'
// import Spinner from './Spinner'
import Spinner from './loading'

import {db} from '../firebase'
import { getDocs,query,where,orderBy,collectionGroup, doc, setDoc } from "firebase/firestore"; 

import ItemPage from './ItemPage';

export default function Area(props) {
  // console.clear();
  let [loading,setLoading]=useState(true)

  let [array,setArray]=useState([])
  var ranonce = false;

  let [isTrue,setIsTrue]=useState(false)
  let [obj2,setobj2]=useState({})

  let [p,setP]=useState("k")//to check old props with new props
  let [lastmode,setlastmode]=useState("light")
  // let [once,setonce]=useState(0)
  const pull_data=(data) =>{
    setobj2(data)
    console.log("obj2:",obj2);
    setIsTrue(true)  
  }
  function timeBasedFood(date) {
    var hours = date.getHours();
    if((hours>=4 && hours<11) || (hours>=16 && hours<=17))
    return "Breakfast";
    else if(hours>=11 && hours<16)
    return "Lunch";
    else if((hours>=18 && hours<=23) || (hours>=0 && hours<=3) )
    return "Dinner";
  }
  function temp(){
    if(props.mode!==lastmode )
    {
      console.log("lastmode: ",lastmode);
      console.log("current mode: ",props.mode)
      fetchData();
      setlastmode(props.mode)
    }
    if(p==="k")
    {
      setP(timeBasedFood(new Date))
      setP(props.value)
    }
    else if(props.value!==p )
    {
      console.log("p: ",p);
      console.log("props.value: ",props.value)
      fetchData();
      setP(props.value);
      setIsTrue(false)
    }
}
setTimeout(temp, 0); 
    // if(props.mode!=lastmode)
    // {
    //   window.location.replace(`/${props.value}`);
    //   setlastmode(props.mode)
    // }
  async function fetchData() {
    setArray([]);
    console.log("fetchdata")
    let q;
    if(`${props.field}`==="popularity")
    {
      if(`${props.value}`==="htol")
      {
        q = query(collectionGroup(db, "items"), orderBy("popularity","desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        //uncomment
        // console.log(doc.data())
        console.log(doc.id, " => ", doc.data().name,doc.data().popularity,doc.data().description);
        setArray(array => [...array, doc.data()]);
      });
        
      }
      else if(`${props.value}`==="ltoh")
      {
        q = query(collectionGroup(db,"items"), orderBy("popularity"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        //uncomment
        // console.log(doc.data())
        console.log(doc.id, " => ", doc.data().name,doc.data().popularity,doc.data().description);
        setArray(array => [...array, doc.data()]);
      });
      }
    }
    else
    {
        q = query(collectionGroup(db,"items"), where(`${props.field}`, "==", `${props.value}`));  
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().name,doc.data().popularity,doc.data().description);
        setArray(array => [...array, doc.data()]);
      }); 
    }   

}


// if(props.pagename=="home" && once==0)
// {
//   window.location.replace("/");
//   setonce(1)
// }
// if(props.value==="" )
// {
//   
// }
// if(isTrue==true)
// {
//   fetchData();
//   setIsTrue(false)
//   setP(props.value);
// }
  useEffect(()=>{
    //query
    if (!ranonce) {
      console.log("UseEffect")
      setLoading(true)
      fetchData();
      console.log(props.field)
      console.log(props.value)
      ranonce = true
      setLoading(false)
  }
  console.log(" ")
  console.log(" ")

  console.log(" ")

  },[])


  // async function insertData(){
  //   let obj=
  //   {
  //     img:"https://b.zmtcdn.com/data/dish_photos/0e2/3eadae994f22d5b4b23e60de85a770e2.jpg",
  //     video:"",
  //     name:"Manchurian",
  //     food_type: "Veg",
  //     type: "Breakfast",
  //     description: "Greenz Restaurant",
  //     price: 130,
  //     popularity: 140,
  //     address:"Sector 10, Gandhinagar",
  //     review:5 //1 to 5
  // }
  //   await setDoc(doc(db, "restaurant","Greenz Restaurant","items","Manchurian"), obj);
  //   console.log(obj);
  //   console.log("data inserted in db");
  
  //   // console.log(array[0].name)
  //   // array.map((element,index)=>{
  //   //   console.log(element.name,"attttt",index)
  //   // })
  // }
  
  // async function deleteData(){
  //   await deleteDoc(doc(db, "menu", "eUsn0OV4H00R3Bl6JErv"));
  //   console.log("data deleted in db");
  // }

  function titleText(){
    if(props.value==="htol")
    {
      // forceUpdate();
      return "by Popularity High to Low"
    }
    else if(props.value==="ltoh")
    {
      return "by Popularity Low to High"
    }
    else if(props.pagename==="home")
    {
      return ""
    }
    else{
      return "in "+props.value
    }
  }
  // `${props.mode==="dark"?:"white"}`
  return (
    <div >
      <br />
      <div className="container my-4" id="area">
          {loading && <Spinner/>}
          <div className='mt-5' id="liveAlertPlaceholder"></div>
            {!isTrue ?<div>
            <h1 className="text-center" style={{color: `${props.mode==="light"?"black":"white"}`}}>Top Food Items  {titleText()}</h1>
            <div className="container">
                   {/* {array.forEach( (item, index)=>{return <div>sdfghj</div>})} */}
            <div className="row">
                    {
                      
                      array.map((element,index)=>{
                        return  <div className="col-sm-12 col-md-6 col-lg-4 itemmm" key={index} >
                          <Item 
                          img={element.img} 
                          description={element.description}
                          food_type={element.food_type}
                          price={element.price}
                          popularity= {element.popularity}
                          type={element.type}
                          review={element.review}
                          video={element.video} 
                          name={element.name}
                          func={pull_data}
                          address={element.address}
                          mode={props.mode}/>
                      </div>
                      })
                    }
                     
                   {/* <div className="col-6"><Item/></div> */}
            </div>
             {/* <button className="btn btn-primary" onClick={insertData}>insert data in db</button> */}
            
            {/* <button className="btn btn-primary" onClick={func}>isTrue</button>
            <br/> */}
            {/*
            <br/>
            <button className="btn btn-primary" onClick={deleteData}>delete data in db</button>
            <br/>
            <br/>*/}

            </div>
            
            </div>:<ItemPage img={obj2.img} 
                          description={obj2.description}
                          food_type={obj2.food_type}
                          price={obj2.price}
                          popularity= {obj2.popularity}
                          type={obj2.type}
                          review={obj2.review}
                          video={obj2.video} 
                          name={obj2.name}
                          address={obj2.address}
                          mode={props.mode}
                           />}
        </div>
    </div>
  )
}



// img={element.img?element.img:"image"} 
// description={element.description?element.description:"description"}
// food_type={element.food_type?element.food_type:"image"}
// price={element.price?element.price:"0"}
// popularity= {element.popularity?element.popularity:"0"}
// type={element.type?element.type:"Veg"}
// video={element.video?element.video:"video not found"} 
// name={element.name?element.name:"name"}/>

// {this.state.articles.map((element,index)=>{
//   return <div className=" col-sm-12 col-md-6 col-lg-4" key={element.url}>
//   <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage?element.urlToImage:"https://cdn.24.co.za/files/Cms/General/d/3366/16f321d743624bb5bfcda90a10fbfc2c.jpg"} newsurl={element.url?element.url:""} author={element.author} newdate={element.publishedAt} sourcename={element.source.name}/>
//   <span style={element.myStyle} key={index} ></span>;
//   </div>
// })}