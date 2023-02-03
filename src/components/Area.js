import React, { useEffect, useState } from 'react'
import Item from './Item'
import Spinner from './Spinner'
import {db} from '../firebase'
import { doc, setDoc,deleteDoc,collection,getDocs,query,where,orderBy,collectionGroup } from "firebase/firestore"; 

import ItemPage from './ItemPage';
export default function Area(props) {
  let [loading,setLoading]=useState(true)

  let [array,setArray]=useState([])
  var ranonce = false;

  let [isTrue,setIsTrue]=useState(false)
  let [obj2,setobj2]=useState({})

  const pull_data=(data) =>{
    setobj2(data)
    console.log("obj2:",obj2);
    setIsTrue(true)  
  }
  // function shuffle(array) {
  //   let currentIndex = array.length,  randomIndex;
  
  //   // While there remain elements to shuffle.
  //   while (currentIndex !== 0) {
  
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  
  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex], array[currentIndex]];
  //   }
  // }

  useEffect(()=>{

    // loadData();
    //query
    if (!ranonce) {
      async function fetchData() {
        let q;
        if(`${props.field}`==="popularity")
        {
          if(`${props.value}`==="htol")
          {
             q = query(collectionGroup(db, "items"), orderBy("popularity","desc"));
            
          }
          else if(`${props.value}`==="ltoh")
          {
             q = query(collectionGroup(db,"items"), orderBy("popularity"));
          }
        }
        else
        {
             q = query(collectionGroup(db,"items"), where(`${props.field}`, "==", `${props.value}`));   
        }   
          const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
            console.log(doc.id, " => ", doc.data().name,doc.data().popularity,doc.data().description);
            setArray(array => [...array, doc.data()]);
            // setArray(array => shuffle(array));
          });
          // console.log(array)
    }
    fetchData();
    console.log(props.field)
    console.log(props.value)
    console.log("UseEffect")
    ranonce = true
    setLoading(false)
  }
  },[])

  
  async function insertData(){
    let obj=
    {
              img:"https://b.zmtcdn.com/data/dish_photos/086/2b86c1e8fb771f76309c4c10926be086.jpg?fit=around|130:130&crop=130:130;",
      video:"",
      name:"Ala Mexican Pizza",
      food_type: "Veg",
      type: "Dinner",
      description: "La Pino'z Pizza",
      price: 190,
      popularity: 222,
      address:"Airport Gandhinagar Highway, Gandhinagar",
      review:5 //1 to 5
  }
    await setDoc(doc(db, "restaurant","La Pino'z Pizza","items","Ala Mexican Pizza"), obj);
    console.log(obj);
    console.log("data inserted in db");
  
    // console.log(array[0].name)
    // array.map((element,index)=>{
    //   console.log(element.name,"attttt",index)
    // })
  }
  
  async function deleteData(){
    await deleteDoc(doc(db, "menu", "eUsn0OV4H00R3Bl6JErv"));
    console.log("data deleted in db");
  }

  function titleText(){
    if(props.value==="htol")
    {
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
  
  return (
    <div>

      <div className="container my-4" >

          {loading && <Spinner/>}
            {!isTrue ?<div>
            <h1><u>Top Food Items  {titleText()}</u></h1>
            <div className="container">
                   {/* {array.forEach( (item, index)=>{return <div>sdfghj</div>})} */}
            <div className="row">
                    {
                      array.map((element,index)=>{
                        
                        return  <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
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
                          address={element.address}/>
                      </div>
                      })
                    }
                     
                   {/* <div className="col-6"><Item/></div> */}
            </div>
             {/* <button className="btn btn-primary" onClick={insertData}>insert data in db</button> */}
            <br/>
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
                          address={obj2.address}/>}
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